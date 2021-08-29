var container = document.querySelector(".container");
var canvas = document.querySelector("canvas");
var img = document.querySelector("img");
var initBtn = document.querySelector("#init");
var modBtn = document.querySelector("#mod");

var form = document.querySelector("form");
var userImg = document.querySelector("#user-image");
var saveuserImg = document.querySelector("#save-user-image");

// An overarching array to hold all rows
var pixelRows = [];

var divCanvasData = {}; // Overarching object to house everything
var countCatalog = {}; // Use this to capture a count of each pixel colour

const GRID_SIZE = 64;