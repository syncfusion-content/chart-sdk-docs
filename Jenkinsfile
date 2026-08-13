node('content')
{
  timestamps
  {
    timeout(time: 7200000, unit: 'MILLISECONDS') {

      def platform = 'file-formats'
      def Content  = ""
      env.PATH = "${ProgramFiles}" + "\\Git\\mingw64\\bin;${env.PATH}"

      try {
        // ---------- Stage 1: Checkout ----------
        stage('Checkout') {
          dir('Spell-Checker') {
            echo "Checkout starting"

            // Wipe any leftover state from a previous failed run
            deleteDir()

            checkout([
              $class: 'GitSCM',
              branches: [[name: "*/${env.githubSourceBranch}"]],
              userRemoteConfigs: [[
                credentialsId: env.githubCredentialId,
                url: 'https://github.com/syncfusion-content/chart-sdk-docs.git'
              ]],
              extensions: [
                cloneOption([
                  depth:   1,
                  noTags:  true,
                  shallow: true,
                  timeout: 30
                ])
              ]
            ])

            echo "Checkout finish"

            // ---------- Page through PR changed files ----------
            def page = 1
            while (true) {
              echo "Get commit details, page ${page}"

              def apiUrl = 'https://api.github.com/repos/syncfusion-content/'
                + env.githubSourceRepoHttpUrl.split('/')[-1]
                + '/pulls/' + env.pullRequestId
                + '/files?per_page=100&page=' + page

              def branchCommitDetails = bat returnStdout: true, script:
                'curl -H "Accept: application/vnd.github.v3+json" '
                + '-u SyncfusionBuild:' + env.GithubBuildAutomation_PrivateToken
                + ' ' + apiUrl

              def ChangeFiles = branchCommitDetails.split('"filename": ')

              for (int i = 1; i < ChangeFiles.size(); i++) {
                def ChangeFile = ChangeFiles[i].split(',')[0].replace('"', '')
                Content += env.WORKSPACE + "\\Spell-Checker\\" + ChangeFile + "\r\n"
              }

              // Last page
              if ((ChangeFiles.size() - 1) < 100) {
                break
              }
              page++
            }

            // Ensure ccireports exists
            bat 'if not exist "' + env.WORKSPACE + '\\cireports" mkdir "' + env.WORKSPACE + '\\cireports"'

            if (Content) {
              writeFile file: env.WORKSPACE + "/cireports/content.txt", text: Content
              echo "Wrote content.txt with ${Content.split('\r\n').size() - 1} entries"
            } else {
              writeFile file: env.WORKSPACE + "/cireports/content.txt",
                         text: "There are no filepaths found for this commit."
              echo "No files found in PR"
            }
          }

          // ---------- Stage 2: Pull ug_spell (formerly ug_spellchecker) ----------
          echo "Checkout UG spellchecker"
          checkout([
            $class: 'GitSCM',
            branches: [[name: '*/development']],
            doGenerateSubmoduleConfigurations: false,
            extensions: [
              [$class: 'RelativeTargetDirectory', relativeTargetDir: 'ug_spell'],
              [$class: 'CloneOption', depth: 1, shallow: true, noTags: true, timeout: 30]
            ],
            submoduleCfg: [],
            userRemoteConfigs: [[
              credentialsId: env.githubCredentialId,
              url: 'https://github.com/syncfusion-content/ug_spellchecker.git'
            ]]
          ])
        }
      } catch (Exception e) {
        echo "Checkout stage failed: ${e.message}"
        currentBuild.result = 'FAILURE'
      }

      // ---------- Stage 3: Build ----------
      if (currentBuild.result != 'FAILURE') {
        stage('Build Source') {
          echo "Build start"
          try {
            gitlabCommitStatus("Build") {
              bat 'powershell.exe -ExecutionPolicy ByPass -File '
                + env.WORKSPACE + "/ug_spell/build.ps1 "
                + '-Script ' + env.WORKSPACE + "/ug_spell/build.cake "
                + '-Target build '
                + '-Platform "' + platform + '" '
                + '-Targetbranch ' + env.githubTargetBranch + ' '
                + '-Branch "' + env.githubSourceBranch + '"'
            }

            def files = findFiles(glob: '**/cireports/errorlogs/*.txt')
            if (files.size() > 0) {
              currentBuild.result = 'FAILURE'
            }
          } catch (Exception e) {
            echo "Build stage failed: ${e.message}"
            currentBuild.result = 'FAILURE'
          }
        }
      }

      // ---------- Stage 4: Delete Workspace ----------
      stage('Delete Workspace') {
        def files = findFiles(glob: '**/cireports/*.*')

        if (files.size() > 0) {
          archiveArtifacts artifacts: 'cireports/', excludes: null
        }

        step([$class: 'WsCleanup'])
      }
    }
  }
}
