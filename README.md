# DoubleBassApp
An educational application for the Double Bass, updated to be cross-platform via PhoneGap/Apache Cordova.

# Installation

In order to install the application, you must have Apache Cordova and NodeJS installed on your computer.
The application currently supports iOS and Android operating systems.

## iOS Installation

Go to the folder in which the application is stored and enter the following command into the terminal window:

    cordova plugin add org.apache.cordova.dialogs

Then, run:

    cordova build ios
    
This will create all of the folders and directories in order to run the application on an Apple device.
(*note: You must be on an Apple computer with Xcode installed in order to do this)

From there, if your device is plugged in, try running:

    cordova run ios
    
If everything is set up correctly, the application should run on your device shortly. If it doesn't see your device, it should try to open an emulator

Otherwise, once the project is built in cordova, it can be opened in Xcode and run on its emulators or on a device from there.

## Android Installation

Go to the folder in which the application is stored and enter the following command into the command line:

    cordova plugin add org.apache.cordova.dialogs

Then, run:

    cordova build android
    
This will create all of the folders and directories in order to run the application on an Android device.
(*note: You must have Java and the Ant Build tools installed, and added to your command line PATH in order to do this)

From there, if your device is plugged in, try running:

    cordova run android
    
If everything is set up correctly, the application should run on your device shortly. If it doesn't see your device, it should try to open an emulator

Otherwise, once the project is built in cordova, it can be opened in Eclipse, or whichever Android IDE you like and be run from there.

