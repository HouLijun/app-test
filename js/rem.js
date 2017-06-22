/*
* @Author: asus
* @Date:   2017-06-20 19:30:38
* @Last Modified by:   asus
* @Last Modified time: 2017-06-20 20:20:38
*/

'use strict';
// 方法一
class Rem{
	constructor(params){
		// 设计尺寸
		this.designWidth=params.designWidth;
		// 设计字体大小
		this.fontSize=params.fontSize;
		// 重置字体大小
		this.resizeFont(this.designWidth,this.fontSize);
	}
	resizeFont(designWidth,fontSize){
		// 屏幕宽度
		var cw=document.documentElement.clientWidth;
		// 比例
		var ratio=cw/designWidth;
		// 新的字体大小
		var newFontSize=fontSize*ratio;
		// 重置字体大小
		document.getElementsByTagName("html")[0].style.fontSize=newFontSize+"px";
	}
}

var arg={designWidth:750,fontSize:100}
var rem=new Rem(arg);
window.onresize=function(){
	rem=new Rem(arg);
}



/*
// 方法二
window.onload=function(){
	//定义常量-->设计尺寸
	const designWidth=750;
	//字体大小
	const fontSize=100;
	//重置字体大小
	function resizeFont(){
		//变量-->获取浏览器的宽度
		var cw=document.documentElement.clientWidth;
		//比例
		var ratio=cw/designWidth;
		//新字体大小
		var newFontSize=fontSize*ratio;
		//重置字体大小
		document.querySelector("html").style.fontSize=newFontSize+"px";
		console.log(cw,newFontSize);
	}
	//调用函数
	resizeFont();
	//窗口大小改变时重置字体大小
	window.onresize=resizeFont;
}*/


/*
// 方法三
function Rem(designWidth,fontSize){
	this.designWidth=designWidth;
	this.fontSize=fontSize;
}
Rem.prototype={
	resizeFont:function(){
		// 屏幕宽度
		var cw=document.documentElement.clientWidth;
		// 比例
		var ratio=cw/this.designWidth;
		// 新的字体大小
		var newFontSize=this.fontSize*ratio;
		// 重置字体大小
		document.getElementsByTagName("html")[0].style.fontSize=newFontSize+"px";
		console.log(this.designWidth);
	}
}
var rem=new Rem(750,100);
rem.resizeFont();
window.onresize=function(){
	rem=new Rem(750,100);
	rem.resizeFont();
};*/