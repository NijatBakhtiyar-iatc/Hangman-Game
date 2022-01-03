const letter = prompt("Enter a word");
let buttons = document.querySelectorAll(".buttons button");
let count = letter.length;
let ul_el = document.querySelector(".game ul");
let text = document.querySelector("p");

text.innerText = `You have ${count} chances `

for (let i = 0; i < letter.length; i++) {
  ul_el.innerHTML += `<li></li>`;
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    buttons[i].style.opacity = ".3";

    for (let j = 0; j < letter.length; j++) {
      if (letter[j].toLowerCase() === buttons[i].innerText.toLowerCase()) {
        let li_el = ul_el.querySelectorAll("li")
        li_el[j].innerText = buttons[i].innerText;
        li_el[j].style.borderColor = "green";
      }
    };

    count--;
    text.innerText = `You have ${count} chances `;
    if(count <= 0){
    text.innerText = `Game Over`;
    text.style.color = "red";
    }
  });
};

