const toggleBtn = document.querySelectorAll(".qbtn");
const answers = document.querySelectorAll(".answers");
const alert1 = document.querySelector(".alert1");
const alert2 = document.querySelector(".alert2");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const submit1 = document.querySelector(".submit1");
const submit2 = document.querySelector(".submit2");

toggleBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let theParent = e.currentTarget.parentElement.parentElement;
    theParent.classList.toggle("show");
    answers.forEach((answer) => {
      if (answer != theParent) {
        answer.classList.remove("show");
      }
    });
  });
});

submit1.addEventListener("click", (e) => {
  e.preventDefault();
  submitForm(input1, alert1);
});
submit2.addEventListener("click", (e) => {
  e.preventDefault();
  submitForm(input2, alert2);
});

function displayAlert(alertNum) {
  alertNum.style.visibility = "visible";
  setTimeout(() => {
    alertNum.style.visibility = "hidden";
  }, 3000);
}

function submitForm(inputNum, alertNum) {
  const spaces = [];
  for (let i = 0; i < inputNum.value.length; i++) {
    spaces.push(inputNum.value[i]);
  }
  const checkSpaces = spaces.every((space) => {
    return space === " ";
  });
  if (inputNum.value === "" || checkSpaces) {
    displayAlert(alertNum);
  }
  inputNum.value = "";
}
