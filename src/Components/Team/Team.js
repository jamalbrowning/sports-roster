import React from 'react';
import PropTypes from 'prop-types';

import User from '../User/User';

import authData from '../../helpers/data/authData';
import userData from '../../helpers/data/userData';

class Team extends React.Component {
  static propTypes = {
    setSingleUser: PropTypes.func.isRequired,
  }

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
    const { setSingleUser } = this.props;

    const userCard = users.map((user) => <User key={user.id} user={user} setSingleUser={setSingleUser}/>);

    return (
      <div className="card-columns users">
        { userCard }
      </div>
    );
  }
}

export default Team;
