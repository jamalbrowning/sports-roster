import Proptypes from 'prop-types';

const userShape = Proptypes.shape({
  name: Proptypes.string.isRequired,
  uid: Proptypes.string.isRequired,
});

export default { userShape };
