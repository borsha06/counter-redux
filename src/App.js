import React,{ Component }  from 'react';
import {connect} from 'react-redux'
const INCREMENT ='INCREMENT'
const DECREMENT = 'DECREMENT'
const REFRESH ='REFRESH'

class App extends Component {

   
     increaseValue = ()=>{
       this.props.dispatch({type:INCREMENT})
        
    }
   decreaseValue=()=>{
    this.props.dispatch({type:DECREMENT})
       
       
    }
    refreshValue = () =>{
      this.props.dispatch({type:REFRESH})
    }

    render() {
        return (
            <div className='container'> 
            {this.props.count}   
                <button onClick={this.increaseValue} >ADD</button>   
                <button onClick={this.decreaseValue}>SUB</button>  
                <button onClick={this.refreshValue}>Refresh</button>       
                
               
            </div>
        );
    }
}

function mapStateToProps(state){
  return {
    count:state.count
  }
}

export default connect(mapStateToProps)(App);