function filtertext(date,text){
	return  date.filter(function(ele,index,self){
		return  ele.name.indexOf(text) != -1
	})
}
