/* This code allows the class names in the main document to update after a certain period of time, and replaces them with the second animation classes (myAnimations2). */
setTimeout(function(){
var element = document.getElementById("image");
var element2 = document.getElementById("headline");
var element3 = document.getElementById("name");
element.classList.add("myAnimations2");
element2.classList.add("myAnimations2");
element3.classList.add("myAnimations2");
}, 2000);
