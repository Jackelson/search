function combine(config){	
	return function(date){
		var lastarr = date;
		for(var prop in config){						
		 lastarr = config[prop](lastarr,store.getstore(prop));
		}
		return lastarr;
	}		
}

var lastefunc = combine({text:filtertext,sex:filtersex})