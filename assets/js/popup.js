
const showPopup = (e) => {
 //get dom element
 const formDiv = document.querySelector('.form-div');
 //add class to formDiv
 formDiv.classList.add('show');
}

const hidePopup = (e) => {
 let target = e.target;
 //get dom element
 const formDiv = document.querySelector('.form-div');
 //run code if true
 if (target.classList.contains('close')
  || target.classList.contains('form-div')) {
  //remove class to formDiv
  formDiv.classList.remove('show');
 }
}

//function turns off button default behaviour
const preventButtonDefault = (e) => {
 e.preventDefault();
 alert('Form not working!!!');
}

const eventListener = () => {
 //get dom elements
 const message = document.getElementById('message');
 const formDiv = document.querySelector('.form-div');
 const form = document.querySelector('form');

 //events
 message.addEventListener('click', showPopup);
 formDiv.addEventListener('click', hidePopup);
 form.addEventListener('submit', preventButtonDefault);
}

//call function
eventListener();