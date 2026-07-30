---
layout: post
title: Installing Syncfusion Chart SDK Mac installer - Syncfusion
description: Learn here about how to install the Syncfusion Chart SDK Mac installer after downloading it from our Syncfusion website.
platform: Chart SDK
control: Installation and Deployment
documentation: ug
---

# Installing Syncfusion Chart SDK Mac installer

## Steps to resolve the warning message in Catalina OS or later

While running the Syncfusion Chart SDK Mac Installer on Catalina macOS or later, the alert below is displayed.

![Catalina macOS Gatekeeper alert](images/Mac_Catalina_MacOS_Alert1.png)

If you receive this alert, follow the steps below for the easiest solution.

1. Right-click the downloaded `.pkg` file in Finder.
2. Select the **Open With** option and choose **Installer (default)**. The pop-up shown below appears.

   ![Open With Installer pop-up](images/Mac_Catalina_MacOS_Alert2.png)

3. Click **Open**. The installer window opens.

## Step-by-Step Installation

The steps below show how to install the Syncfusion Chart SDK Mac Installer.

1. Open the Syncfusion Chart SDK Mac installer (.pkg) file. The installer wizard opens. Click **Continue**.

   ![Welcome wizard](images/Mac_Installer1.png)

2. The Software License Agreement wizard appears. Click the **Continue** button.

   ![License Agreement](images/Mac_Installer2.png)

3. The License Agreement confirmation window appears. If you have read the Software License Agreement, click **Agree**.

   ![License Agreement confirmation](images/Mac_Installer3.png)

   N> The Unlock key is not required to install the Syncfusion Chart SDK Mac installer.

4. The Destination Select wizard appears. You can choose the disk on which to install the Syncfusion Chart SDK Mac installer.

   ![Destination](images/Mac_Installer5.png)

5. The Installation Type wizard appears. Click **Install** to begin the standard installation of the Syncfusion Chart SDK Mac installer.

   ![Install location](images/Mac_Installer6.png)

6. The Authentication window appears. To begin the installation, enter the Mac machine's password and click **Install Software**.

   ![Authentication](images/Mac_Installer7.png)

7. The installation process begins on your machine. Wait for it to complete.

   ![Installation progress](images/Mac_Installer8.png)

8. Once the installation is complete, the completion screen is displayed. To exit the installation wizard, click **Close**.

   ![Installation completed](images/Mac_Installer9.png)

   By default, the Mac installer installs the files in the following location:

   **Location:** {Documents}/Syncfusion/{version}/Chart SDK
   
   ![Installed Location](images/Mac_Installer10.png)

## License Key Registration in Samples

After the installation, the license key is required to register the demo source that is included in the Mac installer. To learn about the steps for license registration for the ASP.NET Core - EJ2 samples in the Essential Studio Chart SDK Mac installer, please refer to this.

* Register the license key in the [Program.cs](https://ej2.syncfusion.com/aspnetcore/documentation/licensing/how-to-register-in-an-application#for-aspnet-core-application-using-net-60) file if you created the ASP.NET Core web application with Visual Studio 2022 and .NET 6.0.
* Register the license key in Configure method of [Startup.cs](https://ej2.syncfusion.com/aspnetcore/documentation/licensing/how-to-register-in-an-application#for-aspnet-core-application-using-net-50-or-net-31)