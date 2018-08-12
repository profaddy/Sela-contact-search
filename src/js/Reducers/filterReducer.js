export default function reducer(state={
    filter: {
      ser_typ : null

    }
    
  }, action) {

    switch (action.type) {


     
      case "filterBySerType": {
        console.log('reducer ser_typ',action.payload)
        //return { ...state,ser_typ:action.paylaod  }
          let newState = {...state}
          newState.filter.ser_typ = action.payload
          console.log('reducer returning ser typ vaue',newState.filter.ser_typ)
          return newState

      }
      
    
      /*case "SET_USER_NAME": {
       
          let temp = JSON.parse(localStorage.getItem('user_list'));
          temp.push(action.payload)
          localStorage.setItem('user_list',JSON.stringify(temp));
         
      }*/


}


    return state

}
