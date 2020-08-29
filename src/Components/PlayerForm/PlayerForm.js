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
    updatePlayer: PropTypes.func.isRequired,
    playerThatsEditing: PropTypes.object.isRequired,
  }

  state = {
    imageUrl: '',
    name: '',
    position: '',
    isEditing: false,
  }

  componentDidMount() {
    const { playerThatsEditing } = this.props;
    if (playerThatsEditing.name) {
      this.state({
        imageUrl: playerThatsEditing.imageUrl,
        name: playerThatsEditing.name,
        position: playerThatsEditing.position,
        isEditing: true,
      });
    }
  }

  editPlayerEvent = (e) => {
    e.preventDefault();
    const { imageUrl, name, position } = this.state;
    const { updatePlayer, playerThatsEditing } = this.props;

    const myPlayerWithChanges = {
      imageUrl,
      name,
      position,
      uid: authData.getUid(),
    };

    updatePlayer(playerThatsEditing.id, myPlayerWithChanges);
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
    const {
      imageUrl,
      name,
      position,
      isEditing,
    } = this.state;

    return (
      <form className="col-6 offset-3">
        <div className="form-group">
          <label htmlFor="imageUrl">Image Url</label>
          <input
            type="text"
            className="form-control"
            id="playerImageUrl"
            placeholder="Enter Image Url"
            value={imageUrl}
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
            value={name}
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
            value={position}
            onChange={this.changePositionEvent}
          />
        </div>
        {
          isEditing
            ? <button className="btn btn-light" onClick={this.editPlayerEvent}>Edit Player</button>
            : <button className="btn btn-dark" onClick={this.savePlayerEvent}>Save Player</button>
        }
      </form>
    );
  }
}

export default PlayerForm;
