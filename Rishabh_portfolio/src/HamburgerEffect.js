

let Hamburger = document.querySelector(".Top-Section .Hamburger")
let navbar = document.querySelector(".nav-bar")

let CallfuncHamburger = (event) => {

    // let computedDisplay = getComputedStyle(navbar).display;
    // //   getcomputedStyle-- always gives the real, actual style currently applied, regardless of where it came from.

    // if (computedDisplay === "none") {
    //     navbar.style.display = "block";
    // } else {
    //     navbar.style.display = "none";
    // }


    // The .classList.toggle() method in JavaScript is used to add or remove a class from an element — it acts like a switch.

    navbar.classList.toggle("show-nav");
    
}

Hamburger.addEventListener("click", CallfuncHamburger)