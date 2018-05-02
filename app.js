"use strict";

// Declaring my variables in preparation of input checking

let check = document.querySelector("form")
let button = document.querySelector(".button")
let error = document.querySelector(".error")
let success = document.querySelector(".success")
let email = document.querySelector("#email")
let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/

/* Check regex, show success/error message, disable click after success. 
(In general I use an if statement but here I wanted to experiment the ternary operator) */

check.addEventListener('submit', function (e) {
  e.preventDefault()
    !regex.test(email.value)
    ?(error.style.display = "inline", console.log("wrong input"))
    :(success.style.display = "inline", console.log("good input"), error.remove(), button.disabled = true)
});

// Simulating HTTP request using Ladda built-in loading indicators
Ladda.bind('button[type=submit]');



//  Jquery function to simulate loading state
/*
$('.button').on('click', function () {
  let $this = $(this);
  $this.button('loading');
  setTimeout(function () {
    $this.button('reset');
  }, 2000);
});  */