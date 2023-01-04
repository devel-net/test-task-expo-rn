
import NavigationController from "./src/controllers/NavigationController";
import {store} from "./src/store";
import {Provider} from "react-redux";

export default function App() {
  return (
      <Provider store={store}>
          <NavigationController />
      </Provider>
  );
}
