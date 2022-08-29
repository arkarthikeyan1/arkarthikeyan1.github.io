let i=document.querySelector(".toogle");
let show=document.querySelector(".list");
i.addEventListener("click",()=>{
    // let change = document.getElementsByClassName("navlink_bar");
    i.classList.toggle("active");
    show.classList.toggle("active");
})
