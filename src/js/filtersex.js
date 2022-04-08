function filtersex(date,sex){
	if(sex == 'a'){
		return date;
	}
	
	return date.filter(function(ele,index,self){
		
	  return ele.sex == sex;		
	})	
}