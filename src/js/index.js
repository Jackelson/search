var personarray = [{name: '王港', src: './src/img/3.png', des: '颈椎不好', sex: 'm'}, {name: '刘莹', src: './src/img/5.png',des: '我是谁', sex: 'f'} ,{name: '王秀莹', src: './src/img/4.png', des: '我很好看', sex: 'f'} , {name: '刘金雷', src: './src/img/1.png', des: '你没有见过陌生的脸', sex: 'm'}, {name: '刘飞翔', src: './src/img/2.png', des: '瓜皮刘', sex: 'm'}];

var search = document.getElementsByClassName("wrapper")[0].getElementsByClassName("filter")[0].getElementsByTagName("input")[0];
var Oul = document.getElementsByTagName("ul")[0];
var btnarry = [].slice.call(document.getElementsByTagName("span"),0);
var btn2 = btnarry[btnarry.length -1];
var store = creatstore({
	text:'',
	sex:'a'
})


update();
store.subscribe(update)
function update(){
  randerpage(lastefunc(personarray));
}
search.oninput = function(){
	if(this.value == 'null'){
		return date;
	}
	store.dispatch({type:'text',value:this.value});
}
function randerpage(date){
	var htmlarr = '';
	date.forEach(function(ele,index,self){
		htmlarr += `<li><img src="${ele.src}" alt=""><p class="name">${ele.name}</p><p class="des">${ele.des}</p></li>`
	})
	Oul.innerHTML = htmlarr;
	
}

btnarry.forEach(function(ele,index,self){
	ele.onclick = function(){
		changeactive(this);		
		var sex = ele.getAttribute('sex');
		store.dispatch({type:'sex',value:sex});
	}
})
function changeactive(ele){
	ele.className = 'btn active';
	btn2.className = 'btn';
	btn2 = ele;
}


