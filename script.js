
let toggle = document.getElementById("toggle");
toggle.addEventListener("click", toggleIcon);

function toggleIcon(){
    let container = document.getElementById("container");
    let menu = document.getElementById("menu");
    if(toggle.hasAttribute("title")){
       toggle.setAttribute("class", "toggle active");
       container.setAttribute("class", "container active");
       menu.setAttribute("class", "menu active");
       toggle.removeAttribute("title");
    }
    else{
        toggle.setAttribute("class", "toggle");
        container.setAttribute("class", "container");
        menu.setAttribute("class", "menu");
        toggle.setAttribute("title", "a");
    }
}


