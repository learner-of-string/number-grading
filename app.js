const resultNumber = document.getElementById("resultNumber");
const btnSubmit = document.getElementById("btnSubmit");
const checkedValueText = document.getElementById("checkedValueText");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  if (parseFloat(resultNumber.value) < 33) {
    checkedValueText.innerText =
      "এএএএহ আইছে! মারছে ফেল আবার রেজাল্ট দেখতে আইছে...ভাগ শালা!";
  } else {
    if (parseFloat(resultNumber.value) === 100) {
      checkedValueText.innerText = "You are excellent!";
    } else if (parseFloat(resultNumber.value) >= 90) {
      checkedValueText.innerText = "You are GA+";
    } else if (parseFloat(resultNumber.value) >= 80) {
      checkedValueText.innerText = "You are A+";
    } else if (parseFloat(resultNumber.value) >= 70) {
      checkedValueText.innerText = "You are A";
    } else if (parseFloat(resultNumber.value) >= 60) {
      checkedValueText.innerText = "You are A-";
    } else if (parseFloat(resultNumber.value) >= 50) {
      checkedValueText.innerText = "You are B";
    } else if (parseFloat(resultNumber.value) >= 40) {
      checkedValueText.innerText = "You are C";
    }
  }
});
