// onload the page get started from the top

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
		"use strict";
        window.scrollTo(0, 0);
    };
}

// show inside burger 1 
function showBurger1() {
	"use strict";
	//window.scrollTo({ top: 0, behavior: 'smooth' });
	document.querySelector(".inside-burger1").style.display = "flex";
	document.querySelector(".allBody").style.display = "none";
	//document.body.style.overflowY = "hidden";
}
// hide inside burger 1 
function hideBurger1() {
	"use strict";
	document.querySelector(".inside-burger1").classList.add("hide-inside-burger1");
	document.querySelector(".allBody").style.display = "block";
	setTimeout(function () {
		document.querySelector(".inside-burger1").classList.remove("hide-inside-burger1");
		document.querySelector(".inside-burger1").style.display = "none";
		document.body.style.overflowY = "visible";
		
	}, 500);
}



// on scrolling
var l  = 0;
var l2 = 100;
// showing elements with animation
window.onscroll = () => {
	var mq = window.matchMedia("(max-width: 950px)");
	// on mobile screen page 1 only
	if(mq.matches) {
	
		if(window.scrollY >= 0  && window.scrollY < 30 ){
		document.getElementById("arrow-button").style.display = "none";
		//	document.getElementById("hide-arrow-button").style.display = "none";
		//} , 500);  
		document.querySelector(".header").classList.remove('header2');
			document.getElementById("logoPrincipal").style.display = "block";
			document.getElementById("logo").style.display = "none";
		
		// don't move the words 
		document.querySelector(".jewelery").style.marginLeft = "0px";
		document.querySelector(".selection").style.marginRight = "0px"; 
		
	}
	
		// show fixed header onscroll 20 pageYOffset
	else if (window.scrollY > 30  && window.scrollY < 200 ){
		document.getElementById("arrow-button").style.display = "block";
		//document.getElementById("hide-arrow-button").setAttribute("id", "arrow-button");
		document.querySelector(".header").classList.add('header2');
		    document.getElementById("logoPrincipal").style.display = "none";
			document.getElementById("logo").style.display = "block";
		
    }
		
		// show logo
		else if(window.scrollY > 200 && window.scrollY < 500 ) {
		document.querySelector(".logo2").style.WebkitAnimationPlayState= "running";
	}
		// show our story
		else if(window.scrollY > 500 && window.scrollY < 800 ) {
		
		document.querySelector(".ourStory").style.transform = "scale(1)";
		document.querySelector(".ourStory").style.opacity = "1";
		
		
	}
		// show products in page 1 
		else if(window.scrollY > 800 && window.scrollY < 1200 ) {
		document.querySelector(".elementHome1").classList.add("elementHomeAnimation1");
	}
		else if(window.scrollY > 1200 && window.scrollY < 1600 ) {
		
			document.querySelector(".elementHome2").classList.add("elementHomeAnimation2");
	}
		else if(window.scrollY > 1600 && window.scrollY < 2000 ) {
		
			document.querySelector(".elementHome3").classList.add("elementHomeAnimation3");
	}
		else if(window.scrollY > 2000 && window.scrollY < 2800 ) {
		
			document.querySelector(".elementHome4").classList.add("elementHomeAnimation4");
	}
		// show girls
		
		else if(window.scrollY > 3000 && window.scrollY < 3700 ) {
		
			document.querySelector(".girl2").style.WebkitAnimationPlayState= "running";
	}
		else if(window.scrollY > 3700 && window.scrollY < 4000 ) {
		
			document.querySelector(".girl3").style.WebkitAnimationPlayState= "running";
	}
		
	
	
	}
	
	// else on desktop screen
	else {
	
	if(window.scrollY >= 0  && window.scrollY < 30 ){
		document.getElementById("arrow-button").style.display = "none";
		//	document.getElementById("hide-arrow-button").style.display = "none";
		//} , 500);  
		document.querySelector(".header").classList.remove('header2');
		document.getElementById("logoPrincipal").style.display = "block";
			document.getElementById("logo").style.display = "none";
		
		
		// don't move the words 
		document.querySelector(".jewelery").style.marginLeft = "0px";
		document.querySelector(".selection").style.marginRight = "0px"; 
		
	}
	
	
	// show fixed header onscroll 20 pageYOffset
	else if (window.scrollY > 30  && window.scrollY < 200 ){
		document.getElementById("arrow-button").style.display = "block";
		//document.getElementById("hide-arrow-button").setAttribute("id", "arrow-button");
		document.querySelector(".header").classList.add('header2');
		document.getElementById("logoPrincipal").style.display = "none";
			document.getElementById("logo").style.display = "block";
		
		
    }
	
	//show images in page 4
	else if(window.scrollY > 200  && window.scrollY < 300 ){
		
		document.querySelector(".imageBrac1").style.WebkitAnimationPlayState= "running";
	}
	// show products in page 5 
	else if(window.scrollY > 300  && window.scrollY < 400 ){
		
		document.querySelector(".products1").style.transform = "scale(1)";
		document.querySelector(".products1").style.opacity = "1";
		
		document.querySelector(".products2").style.transform = "scale(1)";
		document.querySelector(".products2").style.opacity = "1"; 
		
		document.querySelector(".products3").style.transform = "scale(1)";
		document.querySelector(".products3").style.opacity = "1";
	}
	
	else if(window.scrollY > 400  && window.scrollY < 450 ){
		
		document.querySelector(".imageBrac2").style.WebkitAnimationPlayState= "running";
	}
	
		// show images in page 2
	else if(window.scrollY > 350  && window.scrollY < 500 ){
		
		document.querySelector(".storyGirl1").style.WebkitAnimationPlayState= "running";
		document.querySelector(".storyGirl2").style.WebkitAnimationPlayState= "running";
		
	}
	
	else if (window.scrollY > 500 && window.scrollY < 800) {
		
		var mq = window.matchMedia("(max-width: 950px)");
		if(mq.matches){
			document.querySelector(".jewelery").style.marginLeft = "0px";
		document.querySelector(".selection").style.marginRight = "0px";  
		}
		
		else {
		// move the words
			document.querySelector(".logo2").style.WebkitAnimationPlayState= "running";
		move();
		function move() {
		
		document.querySelector(".jewelery").style.marginLeft = l++ + "px";
		document.querySelector(".selection").style.marginRight = l++ + "px";  
		
		if( l == 100) {
		
			document.querySelector(".jewelery").style.marginLeft = l-- + "px";
			document.querySelector(".selection").style.marginRight = l-- + "px"; 
			
			document.querySelector(".jewelery").style.marginLeft = l2-- + "px";
			document.querySelector(".selection").style.marginRight = l2-- + "px";
			
			if(l2 == 0){
				 l = 0;
				l2 = 100;
				move();
			}
		}
			
			
			}
			}
		
	}
	
	
	else if(window.scrollY > 800 && window.scrollY < 1000 ) {
		
		document.querySelector(".ourStory").style.transform = "scale(1)";
		document.querySelector(".ourStory").style.opacity = "1";
		
		
	}
	
	// show images in page 2 
	else if(window.scrollY > 1000 && window.scrollY < 1100 ) {
	
			document.querySelector(".storyBracelet1").style.WebkitAnimationPlayState= "running";
		document.querySelector(".storyBracelet2").style.WebkitAnimationPlayState= "running";
		
	}
	
	else if(window.scrollY > 1100 && window.scrollY < 2300 ) {
		document.querySelector(".materials1").style.transform = "scale(1)";
		document.querySelector(".materials1").style.opacity = "1";
		/*document.querySelector(".materials2").style.transform = "scale(1)";
		document.querySelector(".materials2").style.opacity = "1"; */
		
		// move the words
		document.querySelector(".jewelery").style.marginLeft = "100px";
		document.querySelector(".selection").style.marginRight = "100px"; 
	}
	
	
	// show girl 2  25000
	else if(window.scrollY > 2300 && window.scrollY < 2800 ){
     
			
			document.querySelector(".girl2").style.WebkitAnimationPlayState= "running";
		
		// move the words
		document.querySelector(".jewelery").style.marginLeft = "100px";
		document.querySelector(".selection").style.marginRight = "100px"; 
		
	} 
	
else if (window.scrollY > 2800) {  
	document.querySelector(".girl3").style.WebkitAnimationPlayState= "running";
	
	// move the words
		document.querySelector(".jewelery").style.marginLeft = "100px";
		document.querySelector(".selection").style.marginRight = "100px"; 
	} 
	
	}


	
};


