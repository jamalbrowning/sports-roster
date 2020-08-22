import React from 'react';
import PropTypes from 'prop-types';

import userShape from '../../helpers/props/userShape';

import './User.scss';

class User extends React.Component {
  static propTypes = {
    user: userShape.userShape,
    setSingleUser: PropTypes.func.isRequired,
  }

  singleBoardEvent = (e) => {
    e.preventDefault();
    const { user, setSingleUser } = this.props;
    setSingleUser(user.id);
  };

  render() {
    const { user } = this.props;

    return (
      <div className="card text-center">
        <h3>{user.name}</h3>
        <button className="btn btn-danger" onClick={this.singleBoardEvent}>View Roster</button>
      </div>
    );
  }
}

export default User;
