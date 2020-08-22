import React from 'react';

import Player from '../Player/Player';

import authData from '../../helpers/data/authData';
import playersData from '../../helpers/data/playerData';

class Team extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    playersData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('get player broke', err));
  }

  render() {
    const { players } = this.state;

    const playerCard = players.map((player) => <Player player={player} key={player.id}/>);

    return (
      <div className="card-columns users">
        { playerCard }
      </div>
    );
  }
}

export default Team;
