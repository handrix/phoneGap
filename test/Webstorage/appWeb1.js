// JavaScript Document

							//sessionStorage方法 页面关闭前可以使用
/*function saveStorage(id){
	var target = document.getElementById(id);
	var str = target.value;
//保存数据的方法 key value
	sessionStorage.setItem("message",str);
	}
	
function loadStorage(id){
	var target = document.getElementById(id);
//读取数据
	var msg = sessionStorage.getItem("message");
	target.innerHTML = msg;
	}*/
	
							//localStorage方法 浏览器关闭前可以使用
function saveStorage(id){
	var target = document.getElementById(id);
	var str = target.value;
	localStorage.setItem("message",str);
	}
	
function loadStorage(id){
	var target = document.getElementById(id);
	var msg = localStorage.getItem("message");
	target.innerHTML = msg;
	}