import React from "react"
import { Provider } from "react-redux"
import "./App.css"
import store from "./redux/store"
import CakeContainer from "./components/CakeContainer"
import HooksCakeContainer from "./components/HooksCakeContainer"
import IceCreamContainer from "./components/IceCreamContainer"
import NewCakeContainer from "./components/NewCakeContainer"
import ItemContainer from "./components/ItemContainer"
import UsersContainer from "./components/UsersContainer"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="Section1">
          <NewCakeContainer />
          <IceCreamContainer />
        </div>
        <div className="Section2">
          <UsersContainer />
        </div>

        {/* <UsersContainer />
        <ItemContainer cake />
        <ItemContainer /> */}

        {/* <CakeContainer />
        <HooksCakeContainer /> */}
      </div>
    </Provider>
  )
}

export default App
