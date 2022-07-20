<div align = "center">
    <h1> Rocket Help </h1>
</div>
<br>

<div align = 'center' justify-content = 'space-around' >
   <img src= './src/assets/project/logo/logo_primary.svg' alt = 'Rocket Help' >
</div>
<br>
<br>

<h3 align = "center">
  IGNITE LAB 3 - REACT NATIVE
</h3>

| | | | |
|:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:|
|<img width="1604" alt="Login" src="./src/assets/project/screens/project-1.1.png"> |<img width="1604" alt="Home - no calls" src="./src/assets/project/screens/project-1.2.png"> | <img width="1604" alt="Home - calls in progress" src="./src/assets/project/screens/project-1.3.png">|<img width="1604" alt="Home - completed calls" src="./src/assets/project/screens/project-1.4.png">|<br>
|<img width="1604" alt="New request" src="./src/assets/project/screens/project-1.5.png">|<img width="1604" alt="Request in progress" src="./src/assets/project/screens/project-1.6.png">|<img width="1604" alt="Completed request" src="./src/assets/project/screens/project-1.7.png">|
<br>

<p></p>

<p align="center">
 <a href="#target">Target</a> •
 <a href="#technologies">Technologies</a> •
 <a href="#route">Route</a> 
</p>
<br>

<div id="target">
<h2> 💡 Target </h2>
Build an user request support mobile app for Android and iOS (Hybrid) using React Native
</div>
<br>

<div id="technologies">
<h2> 🛠 Technologies </h2>
The main technologies that has been used in this project were:
 
 |                  Type                  |                Tools                |                                 References                                  |
| :------------------------------------: | :---------------------------------: | :-------------------------------------------------------------------------: |
|       Programming Language (App)       |                REACT NATIVE                 |              https://reactnative.dev/                           | 
|       Programming Language (App)       |                TYPESCRIPT                   |              https://www.typescriptlang.org/                    | 
|       Open source platform             |           EXPO BARE WORKFLOW                |              https://expo.dev/                                  | 
|                   IDE                  |        VISUAL STUDIO CODE (VS CODE)         |              https://code.visualstudio.com/                     |
|        Design Interface Tool           |         FIGMA  (Prototype - UX/UI)          |              https://www.figma.com/                             |
|   UI Utility-first Component Library   |                  NATIVE BASE                |              https://nativebase.io/                             |
|              Graphic components        |                 PHOSPHOR ICONS              |              https://phosphoricons.com/                         |
|       Navigation between pages         |              REACT NAVIGATION               |              https://reactnavigation.org/                       |
|             Database                   |                    FIREBASE                 |              https://console.firebase.google.com/               |
| React Native support Library for Firebase |             REACT NATIVE FIREBASE           |              https://rnfirebase.io/                             |

<br>

<div align = 'center'>
  <h3>Database</h3>
  <img height =' 100px ' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
  <br>
  <h3>IDE</h3>
  <img height =' 100px ' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
  <br>
  <h3>UX/UI</h3>
  <img height =' 100px ' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
  <img height =' 100px ' src="./src/assets/project/logo/phosphor-icons_logo.png"/>
  <img height =' 100px ' src="./src/assets/project/logo/nativebase_logo.svg" />
  <br>
  <h3>Frontend</h3>
  <img height =' 100px ' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
  <img height =' 100px ' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
  <img height =' 100px ' src="./src/assets/project/logo/react_navigation.svg" />
  <img height =' 100px ' src="./src/assets/project/logo/expo.png" />
  <br>
</div>

<div id="route">
<h2> 🔎 Route </h2>

