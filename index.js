function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav" || "topnav.scrolled") {
        x.className += ' responsive'; 
    } else {
        x.className = "topnav" || "topnav.scrolled";
    }
}document.addEventListener("click",(()=>{querySelector(".topnav a.icon").classList.remove("responsive")})),document.addEventListener("scroll",(()=>{const e=document.querySelector(".topnav");window.scrollY>0?e.classList.add("scrolled"):e.classList.remove("scrolled")})),window.addEventListener("scroll",(function(){const e=window.scrollY,o=document.querySelector("header").offsetHeight,t=[document.querySelector("#aboutus").offsetTop,document.querySelector("#products").offsetTop,document.querySelector("#contactus").offsetTop];let c=0;for(let s=0;s<t.length;s++)e>=t[s]-o&&(c=s+1);const s=document.querySelectorAll(".topnav a");s.forEach((e=>{e.classList.remove("highlight")})),s[c].classList.add("highlight")}));