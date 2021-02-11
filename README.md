# world-cup-champions
A react native project that list the world cup champions.


## Install the dependencies
```bash
npm install
```
or
```bash
yarn
```

### Running app on Android devices in Android Emulator
## Step 1 : Create a AVD
If you use Android Studio to open ./AwesomeProject/android, you can see the list of available Android Virtual Devices (AVDs) by opening the "AVD Manager" from within Android Studio. Look for an icon that looks like this:

Android Studio AVD Manager

If you have recently installed Android Studio, you will likely need to create a new AVD. Select "Create Virtual Device...", then pick any Phone from the list and click "Next", then select the Q API Level 29 image.

Click "Next" then "Finish" to create your AVD. At this point you should be able to click on the green triangle button next to your AVD to launch it, then proceed to the next step.

## Step 2: Start Metro
First, you will need to start Metro, the JavaScript bundler that ships with React Native. Metro "takes in an entry file and various options, and returns a single JavaScript file that includes all your code and its dependencies."—Metro Docs

To start Metro, run npx react-native start inside your React Native project folder:

```bash
npx react-native start
```
## Step 3: Start your application
Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:
```bash
npx react-native run-android
```
If everything is set up correctly, you should see your new app running in your Android emulator shortly.
<img src="https://raw.githubusercontent.com/waldenermonteiro/world-cup-champions/master/device-readme.png" width="320px" height="635px" />

### Running app on Android devices
## Step 1 : Enable Debugging over USB
Most Android devices can only install and run apps downloaded from Google Play, by default. You will need to enable USB Debugging on your device in order to install your app during development.

To enable USB debugging on your device, you will first need to enable the "Developer options" menu by going to Settings → About phone → Software information and then tapping the Build number row at the bottom seven times. You can then go back to Settings → Developer options to enable "USB debugging".
## Step 2 : Plug in your device via USB

```bash
$ adb devices
List of devices attached
emulator-5554 offline   # Google emulator
14ed2fcc device
```
Seeing device in the right column means the device is connected. You must have only one device connected at a time.

## Step 3 : Run the app

Type the following in your command prompt to install and launch your app on the device:
```bash
$ npx react-native run-android
```