<ol>
    <li>Part 1 - The beginning of the React Native specialization
      <ul>
        <li>Build the project prototype: https://www.figma.com/file/15HnazfsI1NFV13fIXy1wu/React-Native-Insider-5?node-id=0%3A1</li>
        <li>Install VS Code (IDE)</li>
        <li>Install "R Component" extension at VS Code</li>
        <li>Install Expo CLI: npm install --global expo-cli</li>
        <li>Create a new project: expo init my-app (bare workflow)</li>
        <li>Navigate to project directory: cd my-app</li>
        <li>Open the project on VS Code: code .</li>
        <li>Change App.js to App.tsx</li>
        <li>Create and set tsconfig.json at root</li>
        <li>Install Native Base on project:
          <ul>
            <li>yarn add native-base</li>
            <li>expo install react-native-svg </li>
            <li>expo install react-native-safe-area-context</li>
          </ul>
        </li>
        <li>Install React Navigation on project:
          <ul>
            <li>expo install @react-navigation/native</li>
            <li>expo install react-native-screens</li>
            <li>expo install react-native-safe-area-context</li>
            <li>expo install @react-navigation/native-stack</li>
          </ul>
        </li>
        <li>Start the development server: expo start</li>
        <li>Configure the Expo Go on a mobile device or use an emulator</li>
        <li>Open the app on a mobile device:
          <ul>
            <li>On your iPhone or iPad, open the default Apple "Camera" app and scan the QR code you see in the terminal</li>
            <li>On your Android device, press "Scan QR Code" on the "Projects" tab of the Expo Go app and scan the QR code you see in the terminal.</li>
          </ul>
        </li>
      </ul>
    </li>
    <br>
    <li>Part 2 - Visual design project & Navigation
      <ul>
        <li>Set project assets and styles</li>
        <li>Install fonts on project: expo install expo-font @expo-google-fonts/roboto</li>
        <li>Create screens: 
          <ul>
            <li>Signin.tsx</li>
            <li>Home.tsx</li>
            <li>Register.tsx</li>
            <li>Details.tsx</li>
          </ul>
        </li>
        <li>Create new components: 
          <ul>
            <li>Loading.tsx</li>
            <li>Input.tsx</li>
            <li>Button.tsx</li>
            <li>Filter.tsx</li>
            <li>Order.tsx</li>
            <li>Header.tsx</li>
            <li>CardDetails.tsx</li>
          </ul>
        </li>
        <li>Create DTOs (Data Transfer Object): 
          <ul>
            <li>OrderFirestoreDTO.ts</li>
          </ul>
        </li>
        <li>Procedure to project recognize svg files:
          <ul>
            <li>Install React-Native-SVG-Transformer library: yarn add --dev react-native-svg-transformer</li>
            <li>Set metro.config.js</li>
            <li>Set svg.d.ts file: ./src/@types/svg.d.ts</li>
          </ul>
        </li>
        <li>Install Phosphor React Native Icons: yarn add phosphor-react-native</li>
        <li>Adding Phosphor Icons to SignIn screen</li>
        <li>Add components at Home screen: ./src/screens/Home.tsx</li>
        <li>Add Header, Input and Button components at Register screen: ./src/screens/Register.tsx</li>
        <li>Add Header component at Details screen: ./src/screens/Details.tsx</li>
        <li>Create routes:
          <ul>
            <li>AppRoutes: ./src/routes/app.routes.tsx</li>
            <li>Routes: ./src/routes/index.tsx</li>
          </ul>
        </li>
        <li>Set navigation types: ./src/@types/navigation.d.ts</li>
        <li>Implement navigation function at Home screen: ./src/screens/Home.tsx</li>
        <li>Implement return button at Header component: ./src/components/Header.tsx</li>
        <li>Apply useRoute hook at Details screen: ./src/screens/Details.tsx</li>
      </ul>
    <br>
    <li>Part 3 - Integration with Firebase</li>
      <ul>  
        <li>We still can't run Firebase in Expo Go development environment. Set the environment:<br>
            https://react-native.rocketseat.dev/</li>
        <li>Create a Firebase account, if you don't have one</li>
        <li>Create a project on Firebase</li>
        <li>Set the Firebase Authentication, enabling only "E-mail/password"</li>
        <li>Add an user: eg. email = alex@email.com | password = 123456</li>
        <li>Set the Firebase FirestoreDatabase, enabling on "Start at test mode"</li>
        <li>Connecting Firebase with our application
          <ul> 
            <li>Set React Native Firebase library (http://rnfirebase.io)
              <ul>
                <li>Install & setup the app module: yarn add @react-native-firebase/app</li>
                <li>Install settings with Expo at app.json (plugin)</li>
                <li>Add Firebase config (Google services) files for iOS and Android at project root</li>
                <li>Prebuild project: expo prebuild</li>
                <li>Install the firestore module: yarn add @react-native-firebase/firestore</li>
                <li>Install the authentication module: yarn add @react-native-firebase/auth</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Implement Auth Service at SignIn screen: ./src/screens/Signin.tsx</li>
        <li>Start application (emulator): expo run:android</li>
        <li>React Hooks usage at Routes: ./src/routes/index.tsx</li>
        <li>Format date from Firestore database: ./src/utils/firestoreDateFormat.ts</li>
        <li>Implement Logout, Auth Service and Firestore at Home screen: ./src/screens/Home.tsx</li>
        <li>Implement React Hooks, navigation and Firestore at Register screen: ./src/screens/Register.tsx</li>
        <li>Set OrderFirestoreDTO (data delivered by Firestore): ./src/DTOs/OrderFirestoreDTO.ts</li>
        <li>Implement React Hooks, navigation, types and Firestore at Details screen: ./src/screens/Details.tsx</li>
        <li>Setting CardDetails component: ./src/components/CardDetails.tsx</li>
        <li>Implement CardDetails at Details screen: ./src/screens/Details.tsx</li>
      </ul>
    </li>
</ol>
</div>