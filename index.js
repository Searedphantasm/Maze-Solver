
import {mazePathFinder} from "./js/mazeSolver.js";
import {addingPath, displaying} from "./js/displayingMaze.js";


// const btn = document.getElementById('pushMa');


let myMaze = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,1,0,2],
    [1,1,1,1,1,0,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,1,0,0,0,1],
    [1,0,1,1,1,0,1,1,1,1,1,0,1],
    [1,0,1,0,1,0,0,0,0,0,1,0,1],
    [1,0,1,0,1,1,1,1,1,0,1,0,1],
    [0,0,1,0,0,0,0,0,1,0,1,0,1],
    [1,1,1,0,1,1,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1]
];



displaying(myMaze);
addingPath(mazePathFinder(myMaze),[9,0]);

