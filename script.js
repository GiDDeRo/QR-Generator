const userInput = document.querySelector("input");
const imgBox = document.getElementById("imageBox");
const img = document.querySelector("img")
const btn = document.querySelector("button");
const link = document.querySelector("a")
const footer = document.querySelector("footer")

const ApiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

btn.addEventListener("click", e=> {
    if (userInput.value.length > 0) {
        img.src = ApiUrl + userInput.value;
        imgBox.classList.add("show-image");
    } else {
        userInput.classList.add("error");
        setTimeout(()=>{
        userInput.classList.remove("error");
        }, 1000)
    }
})

footer.addEventListener("mouseover", e=> {
    link.style.color = "white";
})

footer.addEventListener("mouseout", e=> {
    link.style.color = "black";
    link.style.fontWeight = "600";
})