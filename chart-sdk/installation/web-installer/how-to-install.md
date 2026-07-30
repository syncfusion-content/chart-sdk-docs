---
layout: post
title: Installing Syncfusion Chart SDK Web Installer - Syncfusion
description: Learn here about how to install the Syncfusion Chart SDK Web Installer after downloading it from our Syncfusion website.
platform: Chart SDK
control: Installation and Deployment
documentation: ug
---

# Installing Syncfusion Chart SDK web installer


## Overview

For the Syncfusion Chart SDK product, Syncfusion offers a Web Installer. The web installer is a small bootstrapper that downloads and installs the Chart SDK components during installation, avoiding the need to download a large installer upfront. You can get the most recent version of the Essential Studio Web Installer from the [Syncfusion downloads page](https://www.syncfusion.com/downloads/latest-version).

## Installation

The steps below show how to install the Syncfusion Chart SDK using the Web Installer.

1.  Open the Syncfusion Essential Studio Chart SDK Web Installer file from downloaded location by double-clicking it. The Installer Wizard automatically opens and extracts the package.

    ![Installer Extraction Wizard](images/Step-by-Step-Installation_img1.png)

    
    N> The installer wizard extracts the syncfusionessentialChart SDKwebinstaller_{version}.exe dialog, which displays the package's unzip operation.
    
2. 	The Syncfusion Chart SDK Web Installer's welcome wizard will be displayed. Click the Next button.

    ![Welcome wizard](images/Step-by-Step-Installation_img2.png)

  
3.  The Platform Selection Wizard will appear. From the **Available** tab, select the products to be installed. Select the **Install All** checkbox to install all products. 
    
	<em>**Available**</em>
	
	![Platform Selection wizard Available](images/Step-by-Step-Installation_img3.png)
	
	If you have multiple products installed in the same version, they will be listed under the **Installed** tab. You can also select which products to uninstall from the same version. Click the Next button.
	
	<em>**Installed**</em>
	
    ![Platform Selection wizard Installed](images/Step-by-Step-Installation_img24.png)
	
	I> If the required software for the selected product isn't already installed, the **Additional Software Required** alert will appear. You can, however, continue the installation and install the necessary software later.
	
	**Required Software**
	
	![Additional Software Alert](images/Step-by-Step-Installation_img5.png)
		
	
4.	If previous version(s) for the selected products are installed, the Uninstall previous version wizard will be displayed. You can see the list of previously installed versions for the products you've chosen here. To remove all versions, check the **Uninstall All** checkbox. Click the Next button.

	![Existing Version for install](images/Step-by-Step-Installation_img20.png)
	
	N> From the 2021 Volume 1 release, Syncfusion has provided option to uninstall the previous versions from 18.1 while installing the new version.
	
	
5.	Pop up screen will be displayed to get the confirmation to uninstall selected previous versions.

	![Existing Version for install](images/Step-by-Step-Installation_img21.png)
	
	
6. 	The Confirmation Wizard will appear with the list of products to be installed/uninstalled. You can view and modify the list of products that will be installed and uninstalled from this page.

    ![Confirmation for install/uninstall](images/Step-by-Step-Installation_img15.png)
	
	N> By clicking the **Download Size and Installation** Size links, you can determine the approximate size of the download and installation
	

7.  The Configuration Wizard will appear. You can change the Download, Install, and Demos locations from here. You can also change the Additional settings on a product-by-product basis. Click Next to install with the default settings.

    ![Install and samples location for install](images/Step-by-Step-Installation_img8.png)
	
	**Additional settings**
	
    * Select the **Install Demos** check box to install Syncfusion samples, or leave the check box unchecked, if you do not want to install Syncfusion samples
	* Select the **Register Syncfusion Assemblies in GAC** check box to install the latest Syncfusion assemblies in GAC, or clear this check box when you do not want to install the latest assemblies in GAC.
    * Select the **Configure Syncfusion controls in Visual Studio** check box to configure the Syncfusion controls in the Visual Studio toolbox, or clear this check box when you do not want to configure the Syncfusion controls in the Visual Studio toolbox during installation. Note that you must also select the Register Syncfusion assemblies in GAC check box when you select this check box.
    * Select the **Configure Syncfusion Extensions controls in Visual Studio** checkbox to configure the Syncfusion Extensions in Visual Studio or clear this check box when you do not want to configure the Syncfusion Extensions in Visual Studio.
    * Check the **Create Desktop Shortcut** checkbox to add a desktop shortcut for Syncfusion Control Panel
    * Check the **Create Start Menu Shortcut** checkbox to add a shortcut to the start menu for Syncfusion Control Panel



8.  After reading the License Terms and Conditions, check the **I agree to the License Terms and Privacy Policy** check box. Click the Next button.

9.  The login wizard will appear. You must enter your Syncfusion email address and password. If you do not already have a Syncfusion account, you can create one by clicking on **Create an Account**. If you have forgotten your password, click **Forgot Password** to create a new one. Click the Install button. 

    ![Login wizard install](images/Step-by-Step-Installation_img9.png)
	
	I> The products you have chosen will be installed based on your Syncfusion License (Trial or Licensed).

10. The download and installation\uninstallation progress will be displayed as shown below.

    ![Download and Installation progress install](images/Step-by-Step-Installation_img10.png)

11. When the installation is finished, the **Summary** wizard will appear. Here you can see the list of products that have been installed successfully and those that have failed. To close the Summary wizard, click Finish. 

    ![Installation Summary](images/Step-by-Step-Installation_img11.png)
	
	* To open the Syncfusion Control Panel, click **Launch Control Panel**.

12. After installation, there will be two Syncfusion control panel entries, as shown below. The Essential Studio entry will manage all Syncfusion products installed in the same version, while the Product entry will only uninstall the specific product setup.

    ![Control Panel](images/Step-by-Step-Installation_img19.png)
	
	
	
## Uninstallation

The Syncfusion Chart SDK installer can be uninstalled in two ways.

- Uninstall the Chart SDK using the Syncfusion Chart SDK Web Installer.
- Uninstall the Chart SDK from the Windows Control Panel.

Follow one of the options below to uninstall the Syncfusion Chart SDK installer.

### Option 1: Uninstall the Chart SDK using the Syncfusion Chart SDK Web Installer

Syncfusion provides the option to uninstall products of the same version directly from the Web Installer application. Select the products to be uninstalled from the list, and the Web Installer will uninstall them one by one.

![Platform Selection wizard Installed](images/Step-by-Step-Installation_img12.png)

### Option 2: Uninstall the Chart SDK from Windows Control Panel
    
You can uninstall all the installed products by selecting the **Syncfusion Essential Studio {version}** entry (element 1 in the below screenshot) from the Windows control panel, or you can uninstall Chart SDK alone by selecting the **Syncfusion Essential Studio for Chart SDK {version}** entry (element 2 in the below screenshot) from the Windows control panel.

![Control Panel](images/Step-by-Step-Installation_img22.png)
    
N> If the **Syncfusion Essential Studio for Chart SDK {version}** entry is selected from the Windows control panel, the Syncfusion Essential Studio Chart SDK alone will be removed and the below default MSI uninstallation window will be displayed.	

1. The welcome wizard of the Web Installer appears. Click **Next**.

   ![Welcome wizard uninstall](images/Step-by-Step-Installation_img2.png)

2. The Platform Selection wizard appears. From the **Installed** tab, select the products to uninstall. To select all products, select the **Uninstall All** check box. Click **Next**.

   **Installed**

   ![Platform Selection wizard Installed](images/Step-by-Step-Installation_img4.png)

   You can also select products to install from the **Available** tab. Click **Next**.

   **Available**

   ![Platform Selection wizard Available](images/Step-by-Step-Installation_img25.png)

3. If any other products are also selected for installation, the **Uninstall previous version** wizard appears with the previous versions installed for the selected products. Here you can view the list of installed previous versions. Select the **Uninstall All** check box to select all versions. Click **Next**.

   ![Existing Version for install](images/Step-by-Step-Installation_img26.png)

4. A pop-up screen appears to confirm the uninstall of the selected previous versions.

   ![Existing Version for install](images/Step-by-Step-Installation_img21.png)

5. The Confirmation wizard appears with the list of products to install and uninstall. You can view and modify the list from this page.

   ![Confirmation for install/uninstall](images/Step-by-Step-Installation_img15.png)

   N> By clicking the **Download Size** and **Installation Size** links, you can determine the approximate size of the download and installation.

6. The Configuration wizard appears. You can change the Download, Install, and Demos locations from here, and configure the additional settings on a product-by-product basis. Click **Next** to install with the default settings.

   ![Install and samples location install/uninstall](images/Step-by-Step-Installation_img23.png)

7. Read the License Terms and Privacy Policy, then select the **I agree to the License Terms and Privacy Policy** check box. Click **Next**.

8. The login wizard appears. Enter your Syncfusion email address and password. If you do not have a Syncfusion account, click **Create an Account** to sign up. If you have forgotten your password, click **Forgot Password** to reset it. Click **Install**.

   ![Login wizard install/uninstall](images/Step-by-Step-Installation_img9.png)

   I> The products you have chosen will be installed based on your Syncfusion license (Trial or Licensed).

9. The download, installation, and uninstallation progress is shown.

   ![Download and Installation progress install/uninstall](images/Step-by-Step-Installation_img17.png)

10. When the installation is finished, the **Summary** wizard appears. Here you can see the list of products that have been successfully and unsuccessfully installed or uninstalled. To close the **Summary** wizard, click **Finish**.

    ![Summary install/uninstall](images/Step-by-Step-Installation_img18.png)
	
	* To open the Syncfusion Control Panel, click **Launch Control Panel**.