let rateButton = document.querySelectorAll(".rating_button");
let ratings = document.querySelector(".rating");
let submitButton = document.querySelector(".submit_button");
let container = document.querySelector(".container");
let result = document.querySelector(".rate-result");
let resultContainer = document.querySelector(".result_container");


//config the rating in js file

for(let i = 0; i < rateButton.length; i++) {

    rateButton[i].addEventListener("click", () => {

        let rate = rateButton[i].innerHTML;

        for(let i = 0; i < rateButton.length; i++) {
            rateButton[i].classList.contains("selected");
            rateButton[i].classList.remove("selected");
        }

        rateButton[i].classList.add("selected");

        submitButton.addEventListener("click", () => {

            container.style.display = "none";
            resultContainer.style.display = "block";
            result.innerHTML = rate;
        })
    })

}





