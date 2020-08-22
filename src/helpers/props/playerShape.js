import Proptypes from 'prop-types';

const playerShape = Proptypes.shape({
  imageUrl: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  position: Proptypes.string.isRequired,
  uid: Proptypes.string.isRequired,
});

export default { playerShape };
