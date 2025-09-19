const number = document.getElementById("number");
const output = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");

/* Roman Numeral Converter function */
const converter = (num)=> {
  if (num >= 1000) {
    const repeatM = Math.floor(num / 1000);
    const result = "M".repeat(repeatM);
    return result + converter(num - repeatM * 1000);
  } else if (num >= 900) {
    return "CM" + converter(num - 900);
  } else if ( num >= 500) {
    return "D" + converter(num - 500);
  } else if (num >= 400) {
    return "CD" + converter(num - 400);
  } else if (num >= 100) {
    const repeatC = Math.floor(num / 100);
    const result = "C".repeat(repeatC);
    return result + converter(num - repeatC * 100);
  } else if (num >= 90) {
    return "XC" + converter(num - 90);
  } else if (num >= 50) {
    return "L" + converter(num - 50);
  } else if (num >= 40) {
    return "XL" + converter(num - 40);
  } else if (num >= 10) {
    const repeatX = Math.floor(num / 10);
    const result = "X".repeat(repeatX);
    return result + converter(num - repeatX * 10);
  } else if (num >= 9) {
    return "IX" + converter(num - 9);
  } else if (num >= 5) {
    return "V" + converter(num - 5);
  } else if (num >= 4) {
    return "IV" + converter(num - 4);
  } else {
    return "I".repeat(num)
  }
  
}

function checkNumber(numberVal) {
  const num = parseInt(numberVal);
  if (!numberVal) {
    output.classList.add("error")
    output.innerText = "Please enter a valid number";
    return;
  } else if (num <= 0) {
    output.classList.add("error")
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (num >= 4000) {
    output.classList.add("error")
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  } else {
    output.classList.remove("error")
    output.innerText = "";
    output.innerText = `${converter(num)}`;
  }
}

number.addEventListener("keydown", (e)=> {
  if (e.key === "Enter") {
    checkNumber(number.value);
    number.value = "";
  }
})

convertBtn.addEventListener("click", ()=>{
  checkNumber(number.value);
  number.value = "";
})
