export function filterBySerType(ser_typ) {
  console.log('filterBySerType',ser_typ)
  return {
    type: "filterBySerType",
    payload: ser_typ
          }
        }

/*export function setUserName(user_details) {
   console.log('console user actions',user_details)
  return {
   type: 'SET_USER_NAME',
    payload: user_details,
  }
}

export function setUserPwd(pwd) {
  return {
    type: 'SET_USER_PWD',
    payload: pwd,
  }
}
export function setUserdetails(name,pwd,email) {
  return {
    type: 'SET_USER_DETAILS',
    payload: {
    name,
    pwd,
    email
  }
  }
}
*/
