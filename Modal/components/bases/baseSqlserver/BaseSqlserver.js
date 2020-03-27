import React from 'react';
class BasePostgres extends React.Component{
   constructor(props){
  super(props)

  

  this.state = {
    
    tasksmax :'',
    databaseservername :'',
    databasehostname :'',
    databaseport :'',
    databaseuser :'',
    databasepassword :'',
    pkmode :'',
    databasedbname :''
  } }
  handletasksmax = event => {
		this.setState({
			tasksmax: event.target.value
		})
  }
  
  handledatabaseservername = event => {
		this.setState({
			databaseservername: event.target.value
		})
	}

  handledatabasehostname = event => {
		this.setState({
			databasehostname: event.target.value
		})
  }
  
  handledatabaseport = event => {
		this.setState({
			databaseport: event.target.value
		})
  }
  

  handledatabaseuser = event => {
		this.setState({
			databaseuser: event.target.value
		})
  }
  
  handledatabasepassword = event => {
		this.setState({
			databasepassword: event.target.value
		})
  }
  

  handlepkmode = event => {
		this.setState({
			pkmode: event.target.value
		})
  }

  handledatabasedbname = event => {
		this.setState({
			databasedbname: event.target.value
		})
  }
  
  handleSubmit = event => {
		alert(`${this.state.databasedbname} ${this.state.databasehostname} ${this.state.databaseport} ${this.state.databaseuser} ${this.state.pkmode} ${this.state.tasksmax}`)
		event.preventDefault()
	}





  render(){
    const { tasksmax, databaseservername, databasehostname,databaseport,databaseuser,databasepassword,pkmode,databasedbname} = this.state
  return(
    <div className='container-fluid'>
  <aside className="BasePostgres">
  <form onSubmit={this.handleSubmit} >
  <div className="form-group">
    <label htmlFor="inputdefault">tasks max</label>
    <input className="form-control" id="tasksmax" type="number" value={tasksmax} onChange={this.handletasksmax}/>
  </div>
  <div className="form-group">
    <label htmlFor="inputlg">database server name</label>
    <input className="form-control input-lg" id="databaseservername" type="text" value={databaseservername} onChange={this.handledatabaseservername}/>
  </div>
  <div className="form-group">
    <label htmlFor="inputsm">database hostname</label>
    <input className="form-control input-sm" id="databasehostname" type="text" value={databasehostname} onChange={this.handledatabasehostname}/>
  </div>
  <div className="form-group">
    <label htmlFor="inputsm">database port</label>
    <input className="form-control input-sm" id="databaseport" type="number" value={databaseport} onChange={this.handledatabaseport}/>
  </div>      
  <div className="form-group">
    <label htmlFor="inputsm">database user</label>
    <input className="form-control input-sm" id="databaseuser" type="text" value={databaseuser} onChange={this.handledatabaseuser}/>
  </div>
  <div className="form-group">
    <label htmlFor="inputsm">database password</label>
    <input className="form-control input-sm" id="databasepassword" type="password" value={databasepassword} onChange='handledatabasepassword'/>
  </div>
  <div className="form-group">
    <label htmlFor="inputsm">pk mode</label>
    <input className="form-control input-sm" id="pkmode" type="text" value={pkmode} onChange={this.handlepkmode} />
  </div>
  <div className="form-group">
    <label htmlFor="inputsm">database.dbname</label>
    <input className="form-control input-sm" id="databasedbname" type="text" value={databasedbname} onChange={this.handledatabasedbname}/>
  </div>

  <button type="submit">Submit</button>
</form>
  </aside>
  </div>
)}}
export default BasePostgres;