//SCROLL POSITION
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//NAV BAR 
 //DECLARATION
 const menuBtn =document.querySelector(".menu-bar span");
 const cancelBtn =document.querySelector(".cancel");
 const bar =document.querySelector(".nav-bar");

//NAV BAR LINK CLICK AND HIDE NAV BAR
bar.onclick = ()=>{
    bar.classList.add('deactive');
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
}
 //MENUE ICON WORK
 menuBtn.onclick = ()=>{
     bar.classList.add("active");
     menuBtn.classList.add("hide");
     cancelBtn.classList.add("show"); 
 }

 //CANCEL ICON WORK
 cancelBtn.onclick = ()=>{
     bar.classList.remove("active");
     menuBtn.classList.remove("hide");
     cancelBtn.classList.remove("show");
     cancelBtn.style.color = "#ff3d00";
 }

 //CONTACT US  MESSAGE SENDING IN GMAIL

 const btn = document.getElementById('button');
 

 document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();
 
    btn.value = 'Sending...';
 
    const serviceID = 'service_tnc3sw9';
    const templateID = 'template_a8nc654';
 
    emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
       btn.value = 'Send Email';
       alert('Your Message Is Sent Successfully. I Will Mail You Soon. Thank You.');
     }, (err) => {
       btn.value = 'Send Email';
       alert('Something Went To Worng!!! Try Again Or Mail Me. Thank You.');
     });
 });
