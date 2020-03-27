import React from 'react';

class BasePostgres extends React.Component{

render(){
return(
  <div className='container-fluid'>
<aside className="BasePostgres">
  <div className="form-group">
    <label htmlFor="inputdefault">tasks max</label>
    <input className="form-control" id="tasks max" type="text" />
  </div>
  <div className="form-group">
    <label htmlFor="inputlg">topics</label>
    <input className="form-control input-lg" id="topics" type="text" />
  </div>
  <div className="form-group">
    <label htmlFor="inputsm">connection url</label>
    <input className="form-control input-sm" id="connectionurl" type="text" />
  </div>
  <div className="form-group">
    <label htmlFor="inputsm">transforms</label>
    <input className="form-control input-sm" id="transforms" type="text" />
  </div>      
  <div className="form-group">
    <label htmlFor="auto.create">auto create</label>
    <select className="form-control" id="auto.create">
      <option>true</option>
      <option>false</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="inputsm">insert mode</label>
    <input className="form-control input-sm" id="insert.mode" type="text" />
  </div>
  <div className="form-group">
    <label htmlFor="sel2">delete enabled</label>
    <select className="form-control input-lg" id="sel2">
      <option>true</option>
      <option>false</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="sel3">input-sm</label>
    <select className="form-control input-sm" id="sel3">
      <option>true</option>
      <option>false</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="inputsm">pk fields</label>
    <input className="form-control input-sm" id="pk.fields" type="text" />
  </div>
  <div className="form-group">
    <label htmlFor="inputsm">pk mode</label>
    <input className="form-control input-sm" id="pk mode" type="text" />
  
</div>
  </aside>
  </div>
)

}
 
}
export default BasePostgres;

  


