import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './redux/first';
import First from './components/First';

const mapStateToProps = state => {
  return { first: state.first };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(First);
