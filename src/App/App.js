import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../helpers/data/connection';

import MyNavBar from '../Components/MyNavBar/MyNavBar';
import Team from '../Components/Team/Team';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    const loadComponent = () => {
      if (authed) {
        return <Team />;
      }
      return <h1> woops </h1>;
    };

    return (
      <div className="App">
        <MyNavBar authed={authed}/>
        {loadComponent()}
      </div>
    );
  }
}

export default App;
