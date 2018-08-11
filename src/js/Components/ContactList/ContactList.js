/*
*************************************Contactlist Overview**********************************************
This Component is responsible to map the data recieved recieved from Home component and pass it to the 
ComponentListItems Component to show the list of all persons who came in the search result based on 
user input recieved from Home Component.

This Component also passes a function as props  to the ComponentlsitDetails component that will display
the data of a selected employee from list.

handleOnClick -> If a user clicks on a particular employee from search results, this function will be
called from Contaclistitems Module with an email id as input. Based on email id that will be always unique
we will filter the record from contact list we have and pass details of particular list record to the 
ContactlistDetails component. 
*********************************************************************************************************
*/

import React, { Component } from 'react';
import {ContactlistItems} from "../ContactList/ContactlistItems"
import {ContactlistDetails} from "../ContactList/ContactlistDetails"


export default class ContactList extends React.Component {

	constructor(props){
      
        super(props);
        this.state={
            dis_contact:[]
            
        };
        this.handleOnClick.bind(this)
    }

     handleOnClick(id){

        const dis_contact = this.props.contacts.filter(dis_items => {

            return dis_items.contact.email === id

        })

        this.setState({dis_contact : dis_contact})

        console.log('returning displayitems',dis_contact)
     }

    render() {


        const contactlist = this.props.contacts.map(items => {
           
            return(   
                <ContactlistItems
                    key={items.contact.email}
                    contacts = {items}
                    handleOnClick = {id => this.handleOnClick.bind(this,id)}
                />
            );
        })

        const display_list = this.state.dis_contact.map(dis_list => {
            return (
                <ContactlistDetails
                        key={dis_list.contact.email}
                        contacts = {dis_list}       
                />
            );
        })

      
        return (
        <div className='row'>

            <div className ='col-sm-6'>
                <ul className='col-sm-8 list-unstyled'>
                    {contactlist}
                </ul>    
            </div> 

            <div className ='col-sm-6'>
                <ul className='col-sm-8 list-unstyled'>
                    {display_list}
                </ul>    
            </div> 
                    
        </div>


            );
    }
}