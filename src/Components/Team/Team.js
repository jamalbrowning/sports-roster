import React from 'react';

import Player from '../Player/Player';

import authData from '../../helpers/data/authData';
import playersData from '../../helpers/data/playerData';

class Team extends React.Component {
  state = {
    players: [],
  }

  getPlayers = () => {
    playersData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('get player broke', err));
  };

  componentDidMount() {
    this.getPlayers();
  }

  deletePlayer = (playerId) => {
    playersData.deletePlayer(playerId)
      .then(() => {
        this.getPlayers();
      })
      .catch((err) => console.error('delete player didnt work', err));
  }

  render() {
    const { players } = this.state;

    const playerCard = players.map((player) => <Player player={player} key={player.id} deletePlayer={this.deletePlayer}/>);

    return (
      <div className="card-columns users">
        { playerCard }
      </div>
    );
  }
}

export default Team;
