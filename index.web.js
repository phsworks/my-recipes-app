import { AppRegistry } from "react-native-web";
import App from "./App"; // Import your main App component
import { name as appName } from "./app.json"; // Ensure you have the app name in app.json

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById("app-root"),
});
