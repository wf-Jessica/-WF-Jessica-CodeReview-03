

for (i = 0; i < data.length; i++) {

	var div2= document.createElement("div");
	div2.setAttribute("id","div2");

	var bild= document.createElement("img");
	bild.src=data[i].img;
	bild.setAttribute("id","img");
	div2.appendChild(bild);

	var n=document.createElement("h1");
	div2.appendChild(n);
	var head= document.createTextNode(`${data[i].MovieName}`);
		n.appendChild(head);
	n.setAttribute("id","heading");

	var para=document.createElement("p");
	div2.appendChild(para);
	var dis= document.createTextNode(`${data[i].discription} `);
		para.appendChild(dis);
	para.setAttribute("id","txt");

	var stars=document.createElement("p");
	div2.appendChild(stars);
	var node= document.createTextNode(`${data[i].stars}`);
		stars.appendChild(node);
	stars.setAttribute("id","st");

	 var btn=document.createElement("button");
	 var nodebtn= document.createTextNode("Like 👍");
		btn.appendChild(nodebtn);
	 div2.appendChild(btn);
	 btn.setAttribute("class","btn");
	 btn.setAttribute("id",data[i].id);

	var divcont= document.getElementById("main");
	divcont.appendChild(div2);
}

 var button = document.getElementById("btn1"),
  	count = 0;
	button.onclick = function() {
  	count += 1;
  	button.innerHTML = "Like 👍 " +count;
};
var button1 = document.getElementById("btn2"),
  	count1 = 0;
	button1.onclick = function() {
  	count1 += 1;
  	button1.innerHTML = "Like 👍 " + count1;
};
var button2 = document.getElementById("btn3"),
  	count2 = 0;
	button2.onclick = function() {
  	count2 += 1;
  	button2.innerHTML = "Like 👍 " + count2;

};
var button3 = document.getElementById("btn4"),
  	count3 = 0;
	button3.onclick = function() {
  	count3 += 1;
  	button3.innerHTML = "Like 👍 " + count3;}

var button4 = document.getElementById("btn5"),
  	count4 = 0;
	button4.onclick = function() {
  	count4 += 1;
  	button4.innerHTML = "Like 👍 " + count4;
  }
var button5 = document.getElementById("btn6"),
  	count5 = 0;
	button5.onclick = function() {
  	count5 += 1;
  	button5.innerHTML = "Like " + count5;
  }






	
