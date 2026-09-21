"use strict";

let grades = [];
let incoming = +prompt("Įveskite kiek balų gavo mokinys:");
while (incoming != 0)
{
    grades.push(incoming)
    incoming = +prompt("Įveskite kiek balų gavo mokinys:");
}
let okay = 0;
let passable = grades.reduce((a, b) =>
{
    if(b >= 5 || a >= 5)
    {
        okay++;
    }
    return okay;
},0);

alert(`Į karnavalą ėjo ${grades.length}, pateko ${passable}`);
