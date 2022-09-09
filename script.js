let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveBtn");

const generatePassword = () => {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const symbol = "!@#$%^&*()-_=+{}][|:;.,<>?/~";

  const data = lowerAlphabet + upperAlphabet + numeric + symbol;
  let generator = "";

  for (let i = 0; i < passwordLength.value; i++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
};

const getPassword = () => {
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
  alert(`password has been generated`);
};

const savePassword = () => {
  saveButton.setAttribute("href", "data:text/plan;charser=utf-8," + encodeURIComponent(`Password Saya:  ${password.value}`));
  saveButton.setAttribute("download", "MyPasswordGenerator.txt");
  setTimeout(() => {
    alert("berhasil disimpan!");
  }, 1000);
};
