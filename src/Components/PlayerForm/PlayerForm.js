import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

// new player needs
// name
// position
// imageUrl
// uid

class PlayerForm extends React.Component {
  static PropTypes = {
    createPlayer: PropTypes.func.isRequired,
  }

  state = {
    imageUrl: '',
    name: '',
    position: '',
  }

  render() {
    return (
      <form>
        <div>
          <label>
            <input
            />
          </label>
        </div>
      </form>
    );
  }
}
