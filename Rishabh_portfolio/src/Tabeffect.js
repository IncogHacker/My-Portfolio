import { FetchCall } from "./FetchingAPI";

let buttons = document.querySelectorAll(".tab");
let wrapper = document.querySelector(".swiper-wrapper");

// Function to handle tab clicks
let handleTabClick = async (event) => {

  // Remove "active" from all buttons
  console.log(buttons)
  buttons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  // Get which type to fetch from data-type attribute
  let type = event.target.dataset.type;
  // console.log(type)

  // Clear existing slides
  wrapper.innerHTML = "";

  // Fetch and render new content
  await FetchCall(type);
};

// Attach event listeners
buttons.forEach((btn) => btn.addEventListener("click", handleTabClick));

// Default load (Minor Project)
FetchCall("MinorProject");
buttons[0].classList.add("active");
