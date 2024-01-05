"use strict"
let sidebar = document.querySelector(".section1")
let sidebar2 = document.querySelector(".section2")
let draggable = document.querySelector(".draggable")
let mouseLocationOnClick, sectionOneWidth, sectionTwoWidth;
let maxWidth = window.innerWidth
let draggableWidth = window.getComputedStyle( draggable ).flexBasis;
draggableWidth = parseInt( draggableWidth, 10 );

function draggableSetUp( draggable) {
    draggable.addEventListener("mousedown", mousedownHandler);
}

function mousedownHandler( e ) {
    mouseLocationOnClick = e.clientX;
    let sectionOneCurrentWidth = window.getComputedStyle( sidebar ).flexBasis;
    let sectionTwoCurrentWidth = window.getComputedStyle( sidebar2 ).flexBasis;
    sectionOneWidth = parseInt( sectionOneCurrentWidth, 10 );
    sectionTwoWidth = parseInt( sectionTwoCurrentWidth, 10 );
    document.addEventListener("mousemove", mousemoveHandler);
    document.addEventListener("mouseup", mouseupHandler);
 }

function mousemoveHandler( e ) {
    let mouseNewLocation = e.clientX - mouseLocationOnClick;
    let newSectionOneWidth = sectionOneWidth + mouseNewLocation; // complete width
    let newSectionTwoWidth = maxWidth - (newSectionOneWidth + draggableWidth)
    
    if ( newSectionOneWidth < maxWidth ) {
       sidebar.style.flexBasis = `${ newSectionOneWidth }px`;
       sidebar2.style.flexBasis = `${ newSectionTwoWidth }px`;

    }
 }

function mouseupHandler() {
    // remove event mousemove && mouseup
    document.removeEventListener("mouseup", mouseupHandler);
    document.removeEventListener("mousemove", mousemoveHandler);
 }
 
 draggableSetUp( draggable);

