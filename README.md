#  Basic React Native boilerplate (Android) for Beginners
This project is a React Native boilerplate that can be used to kickstart a mobile application.

The boilerplate gives an architecture optimized for building solid cross-platform mobile applications through separation of concerns between the UI and business logic.It is amazingly reported so that each piece of code that lands in your application can be understood on and utilized.

```bash
If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :)
```
## Libraries Installed 


     "@react-native-community/async-storage": "^1.9.0",
        "@react-native-community/masked-view": "^0.1.9",
        "@react-navigation/native": "^5.1.5",
        "@react-navigation/stack": "^5.2.10",
        "axios": "^0.19.2",
        "react": "16.11.0",
        "react-native": "0.62.2",
        "react-native-config": "^1.0.0",
        "react-native-elements": "^1.2.7",
        "react-native-floating-action-button": "^0.2.2",
        "react-native-gesture-handler": "^1.6.1",
        "react-native-paper": "^3.8.0",
        "react-native-reanimated": "^1.8.0",
        "react-native-safe-area-context": "^0.7.3",
        "react-native-screens": "^2.4.0",
        "react-native-vector-icons": "^6.6.0"

# Architecture
The project has separation of concerns to increase flexability and maintabibility. The concerns are divided into portions given below as : 

### Presentational Layer 
 The presentational layer has all the component and files on which placements and elements are displayed which will be visble for the user and through which user will interact with the system.
 ### Action Layer 
 The Action layer has all the component and files which will be used to perform certain actions . For example , Login Method, Signup Method, Field Validator etc.
 ### Network API calls
 The Action layer has all the component and files which will be used to perform Api calls . This layer will be managed by AXIOS library.  
 
 # Division of Code
 The division of code is very necessary to increase reusability and to increase flexability. This project is designed in this way that it welcome all the changes. Some of divisions are given below :
  ### Utilis
 The Utilis folder will have all the files to define , Labels, Cosntants , and other information which will be used at utilis in the project. 
   ### Assets
 The Assets folder will all the resources like images, audio files etc. 
   ### Config
 The Config folder will all the application configuration settings.
   ### Components
 The Component folder will have all the custom components like custom text fields, buttons, header etc .
   ### Styles
 The Stlyes folder will have all the css files to provide project level design. This folder also contains color folder to define theme colors separtely.
 
 # Enviornment Setting 
Every one wants to optimize the way of distribution of app for quicky testing. Some times we have separate servers and backend databases for QA , DEV , Stagging and Production. This project has 4 build Variants i.e Debug, QA Release, Stagging Release, Release.  You can change variant configurations from following files.
`.env.dev` for Debug
`.env.qa` for QA Release
 `.env.stagging` for Stagging Release
 `.env.production` for Release
 
 QA Release, Stagging Release, Release will have JS Bundle so it will be executed without NODE JS Server, while Debug is for Dev team so it will need Node JS ( Metro Server Running).
 
 You can change files for each variant from `android/app/build.gradle`
 
 

    project.ext.envConfigFiles = [
        debug: ".env.dev",
        release: ".env.production",
        qarelease: ".env.qa",
        staggingrelease : ".env.stagging",
        anothercustombuild: ".env.qa",
    ]
    
## Using the boilerplate 
To create a new project using the boilerplate:

- clone this repository
- remove the previous git history: rm -rf .git/
- install the npm dependencies by npm install, npm install  react-native-cli'
- rename the project to your own project name
 
## Running the project
Assuming you have all the requirements installed, you can setup and run the project by running:

#### Creating APK (Unsigned)
`cd android`
`./gradlew clean assembleQarelease` to create QA Release APK
`./gradlew clean assembleStaggingrelease` to create Stagging Release APK
`./gradlew clean assembleRelease` to create Release APK

#### Run on Device / Emulator
`react-native run-android --variant=qarelease`
`react-native run-android --variant=staggingrelease`
`react-native run-android --variant=release`

by default, Debug variant will be executed on device. 

## Contributions 
Contributions, issues and feature requests are welcome.
Feel free to check [issues](https://github.com/abidjamil/React-Native-Boiler-Plate/issues "issues") page if you want to contribute.

## About Me
My name is Abid Jamil from Pakistan, I am Senior Software Engineer at Nextbridge Ltd Pakistan. I have expertise in Native Android | React - Native | IOS | Android | Java | Kotlin | Javascript | MVVM | MVP | RxJava | Dagger | Material Design | Live Data | Data Binding. Futhermore, I am open source contribution and computer science researcher. I have published 17 research paper which is avaiable on [Google Scholar Profile](https://scholar.google.com/citations?user=sl7oXNsAAAAJ&hl=en "Google Scholar Profile").  I have delivered many talks in different national and International universities around the globe. 

- Github : [abidjamil ](https://github.com/abidjamil "abidjamil ")
- Youtube : [Abid Jamil](https://www.youtube.com/channel/UCzhsWt46D-oOX5VyubOS3jQ "Abid Jamil")
- Facebook : [Abid Jamil](http://www.facebook.com/chabidgill "Abid Jamil")


