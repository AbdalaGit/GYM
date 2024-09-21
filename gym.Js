let menu = document.getElementById("menu");
let navbar = document.getElementById("navbar");
let hoverlist = document.querySelectorAll(".list li a");

menu.onclick = function () {
  navbar.classList.toggle("active-menu");
};

hoverlist.forEach(list => {
  list.addEventListener('mouseover' , () => {
    list.classList.add('active')
    list.classList.remove('active')
})
});

screen_subscribe = document.querySelector(".subscribe")
close_screen = document.querySelector(".fa-xmark");
btn_Subscribe = document.querySelector(".btn-Subscribe")

btn_Subscribe.onclick = function(){
  stopp()
  screen_subscribe.classList.add("show_screen")
  screen_subscribe.classList.remove("hidden_screen")
  screen_subscribe.style.translate = "0px";
}

close_screen.onclick = function(){
  setInterval(myscript,1000)
}

function myscript(){
  screen_subscribe.classList.remove("show_screen")
  // screen_subscribe.classList.add("hidden_screen")
  screen_subscribe.style.translate = "1500px";
}

function stopp(){
  clearInterval(myscript)
}






