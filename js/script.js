/* <!--
File:  script.js
GUI Assignment: Hw4pt1 Multiplication Table with validation
Tai Dao, UMass Lowell Managament Information System Major, tai_dao@student.uml.edu

JS file to handle and create my multiplcation table with validation

Copyright (c) 2025 by Tai Dao. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by Tai on November 26, 2025 at 3:49PM

-->*/


/*Jquerey loads when the whole HTML loads*/
$(document).ready(function () {

/*Custom validation methods for the user when entering a number*/ 
    $.validator.addMethod("greaterOrEqual", function (value, element, selector) {
        const start = parseInt($(selector).val());
        const end = parseInt(value);

        if (Number.isNaN(start) || Number.isNaN(end)) {
            return true;
        }
        return end >= start;
    }, "Ending value must be greater than or equal to beginning value");

    $.validator.addMethod("integer", function (value, element) {
        if (this.optional(element)) return true;
        const n = Number(value);
        return Number.isInteger(n);
    }, "Please enter an integer");

    /*Sourcing where the validation methods will take place. So the form multForm will be validated and it's inputs */
    let validator = $("form[name='multForm']").validate({
        rules: {
            Beginning1: {
                required: true,
                integer: true,
                min: -50,
                max: 50
            },
            Ending1: {
                required: true,
                integer: true, min: -50,
                max: 50,
                greaterOrEqual: "#Beginning1"
            },
            Beginning2: {
                required: true,
                integer: true,
                min: -50,
                max: 50
            },
            Ending2: {
                required: true,
                integer: true,
                min: -50,
                max: 50,
                greaterOrEqual: "#Beginning2"
            }
        },
        /*Messaegs when inputs are not correct */
        messages: {
            Beginning1: {
                required: "Please enter a number",
                integer: "Invalid integer",
                min: "Must be >= -50",
                max: "Must be <= 50"
            },
            Ending1: {
                required: "Please enter a number",
                integer: "Invalid integer",
                min: "Must be >= -50",
                max: "Must be <= 50",
                greaterOrEqual: "Ending value must be greater than or equal to the beginning value"
            },
            Beginning2: {
                required: "Please enter a number",
                integer: "Invalid integer",
                min: "Must be >= -50",
                max: "Must be <= 50"
            },
            Ending2: {
                required: "Please enter a number",
                integer: "Invalid integer",
                min: "Must be >= -50",
                max: "Must be <= 50",
                greaterOrEqual: "Ending value must be greater than or equal to the beginning value"
            }
        },
/*submitting the validated date and generating table */
        submitHandler: function (form, event) {
            event.preventDefault();
            let begin1 = parseInt($("#Beginning1").val());
            let end1 = parseInt($("#Ending1").val());
            let begin2 = parseInt($("#Beginning2").val());
            let end2 = parseInt($("#Ending2").val());
            Table(begin1, end1, begin2, end2);

        }
    });
});

/*
function to create the multiplcation table taking in 4 inputs from the checker function
*/
function Table(begin1, end1, begin2, end2) {
    let table = document.getElementById("multiplicationtable");
    let output = "<tr><th></th>";

    /*Creates each column*/
    for (let i = begin1; i <= end1; i++) {
        output += `<th>${i}</th>`;
    }
    output += "</tr>";

    /*creates each row*/
    for (let j = begin2; j <= end2; j++) {
        output += `<tr><th>${j}</th>`;
        /*Creates each cells*/
        for (let i = begin1; i <= end1; i++) {
            output += `<td>${i * j}</td>`;
        }
        output += "</tr>";
    }

    table.innerHTML = output;
}
