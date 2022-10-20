//SCROLL POSITION
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
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
