// ===============================
// Dark Mode
// ===============================

const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        darkBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});


// ===============================
// Order Button Alert
// ===============================

const orderButtons = document.querySelectorAll(".orderBtn");

orderButtons.forEach(function(button){

    button.addEventListener("click", function(){

        alert("☕ Thank you! Your order has been placed successfully.");

    });

});


// ===============================
// Contact Form
// ===============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("✅ Thank you! Your message has been sent.");

    contactForm.reset();

});


// ===============================
// Smooth Scroll
// ===============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link){

    link.addEventListener("click", function(e){

        e.preventDefault();

        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ===============================
// Hero Button Scroll
// ===============================

const heroButton = document.querySelector(".btn");

heroButton.addEventListener("click", function(e){

    e.preventDefault();

    document.querySelector("#menu").scrollIntoView({

        behavior:"smooth"

    });

});


// ===============================
// Header Shadow on Scroll
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";

    }

    else{

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";

    }

});


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function(){

    let current = "";

    sections.forEach(function(section){

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(function(link){

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});


// ===============================
// Welcome Message
// ===============================

window.addEventListener("load", function(){

    console.log("Welcome to Brew Bliss Coffee Shop!");

});