// show inside burger 2 in page 1
function showBurger2() {
	
	// bg of the first element on burger 2 
	document.querySelector(".burgerHome").classList.add("clickedInsideBurger");
	document.querySelector(".burgerAbout").classList.remove("clickedInsideBurger");
	document.querySelector(".burgerCollection").classList.remove("clickedInsideBurger"); 
	
	document.querySelector(".inside-burger2").style.display = "block";
	document.getElementById("close2").style.display = "block";
	document.getElementById("burger2").style.display = "none";
	document.querySelector(".inside-burger2").classList.remove("hide-inside-burger2");
}

// hide inside burger 2
function hideBurger2() {
	document.querySelector(".inside-burger2").classList.add("hide-inside-burger2");
	document.getElementById("close2").style.display = "none";
	document.getElementById("burger2").style.display = "block";
	setTimeout(function() {
		document.querySelector(".inside-burger2").style.display = "none";
	} , 500)
}


// show inside about and inside custome care => inside burger

function showInAbout() {
	
	var b1 = document.querySelector(".burgerOurStory"),
    //b2 = document.querySelector(".burgerOurMaterials"),
    b3 = document.querySelector(".burgerContactUs");
	//document.querySelector(".burgerAbout").click();
	
	document.querySelector(".burgerAbout").classList.add("clickedInsideBurger");
	document.querySelector(".burgerCollection").classList.remove("clickedInsideBurger");
	document.querySelector(".burgerHome").classList.remove("clickedInsideBurger"); 
	

	if (b1.style.display == "block") {
	b1.style.display = "none";
	//b2.style.display = "none";
	b3.style.display = "none";
	}
	
	else{
		b1.style.display = "block";
	//b2.style.display = "block";
	b3.style.display = "block";
	}
	
}




