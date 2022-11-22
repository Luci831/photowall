//take state from store and map to props i.e connecting store

import Main  from "./Main"
import {connect } from "react-redux"

function mapStateToProps(state){
    return {
        posts:state
    }

}

const App= connect(mapStateToProps)(Main) //to inject the mapStateToProps state to Main and from there we can inject to child components
//Now main is connected to redux store
//this.props.posts gives access to state

export default App