import {mazePathFinder} from "./mazeSolver.js";
/*
Using innerHTML on a node:

var node = document.getElementById('node-id');
node.innerHTML('<p>some dynamic html</p>');
Using DOM methods:

var node = document.getElementById('node-id');
var newNode = document.createElement('p');
newNode.appendChild(document.createTextNode('some dynamic html'));
node.appendChild(newNode);
 */

const pathElement = document.getElementById('pathTag');
const outDivMaze = document.getElementById('outDivMaze');
const outSvg = document.getElementById('outSvg');

const displaying = (arr) => {
       // Start of function
        let counter = 0;
       for (let i = 0; i < arr.length; i++){

              for (let j = 0; j < arr[0].length; j++){
                    counter += 1;
                     let x = document.createElement(`div`);
                     if (arr[i][j] === 0) {

                         outDivMaze.appendChild(x)
                         x.innerText = `${counter}`;
                         x.style.width = "30px";
                         x.style.height = "30px";
                         x.style.display = "inline-block"
                         x.style.backgroundColor = 'white';
                         x.style.marginTop = '0';
                         x.style.boxSizing = 'border-box'
                         x.style.padding = '5px'
                         x.style.color = 'white'
                     }else if(arr[i][j] === 1){

                         outDivMaze.appendChild(x)
                         x.innerText = `${counter}`;

                         x.style.width = "30px";
                         x.style.height = "30px";
                         x.style.display = "inline-block"
                         x.style.backgroundColor = 'black';
                         x.style.marginTop = '0';
                         x.style.boxSizing = 'border-box'
                         x.style.padding = '5px'
                         x.style.color = 'black'

                     }else{
                            outDivMaze.appendChild(x)

                         x.innerText = `${counter}`;
                         x.style.width = "30px";
                            x.style.height = "30px";
                            x.style.display = "inline-block"
                            x.style.backgroundColor = 'red';
                            x.style.marginTop = '0';
                         x.style.boxSizing = 'border-box'
                         x.style.padding = '5px'
                         x.style.color = 'red'

                     }
              }
       }

//  End of function
}



function addingPath(arr2dpath,start) {

    let path = arr2dpath;

    let attri = document.createAttribute('d');
    attri.value = `M ${(start[1] * 30) + 10} ${(start[0] * 30) + 15}`;


        pathElement.setAttribute('stroke','red');

        pathElement.setAttribute('fill','none');

        pathElement.setAttribute('stroke-width',"1");



    path.forEach(vertex => {

        let [x,y] = vertex.point;
        attri.value += ` L ${(y * 30) + 10} ${(x * 30) + 15}`

    })

    pathElement.setAttributeNode(attri);

    // d =M 10 10 L 50 50 => az roo points 10,10 40 ta mir ro points 50;
    //L ${(start[1] * 25) + 10} ${start[0] * 30}




}




export {displaying,addingPath};