import React from 'react';
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
class RRedirect extends React.Component{
    constructor(props){
        super(props);
        this.remove=this.remove.bind(this);
    }

        
  remove(){
    this.props.history.goBack();
     window.localStorage['lcltoken']=undefined;
    
      

  }

    
    render(){
        debugger;

        if(localStorage['lcltoken']){
            return (
                <div>
                    <h2>
                        welcome </h2>
                        <button onClick={this.remove} >Remove </button>
                    </div>
            )
        }
       if(localStorage['lcltoken']==='undefined'){
            debugger;
            alert('please enter valid credentials');
            return <Redirect to='/' />
       }
               
    }
}


export default RRedirect;