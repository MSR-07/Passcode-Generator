const pwc = document.getElementById("pwc_txt");
const generate = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");
let pwc_length = document.getElementById("slider");
let copy_text = document.getElementById("copy_text");
let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

generate.addEventListener("click", () => {
  let passcode = "";
  let checked = document.getElementById("checkbox").checked;
  let final_string = string;
  if (checked) {
    final_string += "@#$%^&*?+=?><,.!";
  }
  for (let i = 0; i < pwc_length.value; i++) {
    let pwc = final_string[Math.floor(Math.random() * final_string.length)];
    passcode += pwc;
  }
  pwc.innerText = passcode;
  final_string = string;
});

clipboard.addEventListener("click", () => {
  navigator.clipboard.writeText(pwc.innerText);
  copy_text.textContent = "Passcode Copied!";
  copy_text.style.display = "block";
  setTimeout(() => {
    copy_text.style.display = "none";
  }, 2000);
});
