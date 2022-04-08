function creatstore(initialstate){
	var state = initialstate || {};
	var list = [];
	return {
		getstore:function(type){
			return state[type];
		},
		dispatch:function(action){
		 	state[action.type] = action.value;
		 	list.forEach(function(ele){
		 		ele();
		 	})
		},
		subscribe:function(fun){
			list.push(fun)
		}		
	}
}


