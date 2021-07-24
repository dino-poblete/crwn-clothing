import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { LastLocationProvider } from "react-router-last-location";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  onAuthStateChanged = () => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = this.onAuthStateChanged();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const currentUser = this.state.currentUser;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <LastLocationProvider>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route
              exact
              path="/signin"
              component={() => (
                <SignInAndSignUpPage currentUser={currentUser} />
              )}
            />
          </LastLocationProvider>
        </Switch>
      </div>
    );
  }
}

export default App;
