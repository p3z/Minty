var container = document.querySelector(".container");
var canvas = document.querySelector("canvas");
var img = document.querySelector("img");
var initBtn = document.querySelector("#init");
var modBtn = document.querySelector("#mod");

// An overarching array to hold all rows
var pixelRows = [];

var divCanvasData = {}; // Overarching object to house everything
var countCatalog = {}; // Use this to capture a count of each pixel colour
const GRID_SIZE = 64;