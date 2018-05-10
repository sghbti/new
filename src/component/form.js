
import React, { Component } from 'react'
import update_query from './query'
import { graphql } from 'react-apollo'
// import Redirect from './redirect'
import {Link} from 'react-router-dom'
// import gql from 'graphql-tag'
class Form extends Component {
  constructor(props){
    super(props);
    this.state={
      name:null,
      password:null
    }
     this.update=this.update.bind(this)
  }
update(e){ 
  e.preventDefault();

  const {name,password}=this.state;
   this.props.alternate({
    variables:{
      name,
      password
    }
  }).then((result)=>{
    debugger;
    // console.log('result:: ',result.data.updateAlluser.nam)
    console.log('result:: ',result)
    window.localStorage["lcltoken"]=result.data.updateAlluser.name;
    // if(result.data.updateAlluser.Token===''){
    //   localStorage.setItem('auth','user')
    //   // localStorage.setItem('ttt','pot');
      console.log(localStorage.getItem('lcltoken'));
      console.log(window.localStorage['lcltoken']);

    //   // localStorage.removeItem('name');
    //   // console.log(localStorage.getItem('ttt'));
    //   // console.log('result:: ',result.data.updateAlluser.name)
      
    //   // (<Redirect to ="/redirect"/>)
      
    // }
    this.props.history.push('/redirect')

  })
    console.log('pass::',this.state.password)

  

}
componentWillReceiveProps(newprops){
  console.log('props::',newprops);
}

  render(){
    return(
      <div>
     <form className=" App" onSubmit={this.update}>
      
        <h1>Login</h1>
        <label>
          UserName</label>
          <input type="text" placeholder="Name" value={this.state.value} onChange={e=>this.setState({name:e.target.value})} ref="UserName" />
        
        <br/>
        <label>
          Password:
          </label>
          <input type="text" placeholder="Password" value={this.state.value} onChange={e=>this.setState({password:e.target.value})} ref="PassWord" />
      
        <br/>
       
        <input type="submit" value="Submit"  />
        
   
      </form>
        </div>
    )
  }
 
}

export default graphql(update_query,{name:'alternate'})(Form)