//take state from store and map to props i.e connecting store

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions'
import Main from './Main'
import {withRouter } from 'react-router';



function mapStateToProps(state, ownProps) {
  return {
    posts: state
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispachToProps)(Main));

export default App;

 //to inject the mapStateToProps state to Main and from there we can inject to child components
//Now main is connected to redux store
//this.props.posts gives access to state

