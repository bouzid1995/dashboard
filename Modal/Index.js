import React, { Fragment, Component } from "react";
//import "./styles.css";
import * as Bases from './components/bases';
//import { Button } from 'react-bootstrap'



class App extends Component {

  constructor() {
    super()
    this.state = { show: false }
  }

  handleModale() {
    this.setState({ show: true })
  }
  close() {
    this.setState({ show: false })
  }
  state = {
    selectedBaseType: ''
  };

  render(){
    return (  
    
<div>
<div class="container">
 
  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal"></button>

  
  <div class="modal" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          

        <table>
         <tbody> 
      <tr><td><Fragment>
        <section>
          {this.renderBaseSelector()}
          <div >
            {this.renderSelectedBase(this.state.selectedBaseType)}
          </div>
        </section> 
        </Fragment></td> 
        <td></td>
        <td>
          <Fragment>
        <section >
          {this.renderBaseSelector1()}
      
          <div>
            {this.renderSelectedBase(this.state.selectedBaseType1)}
          </div>
          
        </section>
        </Fragment>
       </td> 
       <td>
       <Fragment>
        <section>
          {this.renderBaseSelector2()}
      
          <div>
            {this.renderSelectedBase(this.state.selectedBaseType2)}
          </div>
          
        </section>
        </Fragment>
       </td>     
       </tr> 
       
     
      </tbody>
      </table>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>


      <center> <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Ajouter Base</button></center> 
      <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
        
        
        
        <div class="modal-body">

 
           
      
      <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button onClick={() => { this.val()}}className="btn btn-secondary" type="button">Synchroniser base </button>
       </div></div></div> 

      </div>
      </div>
      
    );
  }
  
  renderBaseSelector() {
    return (
      <div >
        <label className="card-selector-label">Select Type database </label>
        <select
          onChange={(e) => this.setState({ selectedBaseType: e.target.value })}>
          <option></option>
          <option>BaseMysql</option>
          <option>BasePostgres</option>
          <option>BaseSqlserver</option>
        </select>
      </div>
       
    );
  }

  renderBaseSelector1() {
    return (
      <div >
        <label>Select Type database</label>
        <select 
          onChange={(e1) => this.setState({ selectedBaseType1: e1.target.value })}>
          <option></option>
          <option>BaseMysql</option>
          <option>BasePostgres</option>
          <option>BaseSqlserver</option>
        </select>
      </div>
    );
  }

  renderBaseSelector2() {
    return (
      <div>
        <label>Select Type database</label>
        <select 
          onChange={(e2) => this.setState({ selectedBaseType2: e2.target.value })}>
          <option></option>
          <option>BaseMysql</option>
          <option>BasePostgres</option>
          <option>BaseSqlserver</option>
        </select>
      </div>
       
    );
  }

  renderSelectedBase(selectedBaseType) {
    if (!selectedBaseType)
      return <p> chose your database type! </p> 

    const Base = Bases[selectedBaseType];

    return <Base />;
  }


  messageselect1(){
    
      switch(this.state.selectedBaseType){

       case 'BaseMysql':
       return console.log('select 1 est basemysql');

        case 'BaseSqlserver' :
          return console.log('select 1 est Sqlserver'); 
  
          case 'BasePostgres':
            return console.log('select 1 est POstgres');
          default :
            return console.log('aucun cose est selectioneé');


      }
    }

      messageselect2(){
        this.messageselect1()

        switch(this.state.selectedBaseType1){

          case 'BaseMysql':
            return console.log('select 2 est basemysql');
     
             case 'BaseSqlserver' :
               return console.log('select 2 est Sqlserver'); 
     
               case 'BasePostgres':
            return console.log('select 2 est POstgres');
          default :
            return console.log('aucun chose est selectioneé');
     
           }  }
           messageselect3(){
          this.messageselect2();
         switch(this.state.selectedBaseType2){

          case 'BaseMysql':
          var a =this.state.selectedBaseType2;
          return a 
     
             case 'BaseSqlserver' :
               return console.log('select 3 est Sqlserver'); 
     
               case 'BasePostgres':
            return console.log('select 1 est POstgres');
          default :
            return console.log('aucun cose est selectioneé');
     
           } 
      
  }

}

export default App;