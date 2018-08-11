removed from login.js
	if (this.props.location === undefined){
					console.log('test',this.props.history)
					var { from } = { from: { pathname: "/" } };
		    		var redirectToReferrer  = this.props.User.user.redirectToReferrer;
		    		this.props.history.push(`${user_name}/${from.pathname}`)
		        }else{


		        }