var cities=[];
var totalCities=7;
var recordDistance=0;
var tries=0;
var possibilities=fact(totalCities);
var time=0;
var totalTime;

//console.log("variables");
function setup() {
//	console.log("setup function");
createCanvas(400,800)
// var x=(windowWidth - width) / 2;
// var y=(windowHeight - height) / 2;
// cnv.position(x, y);
// //frameRate(1);
for (var i=0;i<totalCities;i++){
	v=createVector(random(width),random(height)/2);
cities[i]=v;


	var d=calcDistance(cities);
	recordDistance=d;
	bestRoute=cities.slice();

}

}


function draw() {

  background(51);
  fill(255);
	stroke("red")
  for (var i=0;i<cities.length;i++){
	ellipse(cities[i].x,cities[i].y,4,4)
  }
  stroke(255);
  strokeWeight(0.2);
  noFill();
	beginShape();
	for (var i=0;i<cities.length;i++){
	vertex(cities[i].x,cities[i].y)
	}
	endShape();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  fill(255);
	stroke("yellow")
	for (var i=0;i<bestRoute.length;i++){                             ///////////////////////////
	ellipse(bestRoute[i].x,bestRoute[i].y+ (height/2),4,4)            //////////////////////////
}


stroke("red");                                           //////////////////////////
	strokeWeight(5);
	noFill();

	  line(0, height/2, width, height/2);
	                                                               /////////////////////////final down window
	stroke("SpringGreen");                                           //////////////////////////
    strokeWeight(1);
    noFill();
	beginShape();
	for (var i=0;i<bestRoute.length;i++){
	vertex(bestRoute[i].x,bestRoute[i].y+ (height/2))
	}
	endShape();

//////////////////////////////////////////////////////////////////////////////////////////////////////////




	var i=floor(random(cities.length));
	var j=floor(random(cities.length));

	swap(cities,i,j);

	var d=calcDistance(cities);
	if(d<recordDistance){
		recordDistance=d;
		bestRoute=cities.slice();
		console.log(recordDistance);

	}


}

totalTime=possibilities/60;
function timeElapsed(){
	time++;
	document.getElementById("demo4").innerHTML="time elapsed:"+time+"seconds";
	document.getElementById("demo5").innerHTML="total time:"+totalTime+"seconds";

}


function swap(a,i,j)
{
	tries++;
	//console.log(tries);
	var percent=100*tries/possibilities;

	var temp=a[i];
	a[i]=a[j];
	a[j]=temp;


	document.getElementById("demo").innerHTML="total possibilities:"+possibilities;
	document.getElementById("demo1").innerHTML="total tried: "+tries;
	document.getElementById("demo2").innerHTML="total percentage completed"+percent;
	document.getElementById("demo3").innerHTML="best distance till now :"+recordDistance;

}
setInterval("timeElapsed()",1000);








function calcDistance(points){
	var sum=0;
	for (var i=0;i<points.length-1;i++){
		var d=dist(points[i].x,points[i].y,points[i+1].x,points[i+1].y);
		sum+=d;
		//console.log("distance"+sum);
	}
	return sum;


}


function fact(num) {
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;

    }
    return result;
}


// var par=document.createElement("p");
// var tex=document.createTextNode("hey how u doin");
// par.appendChild(tex);
// document.getElementById("head").appendChild(par);
