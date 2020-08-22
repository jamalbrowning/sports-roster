import React from 'react';
import PropTypes from 'prop-types';

class SingleTeam extends React.Component {
  static propTypes = {
    setSingleUser: PropTypes.func.isRequired,
  }

  render() {
    const { setSingleUser } = this.props;
    return (
      <div>
        <h4> Here is the roster</h4>
        <button className="btn btn-danger" onClick={() => { setSingleUser(''); } }>Back</button>
      </div>
    );
  }
}

export default SingleTeam;
