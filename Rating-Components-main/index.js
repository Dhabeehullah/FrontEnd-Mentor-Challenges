const ratings=document.querySelectorAll(".container2 button");
const rate_point=document.getElementById("rating");
const submit_btn=document.querySelector(".submit");
const rating_sec=document.querySelector(".cont1");
const thank_sec=document.querySelector(".cont2");

let rate=null;

ratings.forEach((ratings) => {
    ratings.addEventListener("click",(e) => {
        const active=document.querySelector(".colorforcircle");
        if(active){
            active.classList.remove("colorforcircle");
        }
        const card=e.target;
        card.classList.add("colorforcircle");
        rate=e.target.innerText;
    });
});

submit_btn.addEventListener("click", () => {
    if(rate){
        rate_point.innerText=rate;
        rating_sec.classList.add("hidden");
        thank_sec.classList.remove("hidden");
    }
});











