/*
***************************************ContaclistItems Overview**************************************
This Module Recieves the array of list filtered out from the search term and will be only responsible
for displaying of each employee in an array. This is stateless Dumb Component that is only responsible
for displaying recieved data
*****************************************************************************************************
*/

import React, { Component } from 'react';
import {Media } from 'react-bootstrap'
import '../../../../src/style.css'

export const ContactlistItems = ({contacts,handleOnClick}) => {
  console.log('contacts  in contacts',contacts)
  const email = contacts.contact.email

  
   return (

    <li onClick={handleOnClick(email)} className = 'contactListItems'>

      <Media>
        <Media.Left>
            <img width={48} height={48} src={`${contacts.general.avatar}`} />
        </Media.Left>

        <Media.Body>
          <Media.Heading>
            {`${contacts.general.firstName} ${contacts.general.lastName}`} 
          </Media.Heading>

          <p>Job Title : {`${contacts.job.title}`} </p>
        </Media.Body>
      </Media>

    </li>

   );
}