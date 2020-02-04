new WOW().init();
var listItems = document.querySelectorAll(".item");
var arrayPossition = ["to top","to bottom","to left","to right","to top left","to top right","to bottom left","to bottom right"];
var arrayColor = ["red","orange","yellow","green","blue","pink","purple","indigo","violet","black","white"];
var arrayAnimate = ["bounce","shake","swing","tada","heartBeat","bounceIn","bounceInRight","bounceInUp","bounceOut","bounceOutLeft","bounceOutDown","fadeInUp","fadeInDown","fadeOutUp","fadeOutDown","flipInX","flipOutY","slideInUp","slideInDown","slideOutDown","slideOutUp","zoomIn","zoomInDown","zoomOut","zoomOutUp","zoomOutRight","hinge","jackInTheBox"];

listItems.forEach(function(i){
	i.classList.add("wow",""+arrayAnimate[Math.floor(Math.random()*arrayAnimate.length)]+"");
	i.setAttribute("data-wow-duration","3s");
	i.setAttribute("data-wow-delay","1s");
	i.setAttribute("data-wow-offset","100");
	i.setAttribute("data-wow-iteration","infinite");
	i.setAttribute("style","background: linear-gradient("+arrayPossition[Math.floor(Math.random()*arrayPossition.length)]+", "+arrayColor[Math.floor(Math.random()*arrayColor.length)]+","+arrayColor[Math.floor(Math.random()*arrayColor.length)]+");")
});