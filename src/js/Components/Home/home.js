/* 
*******************************************Home Component Overview***********************************

 This is the wrapper Component in which is calling below Child components 
 1) Serachbar -> Home component will call  Searchbar Module passing 'handleOnSearch' function
   as props
 2) Contactlist Component is being called passing current search term value recieving from Searchbar 
 as props
 
 handleOnSearch -> This function will recieve user input and will filter out the results based 
 on user input. the filtered out contacts based on search term will be stored in the internal state
 and will be passed as props to the ContacList Component.
*****************************************************************************************************
*/

import React, { Component } from "react";
import Searchbar from '../Searchbar/Searchbar';
import contact from  "../../../../src/contact/contacts.json"
import ContactList from "../../Components/ContactList/ContactList"
import _ from "lodash"


export default class Home extends React.Component {

	constructor(){
		super();
		this.state={

			sel_contact:[],
			applyFilter: false
		};
	
		this.handleOnSearch.bind(this);
		}
	

handleOnSearch(ser_term){

		var sel_contact = contact.filter((item) => {

			var query_term = new RegExp(ser_term,'i');

			//return  query_term.test(item.general.firstName)

			var resp_fname = query_term.test(item.general.firstName)
			var resp_lname = query_term.test(item.general.lastName)
			var resp_comp = query_term.test(item.job.company)
			var resp_title = query_term.test(item.job.title)
			var resp_email = query_term.test(item.contact.email)
			var resp_phone = query_term.test(item.contact.phone)
			
			if (resp_fname || resp_lname || resp_email || resp_phone|| resp_comp ||resp_title === true){
				return true
			}else{
				return false
			}
						
			

		})


		this.setState({sel_contact : sel_contact})
		this.setState({applyFilter : true})
		console.log('returning from handlesearch',this.state.sel_contact)
}

 render() {
		
	console.log('sel_contact',this.state.sel_contact);
	console.log('sel_contact',this.state.sel_contact);

    return (

		<div class='container no-gutters'>
			<div class='row'>

				<div className='Login-wrapper col-sm-12 justify-content-center'>
						<Searchbar handleonSearch = {_.debounce((ser_term) => {this.handleOnSearch(ser_term)}, 300)}/>  
				</div>	

				<div className='Login-wrapper col-sm-12 justify-content-center'>
					
					<ContactList contacts ={this.state.sel_contact} /> 

				</div>	
				
			</div>   
		</div>
    );
  }
}