// show contact us without loading 
/*
function karim() {
	/*
const state = { 'page_id': 1, 'user_id': 5 }
const title = ''
const url = 'DahabContact.html';
 
window.history.pushState(state, title, url); */
	
	/*history.pushState({}, null, 'DahabContact.html');

}

function ChangeUrl(page, url) {
        if (typeof (history.pushState) != "undefined") {
            var obj = {Page: page, Url: url};
            history.pushState(obj, obj.Page, obj.Url);
        } else {
            window.location.href = "DahabContact.html";
            // alert("Browser does not support HTML5.");
        }
    }

*/


// show product onclick



function showProduct(source, productName, description) {
	
	
	var i,
		x = document.querySelectorAll(".im");
	for(i = 0; i < x.length; i++) {
		x[i].style.transition = "0s";
		x[i].style.visibility = "hidden";
	}
	 
	
var mq = window.matchMedia("(max-width: 950px)");
	document.querySelector(".allBody").style.opacity = "0.1";
	
	// create elements
	var div1 = document.createElement("div"),
		// inside div1
		image = document.createElement("img"),
    div2 = document.createElement("div"),
		// inside div2
	h2 = document.createElement("h2"),
	h3 = document.createElement("h3"),
	p = document.createElement("p"),
    button = document.createElement("button"),
		// inside button
		hr = document.createElement("hr"),
		h4 = document.createElement("h4"),
	
	// close to close this div
	close = document.createElement("i");
	
	//else{
	// div 1
	//div1.style.margin = "50px auto";
	div1.style.position = "fixed";
	div1.style.top = "5px";
	div1.style.bottom = "5px"; 
	div1.style.left = "10%";
	div1.style.width = "80%";
	//div1.style.height = "100%";
	div1.style.padding = "30px";
	div1.style.backgroundColor = "#30373e";
	div1.style.border = "1px solid #CB9274";
	div1.style.display = "flex";
	div1.style.justifyContent = "space-around";
	div1.style.overflowWrap = "break-word";
	//div1.setAttribute("class", "divInsideProduct");
	
	// showing div1
	div1.classList.add("showProductDiv");
	div1.classList.remove("hideProductDiv");
	
	// image
	image.src = source;
	image.style.width = "40%";
	//image.style.height = "95%";
	
	// div 2
	div2.style.width = "100%";
	image.style.height = "100%";
	div2.style.marginTop = "100px";
	
	// h2
	h2.innerHTML  = productName;
	h2.style.color  = "white";
	
	// h3
	h3.innerHTML = "descreption";
	h3.style.marginTop = "100px";
	h3.style.textDecoration = "underline";
	h3.style.color  = "white";
	h3.style.fontSize  = "35px";
	
	// p
	p.innerHTML = description;
	p.style.marginTop = "50px";
//p.style.overflowWrap = "break-word";
	p.style.color  = "white";
	p.style.fontSize  = "30px";
	
	// button
	button.style.marginTop = "50px";
	button.onclick = function() {
		window.location.href = "DahabContact.html";
	}
	// h4
	h4.innerHTML = "Inquery now";
	
	
	// close i
	close.setAttribute("class", "fas fa-times");
	close.style.color = "white";
	// change color on hover
	close.onmouseover = function() {
		close.style.color = "#CB9274";
	}
	close.onmouseleave = function() {
		close.style.color = "white";
	}
	
	
	close.onclick = function() {
		
		div1.classList.add("hideProductDiv");
		div1.classList.remove("showProductDiv");
		setTimeout(function() {
			div1.style.display = "none";
			document.querySelector(".allBody").style.opacity = "1";
			
			for(i = 0; i < x.length; i++) {
		
		
		x[i].style.visibility = "visible";
	}
		}, 500)
		
		
	
		
		
	/*	for(i = 0; i < x.length; i++) {
		
		//if(document.querySelector(".divInsideProduct").style.display == "flex"){
        x[i].onclick = true;
			
	} */
	
	
	}
	
	//document.querySelector(".restBody").appendChild(div1);
	document.body.appendChild(div1);
	div1.appendChild(image);
	div1.appendChild(div2);
	div1.appendChild(close);
	//inside div2
	div2.appendChild(h2);
	div2.appendChild(h3);
	div2.appendChild(p);
	div2.appendChild(button);
	// inside button
	button.appendChild(hr);
	button.appendChild(h4);
		
		//}
	
	// not clicking another one
/*	var i,
		x = document.querySelectorAll(".im"); */
	
	
	// on mobile screen
	setInterval(function(){
		if(mq.matches) {
	//	div1.setAttribute("class", "mobileProductDiv")
		// div1
		div1.style.display = "block";
	/*	div1.style.width = "90%";
		div1.style.left = "5%"; */
		
		div1.style.padding = "20px";
	    //image
		image.style.width = "100%";
		image.style.height = "300px";
		
		//div2
		div2.style.width = "100%";
		div2.style.marginTop = "0px";
		//h3
		h3.style.marginTop = "30px";
		h3.style.fontSize  = "30px";
		//p
		p.style.marginTop = "10px";
		p.style.fontSize  = "25px";
		//button
		button.style.marginTop = "30px";
		//close i
		close.style.marginTop = "30px";
	}
		
		// on desktop screen
		else{
				div1.style.position = "fixed";
	//div1.style.top = "50px";
/*	div1.style.left = "5%";
	div1.style.width = "90%"; */

	div1.style.display = "flex";
	div1.style.justifyContent = "space-around";
	
	
	// image
	image.style.width = "40%";
	image.style.height = "100%";
	
	// div 2
	div2.style.width = "40%";
	div2.style.marginTop = "100px";
	
	
	// h3
	h3.style.marginTop = "100px";

	h3.style.fontSize  = "35px";
	
	// p
	
	p.style.marginTop = "50px";
	p.style.fontSize  = "30px";
	
	// button
	button.style.marginTop = "50px";
		}
	
	})
	
} 



