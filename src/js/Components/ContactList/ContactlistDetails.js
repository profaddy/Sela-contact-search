/*
**************************************ContactListDetails Overview***************************************
This is another stateless Dumb Component responsible to show the details of the selected person from the
list.It recieves the data fro the Contactlist Component.
********************************************************************************************************
*/

import React, { Component } from 'react';
import { Media } from 'react-bootstrap'

export const ContactlistDetails = ({contacts}) => {
  console.log('contacts  in ContactlistDetails',contacts)
   const email = contacts.contact.email

  
 return (
  <li className = 'contactListDetails'>
    <Media>
      <Media.Left>
          <img width={96} height={96} src={`${contacts.general.avatar}`} />
      </Media.Left>

      <Media.Body>
        <Media.Heading>

        <p>   {`${contacts.general.firstName} ${contacts.general.lastName}`}</p>
         
        </Media.Heading>
        <p> Job Title : {`${contacts.job.title} - ${contacts.job.company}`} </p>
        <p> Email : {`${contacts.contact.email}`} </p>
        <p> Phone : {`${contacts.contact.phone}`} </p>
        <p> Address : {`${contacts.address.zipCode},
                      ${contacts.address.street},
                      ${contacts.address.city},
                      ${contacts.address.country}`}
         </p>
          
      </Media.Body>

    </Media>
  </li>
 );
}