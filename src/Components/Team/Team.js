import React from 'react';

import Player from '../Player/Player';
import PlayerForm from '../PlayerForm/PlayerForm';

import authData from '../../helpers/data/authData';
import playersData from '../../helpers/data/playerData';

class Team extends React.Component {
  state = {
    players: [],
    formOpen: false,
  }

  getPlayers = () => {
    playersData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('get player broke', err));
  };

  componentDidMount() {
    this.getPlayers();
  }

  creatPlayer = (newPlayer) => {
    playersData.createPlayer(newPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('create player failed', err));
  };

  deletePlayer = (playerId) => {
    playersData.deletePlayer(playerId)
      .then(() => {
        this.getPlayers();
      })
      .catch((err) => console.error('delete player didnt work', err));
  }

  render() {
    const { players, formOpen } = this.state;

    const playerCard = players.map((player) => <Player player={player} key={player.id} deletePlayer={this.deletePlayer}/>);

    return (
      <div>
        <button className="btn btn-warning" onClick={() => { this.setState({ formOpen: !formOpen }); }}><i className="far fa-plus-square"></i></button>
        { formOpen ? <PlayerForm createPlayer={this.creatPlayer}/> : '' }
        <div className="card-columns users">
          { playerCard }
        </div>
      </div>
    );
  }
}

export default Team;
