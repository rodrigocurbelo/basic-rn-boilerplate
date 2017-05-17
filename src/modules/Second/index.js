import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './redux/second';
import Second from './components/Second';

const mapStateToProps = state => {
  const testNumber = state.Second;
  return { testNumber };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Second);
