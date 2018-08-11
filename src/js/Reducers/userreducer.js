/*export default function reducer(state={
    user: {
  
      redirectToReferrer:false,

    },

    list:[],
    isLoggedin:false,
    
  }, action) {

    switch (action.type) {


     
      case "FETCH_USER": {

        return {
          ...state,isLoggedin: true,
          user: {...state.user,redirectToReferrer: true},
        }

      }
      

      case "SET_USER_NAME": {
       
          let temp = JSON.parse(localStorage.getItem('user_list'));
          temp.push(action.payload)
          localStorage.setItem('user_list',JSON.stringify(temp));
         
      }


}


    return state

}*/
