const string = `body{
    background: red;
    color: white;
}
.onePiece{
    position: relative;
    height: 100vh;
}
.bone{
    position: absolute;
    width: 40px;
    height: 500px;
    left: 50%;
    margin-left: -20px;
}
.bone .rectangle{
    width: 40px;
    height: 500px;
    background: white;
}
.bone .circle{
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: white;
}
.bone .circle.one{
    left: -25px;
    top: -25px;
}
.bone .circle.two{
    left: 15px;
    top: -25px;
}
.bone .circle.three{
    left: -25px;
    bottom: -25px;
}
.bone .circle.four{
    left: 15px;
    bottom: -25px;
}
.bone.left{
    transform: rotate(45deg);
}
.bone.right{
    transform: rotate(-45deg);
}
.headUp{
    position: absolute;
    width: 250px;
    height: 250px;
    border: 5px solid black;
    left: 50%;
    top: 80px;
    margin-left: -125px;
    border-radius: 50%;
    background: white;
    overflow: hidden;
    z-index: 5;
}
.orangeRectangle{
    position: absolute;
    width: 350px;
    height: 30px;
    background: #FFD020;
    left: 50%;
    top: 190px;
    margin-left: -175px;
    border: 5px solid black;
    border-radius: 30px;
    z-index: 10;
}
.headUp .littleCircle{
    position: absolute;
    width: 240px;
    height: 110px;
    border-radius:150px 150px 0 0;
    overflow: hidden;
    background: #FFD020;
}
.headUp .redRectangle{
    position: absolute;
    width: 250px;
    height: 40px;
    background: red;
    top: 70px;
    left: 50%;
    margin-left: -125px;
    border: 5px solid black;
}
.headUp .eye{
    position: absolute;
    width: 60px;
    height: 60px;
    left: 50%;
    top: 140px;
    margin-left: -30px;
    background: black;
    border-radius: 50%;
}
.headUp .eye.left{
    transform: translateX(-60px);
}
.headUp .eye.right{
    transform: translateX(60px);
}
.headUp .nose{
    position: absolute;
    width: 40px;
    height: 25px;
    left: 50%;
    top: 200px;
    margin-left: -20px;
    background: black;
    border-radius: 50% / 50%;
}
.headDown{
    position: absolute;
    width: 180px;
    height: 200px;
    left: 50%;
    top: 250px;
    margin-left: -90px;
    border: 5px solid black;
    background: white;
    border-radius: 50% 50% 50% 50% / 62% 62% 38% 38%;
    overflow: hidden;
}
.headDown .border{
    width: 200px;
    height: 200px;
    border: 5px solid black;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    
}
.headDown .border.x1{
    border-radius: 100px / 50px;
    top: -90px;
}
.headDown .border.x2{
    border-radius: 100px / 50px;
    top: -60px;
    overflow: hidden;
}
.headDown .border.y{
    width: 100px;
    height: 100px;
    border: 5px solid black;
}
.headDown .border.y.one{
    bottom: 0;
    transform: rotate(10deg) translateX(-40px);
}
.headDown .border.y.two{
    bottom: -10px;
}
.headDown .border.y.three{
    bottom: -30px;
    transform: rotate(-10deg) translateX(140px);
}`

export default string