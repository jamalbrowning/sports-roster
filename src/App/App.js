import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../helpers/data/connection';

import MyNavBar from '../Components/MyNavBar/MyNavBar';
import Team from '../Components/Team/Team';
import SingleTeam from '../Components/SingleTeam/SingleTeam';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
    singleUserId: '',
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

  setSingleUser= (singleUserId) => {
    this.setState({ singleUserId });
  };

  render() {
    const { authed, singleUserId } = this.state;
    const loadComponent = () => {
      if (authed && singleUserId.length === 0) {
        return <Team setSingleUser={this.setSingleUser}/>;
      }

      if (authed && singleUserId.length > 0) {
        return <SingleTeam setSingleUser={this.setSingleUser}/>;
      }

      return '';
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
