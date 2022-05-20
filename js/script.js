// Created by: Jaejun Lee
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict";

/**
 * This function does multiplication.
 */
function myButtonClicked () {
  const integer = parseInt(document.getElementById("integer").value);
  let sum = 0;
    
    for (let addedInteger = 1; addedInteger <= integer; addedInteger++) {
      sum += addedInteger;
    }
            
  document.getElementById("answers").innerHTML = 
    "The sum is: " + sum;
}