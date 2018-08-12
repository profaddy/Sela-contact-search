/*
******************************************Searchbar Component Overview************************************
This Component will take input from user and on every user input change it will update data in internal
state and also calls a function from our Home Component that will filter the contacts based on search term
*********************************************************************************************************** 
*/

import React, { Component } from "react";
import {label} from 'react'
import { connect } from "react-redux";
import {Radio,form,FormGroup,FormControl,ControlLabel,Button,HelpBlock,LoaderButton,Modal} from 'react-bootstrap'
import {bindActionCreators} from "redux"
import {filterBySerType} from '../../Actions/userActions'

class Searchbar extends React.Component {

  constructor(){
  super();
	this.state={
    contact_name : '',
	};

	this.handleOnChange.bind(this);

  }
  //handling Radio
  toggleRadio(e){
    if (e.target.checked === true){
      var ser_typ = e.target.value
    }

    this.props.dispatch(filterBySerType(ser_typ))
    
    
    console.log(e.target.checked,e.target.name,ser_typ)
  }

  handleOnChange(event){
    console.log('entering handle change searchbar')
    event.preventDefault();
    const contact_name = event.target.value
    this.setState({contact_name });
    this.props.handleonSearch(contact_name)
	}

  render() {
    
    
		console.log('entering render searchbar props', this.props)
    return (
      <div>

				<div class='col-sm-6 Login_form'>
					<h3>Contact Search</h3>
              <form>
                <FormGroup controlId="formBasicText" > 
                  <FormControl
                          type="text"
                          value={this.state.contact_name}
                          placeholder="Enter Keyword to search contacts"
                          inputRef={(a) => this.contact_name = a}
                          onChange={(event) => this.handleOnChange(event)}    
                      />
                      <FormControl.Feedback />
                      </FormGroup>	

                      {/*adding Radio*/}
                      <FormGroup controlId="formBasicText" > 
                      <h6>check box to search by type of your choice </h6>                                                                                                                                                                                                                                                                                                                                                                                         
                        <Radio  inline name ='filter' value = 'name' onClick={(event)=> this.toggleRadio(event)}>name</Radio>
                        <Radio  inline name ='filter' value = 'designation' onClick={(event)=> this.toggleRadio(event)}>designation</Radio>
                        <Radio  inline name ='filter' value = 'company' onClick={(event)=> this.toggleRadio(event)}>company</Radio>
                        <Radio  inline name ='filter' value = 'email' onClick={(event)=> this.toggleRadio(event)}>email</Radio>
                        <Radio  inline name ='filter' value = 'phone' onClick={(event)=> this.toggleRadio(event)}>phone</Radio>
                      <FormControl.Feedback />
                      </FormGroup>	
               	
              </form>						
            </div>
          </div>
    );
  }
}
/*const mapStateToProps = state =>  ({

	show_handlemodal:state.handlemodal
	
});*/

const mapDispatchToProps = (dispatch) => {
  
  return bindActionCreators({
    filterBySerType: filterBySerType
  }, dispatch);
};

export default connect(mapDispatchToProps)(Searchbar);