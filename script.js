var username=document.getElementById('username')
var proceedtquiz=document.getElementById('proceedtoquiz');
var quizarea=document.getElementById('quizarea');
var numberofquestions=5;
var numberofoptions=4;
var currentq=0;
var result=0;
var quizover=0;
var vel=0;
function addElement(parentId, elementTag, elementId) {
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute("id", elementId);
    p.appendChild(newElement);
}
function addclass(classadd,elementId){
	document.getElementById(elementId).classList.add(classadd);
}

function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}


function sportsquiz() {
	questionlist=[
	{
		Question:"In football, which team has won the Champions League (formerly the European Cup) the most?",
		options: ["F.C.Barcelona","Real Madrid","Liverpool","Juventus"]
	},
	{
		Question:"How many players are there in a rugby league team?",
		options: ["11","12","13","10"]
	},
	{
		Question:"This stadium is the oldest cricket ground in India, also called Lord's of Asia. India set a record for the highest Test score on this ground when they made 657-7 against Australia during the Series in 2000-01. Where was it?",
		options: ["Mumbai","Delhi","Madras","Kolkata"]
	},
	{
		Question:"In which year did India won Gold Medal for first time in Olympics in a Solo Event?",
		options: ["2008","2012","2004","2016"]
	},
	{
		Question:"Who won the first cricket World Cup in 1975? ",
		options: ["England","West Indies","Australia","India"]
	}
	];
	ans=new Array(numberofquestions);
	ans=[2,3,4,1,2];
}
function sciencequiz() {
	questionlist=[
	{
		Question:"One mole of a monatomic ideal gas undergoes an adiabatic expansion in which its volume becomes eight times its initial value. If the initial temperature of the gas is 100 K and the universal gas constant R = 8.0 Jmol-1K-1,the decrease in its internal energy, in Joule, is ?",
		options: ["400","900","100","450"]
	},
	{
		Question:"Consider a hydrogen-like ionized atom with atomic number Z with a single electron. In the emission spectrum of this atom, the photon emitted in the n = 2 to n = 1 transition has energy 74.8 eV higher than the photon emitted in the n = 3 to n = 2 transition. The ionization energy of the hydrogen atom is 13.6 eV. What is the value of Z?",
		options: ["18","9","6","3"]
	},
	{
		Question:"Let P be a matrix of order 3 X 3 such that all the entries in P are from the set {-1, 0, 1}. Then, the maximum possible value of the determinant of P is _____ .",
		options: ["4","16","8","2"]
	},
	{
		Question:"Let P be a point in the first octant, whose image Q in the plane x + y = 3 (that is, the line segment PQ is perpendicular to the plane x + y = 3 and the mid-point of PQ lies in the plane x + y = 3) lies on the z-axis. Let the distance of P from the x-axis be 5. If R is the image of P in the xy-plane, then what is the length of PR ? ",
		options: ["2","4","16","8"]
	},
	{
		Question:"Who invented periodic table?",
		options: ["David Joseph","Rinky Martin","Dmitri Mendeleev"," Newton"]
	}
	];
	ans=new Array(numberofquestions);
	ans=[2,4,1,4,3];
}
function frame() {
	if (width >= 100) {
		clearInterval(id);
		Submit();
		quizOver=1;
		alert("Congratulations you scored"+result+"out of 15 !!!");
		// Showquestion(currentq);

	} else {
		width++;
		bar.innerHTML=(100-width)+" secs left";
		bar.style.width = width + '%';
	}
}

