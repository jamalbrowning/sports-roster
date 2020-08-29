import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

// new player needs
// name
// position
// imageUrl
// uid

class PlayerForm extends React.Component {
  static propTypes = {
    createPlayer: PropTypes.func.isRequired,
  }

  state = {
    imageUrl: '',
    name: '',
    position: '',
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  changePositionEvent = (e) => {
    e.preventDefault();
    this.setState({ position: e.target.value });
  }

  changeImageUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  savePlayerEvent = (e) => {
    e.preventDefault();
    const { name, position, imageUrl } = this.state;

    const { createPlayer } = this.props;

    const newPlayer = {
      imageUrl,
      name,
      position,
      uid: authData.getUid(),
    };

    createPlayer(newPlayer);
  }

  render() {
    return (
      <form className="col-6 offset-3">
        <div className="form-group">
          <label htmlFor="imageUrl">Image Url</label>
          <input
            type="text"
            className="form-control"
            id="playerImageUrl"
            placeholder="Enter Image Url"
            onChange={this.changeImageUrlEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Player Name</label>
          <input
            type="text"
            className="form-control"
            id="playerName"
            placeholder="Enter Player Name"
            onChange={this.changeNameEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="playerPosition">Player Position</label>
          <input
            type="text"
            className="form-control"
            id="playerPosition"
            placeholder="Enter Player Position"
            onChange={this.changeNameEvent}
          />
        </div>
        <button className="btn btn-dark" onClick={this.savePlayerEvent}>Save Player</button>
      </form>
    );
  }
}

export default PlayerForm;