/*
const nextURL = 'DahabContact.html';
const nextTitle = 'Dahab Contact';
const nextState = { additionalInformation: 'Dahab.html' };  */
	
function karim2() {
		window.history.pushState('DahabContact', 'Contact', 'DahabContact.html');
	history.replaceState(document.url, "", "?file:///D:/dahab/DahabContact2.html");
	
	
/*
	window.history.pushState('', 'New Page Title', '?new-url.php');
	window.history.replaceState({}, '','/DahabContact.html');
	window.history.pushState('', 'New Page Title', '/new-url.php');
	window.history.pushState('DahabContact', 'Contact', 'DahabContact.html'); */
	
	
	}

// select product 
function selectProduct() {
	//window.onscroll() => {
	//document.querySelector(".selectProducts").value = "item5";
	//if(window.location.href == "DahabContact.html") {
	//document.body.style.backgroundColor = "red";
	document.querySelector(".selectProducts").value = "item5";
	//}
	//setInterval(selectProduct, 5);
	//}
		//}
}


// on button inquery click on the div of the product
function kim() {
	setInterval(selectProduct, 5);
}
// choose product
function chooseProduct() {
	

	setInterval(selectProduct, 5); 
	
}

	


function processAjaxData(response, urlPath){
     document.getElementById("content").innerHTML = response.html;
     document.title = response.pageTitle;
     window.history.pushState({"html":response.html,"Contact":response.pageTitle},"", urlPath);
 }

// onload show loading 
function showLoading() {
	document.body.style.overflowY = "visible";
	document.querySelector(".allBody").style.display = "block";
	document.querySelector(".loading").style.display = "none"; 
}



// scroll to top
function scrollToTop() {
	"use strict";
	window.scrollTo({ top: 0, behavior: 'smooth' });
}
