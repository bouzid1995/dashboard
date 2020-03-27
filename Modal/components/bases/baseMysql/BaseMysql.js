import React from 'react';
class BaseMysql extends React.Component{

  render(){
  
  return(
<div className='container-fluid'>
  <aside className="BaseMysql">
    <form>
  <div className="form-group">
    <label htmlFor="inputdefault">database port</label>
    <input className="form-control" id="inputdefault" type="number" />
  </div>
  <div className="form-group">
    <label htmlFor="inputlg">database user mysql</label>
    <input className="form-control input-lg" id="user" type="text" />
  </div>
  <div className="form-group">
    <label htmlFor="inputsm">database password</label>
    <input className="form-control input-sm" id="password" type="text" />
  </div>
  <div className="form-group">
    <label htmlFor="inputsm"> database server id</label>
    <input className="form-control input-sm" id="database server" type="number" />
  </div>
  <div className="form-group">
    <label htmlFor="inputsm"> database server name</label>
    <input className="form-control input-sm" id="database server name" type="text" />
  </div>
  <div className="form-group">
    <label htmlFor="inputsm"> database whitelist</label>
    <input className="form-control input-sm" id="database whitelist" type="text" />
  </div>
</form>
  </aside>
  </div>
  )}
}
export default BaseMysql;
