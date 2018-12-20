$(function(){
	$('#nav_toggle').click(function(){
		$("header").toggleClass('open');
		$("nav").fadeToggle(500);
	});
});
$(function() {
 $("nav ul li a").click(function() {
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
$(function()  {
	document.getElementById("idDynamicYear").innerText = ( new Date().getFullYear() ).toString();
});