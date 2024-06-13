const buttons = document.querySelectorAll(".btn");
const submitBtn = document.querySelector(".submit-btn");
const card = document.querySelector(".card");
const thankYou = document.querySelector(".thank-you");
const rating = document.querySelector(".rating");
const selected = document.querySelector(".selected");


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let selected_btn = document.querySelector(".selected");
        if((button.classList.contains("selected"))){
            
            button.classList.remove("selected");
        }else{
            selected_btn.classList.remove("selected");
            button.classList.add("selected");
            
        }
    });
});

submitBtn.addEventListener("click", () => { 
    card.classList.add("hidden");
    thankYou.classList.remove("hidden");
    rating.innerHTML = document.querySelector(".selected").innerHTML;
});


