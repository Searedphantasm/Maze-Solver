// const stateElement = document.getElementById('state');

/*

DFS visits the child vertices before visiting the sibling vertices; that is, it traverses the depth of any particular path before exploring its breadth. A stack (often the program's call stack via recursion) is generally used when implementing the algorithm.

 */


/*
What are offsets in C++?
The offset of something is how many units it is from the start.

Structures (also called structs) are a way to group several related variables into one place.



Dijkstra’s Algorithm:
    It is used to find the shortest path between nodes on a directed graph. We start with a source node and known edge lengths between nodes.


*/


const wall = 1;

const floor = 0;

const target = 2;

function mazePathFinder(graph) {
    const possibleMoves = [
        [0,1], // right
        [0,-1], // left
        [1,0], // up
        [-1,0] // down
    ];
    // عرض
    const mazeW = graph[0].length;
    // طول
    const mazeH = graph.length;


    const start = buildNode([9,0],graph);

    const tree = buildTreeGraph(start,graph,[start]);

    const path = findingPath(tree);

    console.log(path.map(_ => _.point));
    return path;

    function findingPath(vertex){

        const dfs = (CorrectPath, raas) => {

            if (raas.value === target) {
                CorrectPath.push(raas)
                return CorrectPath
            }

            const targetInMyChildren = raas.children.reduce(dfs, [])

            if (targetInMyChildren.length > 0) {
                targetInMyChildren.unshift(raas)
                return targetInMyChildren
            }
            return CorrectPath
        }
        // These operations are the map and filter methods rewritten as a reduce method.

        return vertex.children.reduce(dfs, [])

    }

    function buildTreeGraph(vertex,arr2d,visited){
        // vertex == راس
        const [x,y] = vertex.point;


        vertex.children = possibleMoves.map(([incR,incC]) => [x + incR , y + incC])
            .filter(([nRow,nColumn]) => {
                /*
                    Remove if out of maze,wall,already visited
                 */
                if (nRow < 0 || nRow >= mazeW || nColumn < 0 || nColumn >= mazeH || arr2d[nRow][nColumn] === wall){

                    return false;

                }

                return visited.findIndex(viss => viss.point[0] === nRow && viss.point[1] === nColumn) === -1

            }).map(_ => {

                const newVertex = buildNode(_, arr2d);

                visited.push(newVertex)

                return newVertex
            })

        vertex.children.forEach(_ => buildTreeGraph(_,arr2d,visited));
        return vertex
    }


}

function buildNode(point,graph) {
    // point ==> مختصات

    // 0 1 2
    const value = graph[point[0]][point[1]];


    return{

        point,

        value,

        children:[] // neighbour

    }

}



export {mazePathFinder};



