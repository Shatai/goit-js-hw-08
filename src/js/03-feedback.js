import throttle from "lodash.throttle";
const key = "feedback-form-state";
const formEl = document.querySelector('.feedback-form');

formEl.addEventListener("submit", formSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));
innitForm();

function onFormInput(event) {
    let userData = localStorage.getItem(key);
    userData = userData ? JSON.parse(userData) : {};
    userData[event.target.name] = event.target.value;
    localStorage.setItem(key, JSON.stringify(userData));
}

function formSubmit(event) {
    event.preventDefault();
    const elements = event.target.elements;
    const email = elements.email.value;
    const message = elements.message.value;
    const data = {
        email,
        message,
    }
    event.target.reset();
    localStorage.removeItem(key);
    console.log(data);
}

function innitForm() {
    let savedData = localStorage.getItem(key);
    if(savedData) {
        savedData = JSON.parse(savedData);
        Object.entries(savedData).forEach(([name, value])=>{
            formEl.elements[name].value = value;
        })
    }
}













