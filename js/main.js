$(function(){
	$('#nav_toggle').click(function(){
		$("header").toggleClass('open');
		$("nav").fadeToggle(500);
	});
});
//skillbar
$(document).ready(function(){
 $('.skillbar').skillBars({
 from: 0,
 speed: 4000, 
 interval: 100,
 decimals: 0,
 });
});