import React,{Component} from 'react';
import List from './List';
import Title from './Title';
class Main extends Component{
    render()
    {
      return (
        <div>
          <Title title='TODO'/>
           <List tasks={['Hello Kris', "How are you?"]}/>
           <List tasks={['Iam fine', "Hmm"]} />
           
           
        </div>
      )
    }
  }

  export default Main