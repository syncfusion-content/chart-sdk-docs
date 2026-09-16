node('GithubContent')
{ 
timestamps
  {
     timeout(time: 7200000, unit: 'MILLISECONDS') {
String platform='chart-sdk';
   try
	{   
		powershell '''
                    try {
                        Write-Host "Checking current C: drive usage..."
                        $volume = Get-Volume -DriveLetter C
                        Write-Host "Before Resize: $($volume.Size / 1GB) GB total"

                        $supportedSize = Get-PartitionSupportedSize -DriveLetter C
                        if ($volume.Size -lt $supportedSize.SizeMax) {
                            Write-Host "Resizing C: partition to maximum available size..."
                            Resize-Partition -DriveLetter C -Size $supportedSize.SizeMax

                            # Verify after resize
                            Start-Sleep -Seconds 5
                            $volume = Get-Volume -DriveLetter C
                            Write-Host "After Resize: $($volume.Size / 1GB) GB total"
                        } else {
                            Write-Host "C: partition is already using full available space."
                        }
                    } catch {
                        Write-Error "Failed to resize partition: $_"
                    }
                '''
				stage('Uninstall .NET 5 & 7 SDK') {
					powershell '''
						Write-Host "Removing .NET 5 & 7 SDKs if present..."

					$paths = @(
						"$env:ProgramFiles\\dotnet\\sdk",
						"$env:LOCALAPPDATA\\Microsoft\\dotnet\\sdk"
					)

					foreach ($path in $paths) {
						if (Test-Path $path) {
							Get-ChildItem $path -Directory -ErrorAction SilentlyContinue |
								Where-Object { $_.Name -match "^(5|7)\\." } |
								ForEach-Object {
									Write-Host "Deleting $($_.FullName)"
									Remove-Item $_.FullName -Recurse -Force -ErrorAction SilentlyContinue
								}
						}
					}

					Write-Host ".NET cleanup completed."
					'''
				}
	
	def Content="";
		env.PATH = "${ProgramFiles}"+"\\Git\\mingw64\\bin;${env.PATH}"
		
		//Clone scm repository in Workspace source directory
		stage ('Checkout')   
	    { 
	    dir('Spell-Checker') 
           {
		     checkout scm
			 
			 def page = 1
			 while(true)
            {  
			 def branchCommit = 'https://api.github.com/repos/syncfusion-content/'+env.githubSourceRepoHttpUrl.split('/')[env.githubSourceRepoHttpUrl.split('/').size() - 1]+'/pulls/' + env.pullRequestId + '/files?per_page=100^&page='+ page
             
            String branchCommitDetails = bat returnStdout: true, script: 'curl -H "Accept: application/vnd.github.v3+json" -u SyncfusionBuild:' + env.GithubBuildAutomation_PrivateToken + " " + branchCommit

            def ChangeFiles= branchCommitDetails.split('"filename": ');

            for (int i= 1; i < ChangeFiles.size();i++)
            {
            def ChangeFile= ChangeFiles[i].split(',')[0].replace('"', '')
            Content += env.WORKSPACE + "\\Spell-Checker\\" + ChangeFile + "\r\n";
            }

           // Last page
           if((ChangeFiles.size() - 1) < 100)
           {
             break
           }
           page++
           }
 
		      if (Content) {  
                 writeFile file: env.WORKSPACE+"/cireports/content.txt", text: Content
              }
              else  {
                writeFile file: env.WORKSPACE+"/cireports/content.txt", text: "There are no filepaths found for this commit."
              }
			  
		    }
			 
		   //Checkout the ug_spellchecker from development Source
	  checkout([$class: 'GitSCM', branches: [[name: '*/development']], doGenerateSubmoduleConfigurations: false, extensions: [[$class: 'RelativeTargetDirectory', relativeTargetDir: 'ug_spellchecker']], submoduleCfg: [], userRemoteConfigs: [[credentialsId: env.githubCredentialId, url: 'https://github.com/syncfusion-content/ug_spellchecker.git']]])
		 
	  }
	}
	
    catch(Exception e)
    {
		currentBuild.result = 'FAILURE'
    } 

if(currentBuild.result != 'FAILURE')
{ 
	stage 'Build Source'
	try
	{
	    gitlabCommitStatus("Build")
		{
		bat 'powershell.exe -ExecutionPolicy ByPass -File '+env.WORKSPACE+"/ug_spellchecker/build.ps1 -Script "+env.WORKSPACE+"/ug_spellchecker/build.cake -Target build -Platform \""+platform+"\" -Targetbranch "+env.githubTargetBranch+" -Branch "+'"'+env.githubSourceBranch+'"'
	 	}
	 	
	 	
    }
	 catch(Exception e) 
    {
		currentBuild.result = 'FAILURE'
    }
}	

	stage 'Delete Workspace'
	
		def files = findFiles(glob: '**/cireports/*.*')      
        
    if(files.size() > 0) 		
    { 		
         archiveArtifacts artifacts: 'cireports/', excludes: null 	 
    }
	    step([$class: 'WsCleanup'])	}
	    }
}
