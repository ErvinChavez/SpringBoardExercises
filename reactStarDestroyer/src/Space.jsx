import { useState, useRef, useEffect } from "react";
import React from "react";

function Space () {
//useEffect is what's going stay constant, the interval that adds stars every 2.5 sec
//No API is called so we are creating the stars
const starSize = 20; //could be whatever size you want

function generateStar() { //making the star will return what for each of them
    return { //an object of...
        id: crypto.randomUUID(), //a unique id for each star
        xPos: Math.random() * (window.innerWidth - starSize), //random xPos for it
        yPos: Math.random() * (window.innerHeight - starSize) //random yPos for it
    }
}

function destroyer() { //destory the star based on the id
    
}

}

export default Space;