// show a message with a type of the input
function showMessage(input, message, type) {
    // get the small element and set the message
    const msg = input.parentNode.querySelector("small");
    msg.innerText = message;
    // update the class for the input
    input.className = type ? "success" : "error";
    return type;
}

// Functions
function showError(input, message) {
    return showMessage(input, message, false);
}

function showSuccess(input) {
    return showMessage(input, "", true);
}

function hasValue(input, message) {
    if (input.value.trim() === "") {
        return showError(input, message);
    }
    return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
    // check if the value is not empty
    if (!hasValue(input, requiredMsg)) {
        return false;
    }
    // validate email format
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const email = input.value.trim();
    if (!emailRegex.test(email)) {
        return showError(input, invalidMsg);
    }
    return true;
}

// Validate the User Type Section
function validType(message) {
    var school = document.getElementById("radio-school");
    var university = document.getElementById("radio-university");
    var employee = document.getElementById("radio-employee");
    if (school.checked == true) {
        document.getElementById("type-error").innerHTML = "";
        return true;
    } else if (university.checked == true) {
        document.getElementById("type-error").innerHTML = "";
        return true;
    } else if (employee.checked == true) {
        document.getElementById("type-error").innerHTML = "";
        return true;
    } else {
        document.getElementById("type-error").innerHTML = message;
        return false;
    }
}

// Validate the Payment Method
function validPayment(message) {
    var payment = document.getElementById("paymentt").value;
    if (payment == "select-payment") {
        document.getElementById("payment-error").innerHTML = message;
        return false;
    } else {
        document.getElementById("payment-error").innerHTML = "";
        return true;
    }
}

//Validate the Contact Number
function validNumber(input, message) {
    var checkNumber = input.value;
    var contactError = document.getElementById('contact-error');
    if (!(isNaN(checkNumber))) {
        if (checkNumber.length == 10) {
            contactError.innerHTML = "";
            return true;
        } else {
            contactError.innerHTML = "Your Contact Number must contain 10 Numbers <br> Example : 0712345678";
            return false;
        }
    } else {
        contactError.innerHTML = "Your Contact Number must only contain Numbers <br> Example : 0712345678";
        return false;
    }
}

//credit
var x = "Developed by <b> <span style=color:tomato;> Induwara Uthsara </span> </b> &copy"; 
var year = new Date().getFullYear();
var credit = document.getElementById("credit");
credit.innerHTML = x + year;
credit.style.background="black";
credit.style.color="white";
credit.style.LineHeight="15";
credit.style.padding="5";
credit.style.textAlign="center";
credit.style.position="fixed";
credit.style.display="block";
credit.style.width="100%";
credit.style.bottom="0";
credit.style.margin="0";


// Access the form
const form = document.getElementById("form");

const FNAME_REQUIRED = "Please enter your First name. It's required";
const LNAME_REQUIRED = "Please enter your Last name. It's required";
const NUMBER_REQUIRED = "Please enter valied Contact Number.";
const ADDRESS_REQUIRED = "Please enter your Address. It's required";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";
const TYPE_REQUIRED = "Please enter your  User Type. It's required";
const PAYMENT_REQUIRED = "Please enter Payment Method. It's required";

form.addEventListener("submit", function(event) {
    // stop form submission
    event.preventDefault();

    // validate the form
    let fnameValid = hasValue(form.elements["firstname"], FNAME_REQUIRED);
    let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
    let lnameValid = hasValue(form.elements["lastname"], LNAME_REQUIRED);
    let numberValid = validNumber(form.elements["contact"], NUMBER_REQUIRED);
    let addressValid = hasValue(form.elements["address"], ADDRESS_REQUIRED);
    let typeValid = validType(TYPE_REQUIRED);
    let paymentValid = validPayment(PAYMENT_REQUIRED);

    //add array to input list
    inputList = [
        fnameValid,
        emailValid,
        lnameValid,
        numberValid,
        addressValid,
        typeValid,
        paymentValid,
    ];

    // Submit Form
    if (inputList.every(Boolean)) {
        alert("User Added Successfully");
        form.submit();
    } else {
        return false;
    }
});
