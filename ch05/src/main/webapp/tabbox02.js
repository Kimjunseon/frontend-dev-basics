var onTablClicked = function(){
	var divTabBox = document.getElementsByClassName("tab-box")[0];
	var ul = divTabBox.childNodes[1];
	lis = ul.getElementsByClassName('selected');
	
	(lis.length == 1) && (lis[0].className = "");
	
	this.className = "selected";
}

window.addEventListener('load', function(){
	var divTabBox = document.getElementsByClassName("tab-box")[0];
	var ul = divTabBox.childNodes[1];
	var lis = ul.getElementsByTagName('li');
	
	Array.prototype.forEach.call(lis, function(li){
		li.addEventListener('click', onTablClicked);
	});
});