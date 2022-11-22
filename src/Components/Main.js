import React, { Component } from 'react';
import Title from './Title';
import Photowall from './Photowall';
import Addphoto from './Addphoto';
import { Route } from 'react-router-dom';



class Main extends Component {
  constructor() {
    super()
    

    }
  
   

  

  render() {
    console.log(this.state.posts);
    return (
      <div>
        <Route exact path="/" render={() => (
          <div>
            <Title title={'Photowall'} />
            {/* <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} /> */}
          </div>
        )}>

        </Route>

        {/* <Route path="/Addphoto" render={({history}) => (
          <Addphoto onAddPhoto={(addedPost) => {
            this.addphoto(addedPost)
            history.push('./')
          }} /> */}
        {/* )}/> */}
       

      </div>
    )
  }
}

export default Main