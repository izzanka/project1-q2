var slideIndex = 1; //set slideIndex to first image
showDivs(slideIndex); 
  
function plusDivs(n) {  //function for add or substract the slideIndex
  showDivs(slideIndex += n);
}
  
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("active"); 
  if (n > x.length) {slideIndex = 1} //set slideIndex back to 0
  if (n < 1) {slideIndex = x.length} 
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  //hide class "active"
  }
  x[slideIndex-1].style.display = "block";  //show the slideIndex image
}