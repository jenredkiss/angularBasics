//Create function to select elements
window.onload=function(){
  const selectElement = (element) => document.querySelector(element);
  //Open and close nav on click
  selectElement('.menu-icons').addEventListener('click', () => {
      selectElement('nav').classList.toggle('active');
  });
}
// $(document).ready(function(){
//   $nav = $('.nav-list');
//   $toggleCollapse = $('.menu-icons')

//   $('.menu-icons').click(function(){
//     $('nav').toggleClass('active');
//   });
// });
