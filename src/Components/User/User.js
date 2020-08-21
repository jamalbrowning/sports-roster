import React from 'react';

import userShape from '../../helpers/props/userShape';

import './User.scss';

class User extends React.Component {
  static propTypes = {
    user: userShape.userShape,
  }

  render() {
    const { user } = this.props;

    return (
      <div className="card text-center">
        <h3>{user.name}</h3>
      </div>
    );
  }
}

export default User;