function Showquestion(){
	document.getElementById('questionview').innerHTML=(currentq+1)+'.'+questionlist[currentq].Question;
	let flag=0;
	for(let g=0;g<numberofoptions;g++){
		document.getElementById('optlab'+g).innerHTML=(questionlist[currentq].options)[g];
		if(choiceselected[currentq]===(g+1)){
			document.getElementById('opt'+g).checked=true;
			flag=1;
		}
	}
	if(flag===0){
		clear();
	}
	if(quizover===1){
		for(let g=0;g<numberofoptions;g++){
			document.getElementById('optlab'+g).innerHTML=(questionlist[currentq].options)[g];
			document.getElementById('opt'+g).disabled=true;
			if(ans[currentq]===g+1){
				document.getElementById('optlab'+g).innerHTML+='<span class="fa fa-check text-success" aria-hidden="true"></span>'
			}
		}
	}
}
function clear(){
	if(quizover===1){
		alert('You cannot select option after the quiz is over!!!');
		return;
	}
	for(let h=0;h<numberofquestions;h++){
		if(currentq===h){
			for(let k=0;k<numberofoptions;k++){
				if(document.getElementById("opt"+(k)).checked==true){
					document.getElementById("opt"+(k)).checked=false;
					choiceselected[h]=0;
					break;
				}
			}
		}
	}
}
function Saveandnext(){
	if(quizover===1){
		alert('You cannot select option after the quiz is over!!!');
		return;
	}
	for(let h=0;h<numberofquestions;h++){
		if(currentq===h){
			for(let k=0;k<numberofoptions;k++){
				if(document.getElementById("opt"+k).checked==true){
					choiceselected[h]=k+1;
					break;
				}
			}
		}
	}
	currentq++;
	if(currentq>=numberofquestions){
		alert('This is the last question. You may Submit if the Quiz is Completed.')
	}
	Showquestion();
}
function score(){
	for(let q=0;q<numberofquestions;q++){
		if(choiceselected[q]===ans[q]){
			result+=3;
		}
		else if(choiceselected[q]!=0){
			result-=1;
		}
	}
}
function Submit(){
	if(quizover==0){
		if(vel===1){
			clearInterval(id);
		}
		quizover=1;
		score();
		alert("Congratulations you scored"+result+"out of 15 !!!");
		Showquestion();
	}
	else{
		alert('Your Quiz is already over');
	}
}
function proceed(){
	var Sports=document.getElementById('Sportsradio').checked;
	var Science=document.getElementById('Scienceradio').checked;
	var timed=document.getElementById('timedquiz').checked;
	if(username.value.length===0){
		alert("Write a valid username !!!");
		return;
	}
	else{
		alert("Welcome"+ " "+username.value+"!!!\nGet ready for the quiz.\nRules:-\nFor each Correct Answer 3 marks will be awarded\nFor each wrong answer 1 mark will be deducted\nNo negative marking if question is not answered\nIt is necessary to click Save and Next Button otherwise your answer would no be selecetd.")
		if(Sports===true){
			sportsquiz();
		}
		else{
			sciencequiz();
		}
	}
	if(timed===true){
		// document.getElementById('timer').innerHTML=" ";
		vel=1;
		document.getElementById('timer').innerHTML="<div class=\"boundary\"><h4 align=\"center\"> Timer</h4><div class=\"progress\"> <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 0%\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" id=\"bar\"></div> </div><br></div>"
		bar=document.getElementById("bar");
		width=0;
		id=setInterval(frame, 1000);
	}
	quizarea.innerHTML=" ";
	addElement("quizarea","div","quizcontainercard");
	addclass("card","quizcontainercard");
	addclass("text-center","quizcontainercard");
	addElement("quizcontainercard","div","allbuttons");
	addclass("card-header","allbuttons");
	var addbuttons=document.getElementById("allbuttons");
	addbuttons.innerHTML='<div class="btn-group mr-2" role="group" aria-label="First group" id="Scroll">';
	addElement("quizcontainercard","div","questionandoptions");
	addclass("crad-body","questionandoptions");
	var qando=document.getElementById("questionandoptions");
	qando.innerHTML=' <h5 class="card-title text-center" id="questionview"></h5>';
	for (let y = 0; y < numberofoptions; y++) {
		qando.innerHTML+='<div class="form-check"><input class="form-check-input" type="radio" name="option" id="opt'+y+ '"value="opt'+y+'"><label class="form-check-label" for="op'+y+'" id="optlab'+y+'"></label></div>';
    }
    addElement("quizcontainercard","div","footer");
    addclass("container","footer");
    addElement("footer","div","morebuttons");
    addclass("row","morebuttons");
    addclass("text-center","morebuttons");
    var lastbuttons=document.getElementById("morebuttons");
    lastbuttons.innerHTML='<div class="col-sm-3"><button type="button" class="btn btn-outline-warning" id="Clearoption">Clear Option</button></div>';
    lastbuttons.innerHTML+='<div class="col-sm-1 buffer_button"></div>'
    lastbuttons.innerHTML+='<div class="col-sm-4"><button type="button" class="btn btn-outline-primary" id="Shaurin">Save and Next</button></div>';
    lastbuttons.innerHTML+='<div class="col-sm-1 buffer_button"></div>'
    lastbuttons.innerHTML+='<div class="col-sm-3"><button type="button" class="btn btn-outline-success" id="Anita">Submit</button></div>';
    var Saveandnex=document.getElementById('Shaurin');
    var Clearoption=document.getElementById('Clearoption');
    var Submi=document.getElementById('Anita');
    Saveandnex.addEventListener('click',Saveandnext);
    Clearoption.addEventListener('click',clear);
    Submi.addEventListener('click',Submit);
    choiceselected=new Array(numberofquestions);
    var scroll=document.getElementById('Scroll');
    for(let z=0;z<numberofquestions;z++){
    	addElement("Scroll","button","quest"+z);
    	var questionnum=document.getElementById('quest'+z);
    	questionnum.innerHTML=String(z+1);
    	questionnum.setAttribute('type','button');
        questionnum.setAttribute('class','btn btn-secondary');
        questionnum.addEventListener('click',()=>{currentq=z;Showquestion()});
        choiceselected[z]=0;
    }
    // currentq=0;
    // Showquestion(0);
    // var currentq=0;
    Showquestion();
}
proceedtquiz.addEventListener("click",proceed);