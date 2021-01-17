// == Imports

import { connect } from 'react-redux';

import Home from '../../components/Home';

const mapStateToProps = (state) => ({
  isLogged: state.authentication.isLogged,
});

const mapDispatchToProps = () => ({

});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
