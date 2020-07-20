var numSquares=6;
var colors =[];//...................Varialble declarations
var pickedColor;

var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");//............................selectors
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var btnReset=document.getElementById("reset");
var btnMode=document.querySelectorAll(".mode");

init();
 function init(){

 	setUpModeButtons();
 	setUpSquares();
 	reset();
 }

function setUpModeButtons(){
	for(var i=0;i<btnMode.length;i++)
	{
			btnMode[i].addEventListener("click",function(){
				btnMode[0].classList.remove("selected");
				btnMode[1].classList.remove("selected");
				this.classList.add("selected");	
				if(this.textContent==="Easy")
				{
					numSquares=3;
				}
				else
				{
					numSquares=6;
				}
				reset();

			});
	}



}

function reset(){
		colors=GenerateRandomColors(numSquares);//generate all new Random colors
		pickedColor=PickedColor();//for picking new random colors form array
		colorDisplay.textContent=pickedColor;//change colorDisplayto match picked color

		messageDisplay.textContent="";
		btnReset.textContent="New Colors";
		for(var i=0;i<squares.length;i++)
		{
			if(colors[i])
			{

				squares[i].style.display="block";
			
				squares[i].style.backgroundColor=colors[i];
			}
			else
			{
				squares[i].style.display="none";
			}
		}

		h1.style.backgroundColor="#6ebeff";

}


function setUpSquares()
{
		colorDisplay.textContent=pickedColor;

		btnReset.addEventListener("click",function()
		{
				reset();	
		});

		for (var i =0; i<squares.length; i++)
		 {
			squares[i].style.backgroundColor=colors[i];// add initial colors to square

			squares[i].addEventListener("click", function(){ //adding click listeners to each squares

				var clickedColor= this.style.backgroundColor; //grab color of clicked square

				if(clickedColor===pickedColor)
				{
					messageDisplay.textContent="Correct";
					btnReset.textContent="PLAY AGAIN ?"
					changeColor(clickedColor);
					h1.style.backgroundColor=pickedColor;

				}
				else
				{
					this.style.backgroundColor=" #2e3e47";
					messageDisplay.textContent="TRY again";
				}
			});
		}

}


function changeColor(color)
{
	for(var i=0;i<squares.length;i++)//loopThrough all squares
	{
		squares[i].style.backgroundColor=color;// change every color to match correct color.
	}
}
function PickedColor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];

}


function GenerateRandomColors(num)
{
	var arr=[] ;// making array
	 for(var i=0;i<num;i++)
	 {
	 	arr.push(randomColor())
	 	//getRandom colors and push into the array
	 }
	 return arr; //returning array
}

function randomColor()
{
	var r=Math.floor(Math.random()*256);//picking up red color 
	var g=Math.floor(Math.random()*256);//picking up green color 
	var b=Math.floor(Math.random()*256);//picking up blue color

	return "rgb(" + r + ", " + g + ", " + b + ")"; //bug in program accure when we use --->return "rgb(" + r + "," + g + "," + b + ")";<-- so we need to add some space after , to match rgb pattern from generated random colors

}