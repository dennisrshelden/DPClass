// globals.js
// defines all the global variables. This file is loaded early to ensure every other function that references global variables is defined AFTER the global variables are. 

var _elementList = [];
var _currentElementClass = null;
var _currentPointList = [];

var _xGrid = 20;
var _yGrid = 40;

var _2DView;
var _3DView;


var _ambientVal = 50;

var _human3D;
var _human2D;

// Data Table Stuff 
var _table = null; 
//---------------     Table Spec     --------------------
var _tableSpec = [
    {
        path: "class",
        type: "input",
        params: ' style="width:150px" ',
    },
    {
        path: "name",
        type: "input",
        params: ' style="width:100px" ',
    },
    {
        path: "color",
        type: "color",
    },
    {
        path: "opacity",
        type: "range",
        params: ' min=0 max=1 step=0.01 ',
    },
    {
        path: "rotation",
        type: "number",
        params: ' step=1.5707963 style="width:100px" ',
    },
    {
        path: "size.x",
        type: "number",
        params: ' style="width:100px" ',
    },
    {
        path: "size.y",
        type: "number",
        params: ' style="width:100px" ',
    },
    {
        path: "size.z",
        type: "number",
        params: ' style="width:100px" ',
    }
];


//!Class: define your global variables here



