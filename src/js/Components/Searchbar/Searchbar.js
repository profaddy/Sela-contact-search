/*
******************************************Searchbar Component Overview************************************
This Component will take input from user and on every user input change it will update data in internal
state and also calls a function from our Home Component that will filter the contacts based on search term
*********************************************************************************************************** 
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import {form,FormGroup,FormControl,ControlLabel,Button,HelpBlock,LoaderButton,Modal} from 'react-bootstrap'


export default class Searchbar extends React.Component {

  constructor(){
  super();
	this.state={
    contact_name : ''
	};

	this.handleOnChange.bind(this);

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
                          placeholder="Enter Keyword to serach contacts"
                          inputRef={(a) => this.contact_name = a}
                          onChange={(event) => this.handleOnChange(event)}    
                      />

                <FormControl.Feedback />
                </FormGroup>		
              </form>						
            </div>
          </div>
    );
  }
}
