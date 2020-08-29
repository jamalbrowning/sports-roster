import React from 'react';
import PropTypes from 'prop-types';

import playerShape from '../../helpers/props/playerShape';

import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    deletePlayer: PropTypes.func.isRequired,
    editAPlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, deletePlayer } = this.props;
    deletePlayer(player.id);
  };

  editPlayerEvent = (e) => {
    e.preventDefault();
    const { editAPlayer } = this.props;
    editAPlayer();
  }

  render() {
    const { player } = this.props;

    return (
      <div className="card" >
        <img className="card-img-top" src={player.imageUrl} alt="Cardcap" />
      <div className="card-body">
        <h5 className="card-title">{player.name}</h5>
        <p className="card-text">{player.position}</p>
        <div className="btn-group" role="group">
          <button className="btn btn-danger" onClick={this.deletePlayerEvent}>X</button>
          <button className="btn btn-dark" onClick={this.editPlayerEvent}>edit player</button>
        </div>
      </div>
      </div>
    );
  }
}

export default Player;
