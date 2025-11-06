import { Callswiper } from "./Swiper";


let Template = document.querySelector("#Product_template")
// console.log(Template)

let StoreClonedData = document.querySelector(".swiper-wrapper")
// console.log(StoreClonedData)


export let StoreInformation = (Data) => {

    // console.log(`Data${JSON.stringify(Data)}`)

    if (!Data) {
        return false;
    }

    StoreClonedData.innerHTML = "";

    if (window.currentSwiper) {
    window.currentSwiper.destroy(true, true);
    window.currentSwiper = null;
  }

    Data.map((curr) => {
           
        const { ApplicationUse, Githublink, img, Information, ProjectLink, ProjectName, id } = curr;
        //   console.log(curr.ApplicationUse)

        let Cloned = document.importNode(Template.content, true);

        Cloned.querySelector(".Slides").setAttribute("id", id)
       

        // Store Data Into Slide 

        Cloned.querySelector(".Image").src = img;
        Cloned.querySelector(".Project_Name").textContent = ProjectName;
        Cloned.querySelector(".Information").textContent = Information;
        let Appcontainer = Cloned.querySelector(".Application_Use");
        // console.log(Appcontainer)

        Cloned.querySelector(".Demo-Link").href = ProjectLink;
        Cloned.querySelector(".Git-Link").href = Githublink;




        // Apllication uses Storing in Boxes
        ApplicationUse.forEach(curr => {
            let box = document.createElement("span")
            box.textContent = curr;
            box.classList.add("Boxshape")
            Appcontainer.appendChild(box);
        });



        StoreClonedData.append(Cloned);
    });


   setTimeout(() => {
       window.currentSwiper = Callswiper();
    }, 0);


}