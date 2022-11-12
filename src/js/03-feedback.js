import throttle from "lodash.throttle";

const feedbackFormState = "feedback-form-state";
const email = document.querySelector("input[name=email]");
const message = document.querySelector("textarea[name=message]");

const form = document.querySelector('form');

const onSubmit = (event) => {
    event.preventDefault();
    localStorage.removeItem(feedbackFormState);
    console.log({
        email: form.elements.email.value,
        message: form.elements.message.value
    });
    form.reset();
}

form.addEventListener('submit', onSubmit);

const localStorage = window.localStorage;

console.log(localStorage);

const onInput = (event) => {
    localStorage.setItem(feedbackFormState, JSON.stringify({
        email: form.elements.email.value,
        message: form.elements.message.value
    }))
}

const setValues = () => {
    const formState = localStorage.getItem(feedbackFormState);
    const dataFormState = JSON.parse(formState);
    if (dataFormState) {
        email.value = dataFormState.email;
        message.value = dataFormState.message;
    }
}

form.addEventListener('input', throttle(onInput, 500));

setValues();
