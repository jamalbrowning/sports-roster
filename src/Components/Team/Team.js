import React from 'react';

import User from '../User/User';

import authData from '../../helpers/data/authData';
import userData from '../../helpers/data/userData';

class Team extends React.Component {
  state = {
    users: [],
  }

  componentDidMount() {
    userData.getUsersByUid(authData.getUid())
      .then((users) => this.setState({ users }))
      .catch((err) => console.error('get user broke', err));
  }

  render() {
    const { users } = this.state;

    const userCard = users.map((user) => <User key={user.id} user={user}/>);

    return (
      <div className="card-columns users">
        { userCard }
      </div>
    );
  }
}

export default Team;
