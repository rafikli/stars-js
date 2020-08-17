// const http = require('http')

// const port = 3000

// const server = http.createServer(function(req,res){
//     res.write('Hello Node')
//     res.end() 
// })

// server.listen(port, function(error) {
//     if (error){
//         console.log('Error:', error)
//     } else {
//         console.log('Server listening on port: ' + port)
//     }
// })
let cursorPoint = document.querySelector(".point");

window.addEventListener('mousemove',scramble);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

var pointsCount = 3000;
var points = [];

for (var i = 0; i < pointsCount; i++){
    let x = getRndInteger(0,window.innerWidth-5);
    let y = getRndInteger(0,window.innerHeight-5);
    let z = Math.random()/1.75;
    points[i] = [x,y,z]
    var cursor = document.createElement("point");
    cursor.style.top = points[i][1] + "px";
    cursor.style.left = points[i][0] + "px";
    cursor.style.border = points[i][2] + "px solid white";
    cursor.classList.add("point");
    cursor.id = i;
    document.body.insertBefore(cursor,null);        
}


function scramble (e) {
    let moveTresh = 4;
    let moveDist = 100;
    for (var i = 0; i < pointsCount; i++){
        distX = e.pageX - points[i][0];
        distY = e.pageY - points[i][1];
        if( (Math.abs(distX) < moveTresh) && (Math.abs(distY) < moveTresh) ){  
            if (Math.sign(distX) == 1){
                points[i][0] -= moveDist / 2 * points[i][2];
            }
            else if(Math.sign(distX) == -1){
                points[i][0] += moveDist / 2 * points[i][2];
            }
            if (Math.sign(distY) == 1){
                points[i][1] -= moveDist / 2 * points[i][2];
            }
            else if(Math.sign(distY) == -1){
                points[i][1] += moveDist / 2 * points[i][2];
            }
            if (points[i][0] > window.innerWidth-5 || points[i][0] < 0 ){
                points[i][0] = points[i+1][0];
            }
            if (points[i][1] > window.innerHeight-5 || points[i][1] < 0 ){
                points[i][1] = points[i+1][1];
            }
        
            var point = document.getElementById(i);
            point.style.top = points[i][1] + "px";
            point.style.left = points[i][0] + "px";
        }
    }
}