var cities=[];
var totalCities=7;
var recordDistance=0;
var tries=0;
var possibilities=fact(totalCities);
var time=0;
var totalTime;
var pause=false


function setup() {
	var canvas=createCanvas(400,800)
	// //frameRate(1);
	for (var i=0;i<totalCities;i++){
		x=random(width)
		y=random(height/2)
		cities[i]=new city(x,y,i);
		

		// var d=calcDistance(cities);
		// recordDistance=d;
		// bestRoute=cities.slice();

	}

}


function draw() {

	background(51);
	fill(255);
	
	stroke(255);
	strokeWeight(0.2);
	noFill();
	beginShape();
	for (var i=0;i<cities.length;i++){
		push()
		stroke("red")
		ellipse(cities[i].pos.x,cities[i].pos.y,2,2)
		pop()
		text(cities[i].id,cities[i].pos.x,cities[i].pos.y)	
		vertex(cities[i].pos.x,cities[i].pos.y)
	}
	endShape();
	


	// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// fill(255);
	// stroke("yellow")
	// for (var i=0;i<bestRoute.length;i++){                             ///////////////////////////
	// 	ellipse(bestRoute[i].x,bestRoute[i].y+ (height/2),4,4)            //////////////////////////
	// }


	// stroke("red");                                           //////////////////////////
	// strokeWeight(5);
	// noFill();

	// line(0, height/2, width, height/2);
	// /////////////////////////final down window
	// stroke("SpringGreen");                                           //////////////////////////
	// strokeWeight(1);
	// noFill();
	// beginShape();
	// for (var i=0;i<bestRoute.length;i++){
	// 	vertex(bestRoute[i].x,bestRoute[i].y+ (height/2))
	// }
	// endShape();

	// //////////////////////////////////////////////////////////////////////////////////////////////////////////




	// var i=floor(random(cities.length));
	// var j=floor(random(cities.length));

	// swap(cities,i,j);

	// var d=calcDistance(cities);
	// if(d<recordDistance){
	// 	recordDistance=d;
	// 	bestRoute=cities.slice();
	// 	console.log(recordDistance);

	// }


}

totalTime=possibilities/60;
function timeElapsed(){
	time++;
	document.getElementById("demo4").innerHTML="time elapsed:"+time+"seconds";
	document.getElementById("demo5").innerHTML="total time:"+totalTime+"seconds";

}

function swap(a,i,j){
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

function keyPressed() {
	if(key=='p'||key=='P'){
		if(pause){
			pause=false
			loop;
		}else if(!pause){
			pause=true;
			noLoop();
		}
	}

}
