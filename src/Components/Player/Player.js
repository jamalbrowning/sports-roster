import React from 'react';

import playerShape from '../../helpers/props/playerShape';

import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;

    return (
      <div className="card" >
      <img className="card-img-top" src={player.imageUrl} alt="Cardcap" />
      <div className="card-body">
    <h5 className="card-title">{player.name}</h5>
    <p className="card-text">{player.position}</p>
    <button className="btn btn-danger">X</button>
      </div>
      </div>
    );
  }
}

export default Player;
