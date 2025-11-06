


let Select = document.querySelector(".Processing")
let P = document.querySelector(".Launch")
let Finger = document.querySelector(".pointer-container")
// console.log(Select);

let ifareadyClicked = false;

let callloadingfucntion = () => {

    if (ifareadyClicked)
    {   
        return //return; immediately exits the function
    }

    ifareadyClicked = true

    P.style.display = 'none';
    Finger.style.display = 'none';

    let firstDiv = document.createElement("Div")
    firstDiv.classList.add("Beofore_div")
    Select.append(firstDiv)
    // console.log(Select)

    let Para = document.createElement('Para')
    Para.classList.add("Percent")
    firstDiv.append(Para)
    Para.innerText = "0%"
    //  console.log(firstDiv)

    let percent = 0;

    let intervalid = setInterval(() => {

        percent++;
        Para.innerText = `${percent}%`
        if (percent == 100) {
            clearInterval(intervalid);
            window.location.href = "../main.html";
        }
    }, 50)


}

Select.addEventListener('click', callloadingfucntion)