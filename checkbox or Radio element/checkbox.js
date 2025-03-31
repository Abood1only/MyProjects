const mycheckbox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const paypalBtn = document.getElementById("paypalBtn");
const submitBtn = document.getElementById("submitBtn");
const submessage = document.getElementById("submessage");
const paymentmessage = document.getElementById("paymentmessage");

submitBtn.onclick = function () {
  if (mycheckbox.checked) {
    submessage.textContent = "I'm Subscribed";
  } else {
    submessage.textContent = "I'm not Subscribed";
  }
  if (visaBtn.checked) {
    paymentmessage.textContent = "You have selected Visa";
  } else if (masterBtn.checked) {
    paymentmessage.textContent = "You have selected MasterCard";
  } else if (paypalBtn.checked) {
    paymentmessage.textContent = "You have selected PayPal";
  } else {
    paymentmessage.textContent = "You have not selected any payment method";
  }
};
