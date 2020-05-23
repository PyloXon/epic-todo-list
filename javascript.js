var list = document.getElementById('itms');
 var txtbx1 = document.getElementById('itemname');
 var txtbx2 = document.getElementById('removeindex');
 var txtbx3 = document.getElementById('editaft');
 var txtbx4 = document.getElementById('editbef');
var dvcount = document.getElementById("itms").childElementCount;
var delbtn = document.getElementById("dlall");


function checkbtn() {
if (Number(dvcount) === 2) {

   alert("above 2")

}
else{
	delbtn.style.display = "none";
    alert("under 2")
}
}
function changeText2() {
	
    var firstname = document.getElementById('itemname').value;
    var entry = document.createElement('li');
    if (firstname === ""){
    	createNotification("!ورودی خالی است", "danger")
   	setTimeout(deleteNotification(), 4000);

    }
    else{
    	entry.appendChild(document.createTextNode(firstname));
    list.appendChild(entry).className = "todos";
    document.getElementById("itemname").value = "";

    createNotification("! اضافه شد", "success")
   	setTimeout(deleteNotification(), 4000);

    }
    

}

var removeindex = document.getElementById("indexremove").value;
function changeText3() {
  var list = document.getElementById("itms");
  list.removeChild(list.childNodes[Number(removeindex)]);
}
function removeSpec()
{

    var query = document.getElementById('indexremove').value;  /* Value inputted by user */
    elements = document.getElementsByClassName('todos'); /* Get the li elements in the list */
    var myList = document.getElementById("itms"); /* Var to reference the list */
    var length = (document.getElementsByClassName('todos').length); /* # of li elements */
    var checker = 'false'; /* boolean-ish value to determine if value was found */
    if (query === ""){
    	createNotification("!ورودی خالی است", "danger")
   	setTimeout(deleteNotification(), 4000);
    }
    else{
    	for(var counter = 0; counter < length; counter ++)
    {
        if (elements[counter].textContent == query )
        {
             myList.removeChild(myList.children[ (counter) ]);
             // better: myList.removeChild(elements[counter]);
             createNotification("! حذف شد", "success")
   			 setTimeout(deleteNotification(), 4000);
             checker="true";
             break;
        }
    }
  if ( checker == "false") 
   {
   	createNotification("!پیدا نشد", "danger")
   	setTimeout(deleteNotification(), 4000);
       // alert("Not Found");
   }
   document.getElementById("indexremove").value = "";
    }
    
}
var allowbool = true;
var allowyesbool = true;
function deleteAllConfirmation(){
ia=0;
	if (allowbool === true)
	{

    allowbool=false;
	
    createNotification(`آیا اطمینان دارید؟ <div id="myProgress">
    	<input type='button' onclick='deleteAll()' value='بله' class="btns reds"/>
<input type='button' onclick='fadeOutEffect()' value='خیر' class="btns reds"/>
  <div id="myBar"></div>

</div>
`, "confirmation")
	startTimer();

	allowbool=true;
	allowyesbool=true;
   	setTimeout(deleteNotification(), 4000);

    resetMove();

	}
	else {

	}
	
}

function fadeOutEffect() {
	allowyesbool = false;
}
function deleteAll(){
	if (allowyesbool === true)
	{
		const myNode = document.getElementById("itms");
    myNode.innerHTML = '';
	}
	
}
function edit()
{
    var query = document.getElementById('editbef').value;  /* Value inputted by user */
    var para = document.createElement("li");
    var queryaf = document.createTextNode(document.getElementById('editaft').value);  /* Value inputted by user */
    elements = document.getElementsByClassName('todos'); /* Get the li elements in the list */
    var myList = document.getElementById("itms"); /* Var to reference the list */
    var length = (document.getElementsByClassName('todos').length); /* # of li elements */
    var checker = 'false'; /* boolean-ish value to determine if value was found */
    if (editaft === "" || editbef === "" || (editaft === "" && editbef === ""))
    {
    	createNotification("!ورودی خالی است", "danger")
   	setTimeout(deleteNotification(), 4000);
    }
    else{
    	for(var counter = 0; counter < length; counter ++)
    {
        if (elements[counter].textContent == query )
        {
        	 
        	 para.appendChild(queryaf)
        	 list.appendChild(para).className = "todos";
             myList.replaceChild(para, myList.children[ (counter) ]);
      
             checker="true";
             break;
        }
    }
  if ( checker == "false") 
   {
          	createNotification("!پیدا نشد", "danger")
   	setTimeout(deleteNotification(), 4000);
   }
   document.getElementById("editbef").value = "";
   document.getElementById("editaft").value = "";
    }
    
}
function handle(e){

 var key=e.keyCode || e.which;


  if (key==13){
      if (document.activeElement === txtbx1) {
	  changeText2();
	  } else if (document.activeElement === txtbx3 || document.activeElement === txtbx4){
	  	edit();
	  } else {
	  	removeSpec();
	  }
  }
}
let html = document.documentElement
let deg = 0
let tick = () => {
    html.style.background = `background linear-gradient(${deg++}deg, #232526, #414345)`
    requestAnimationFrame(tick)
}
requestAnimationFrame(tick)
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener('change', () => {
	// Change the theme of the website
	document.body.classList.toggle('dark');
})
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }    
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
var fosh = 0;
function createNotification(arg1, arg2) {
  fosh = fosh + 1;
  var para = document.createElement("div");
  para.innerHTML = arg1;
  document.getElementById("ms").parentElement.appendChild(para).className = "notification "+arg2+" fade-in";
  
}

function deleteNotification() {
var element = document.getElementsByClassName("notification fade-in");
  element.classList.remove("notification fade-in");
}

    window.seconds = 0;
    window.minutes = 0;
var ia = 0;
   function startTimer() {
  //       var w = 100;
		// var h = 100;
		// var foo = setInterval(function () {
		//     if(w>1000) cancelInterval(foo)
		//     w = w + 5;
		//     h = h + 5;
		//     document.getElementById('myBar').style.width = w + 'px';
		// }, 1000);
    }
function move() {

    // ia = 0;
    // var elem = document.getElementById("myBar");
    // var width = 1;
    // var id = setInterval(frame, 25);
    // function frame() {
    //   if (width >= 100) {
    //   	allowbool = true;
    //     clearInterval(id);
    //     clearInterval(ia);
    //     ia = 0;
    //   } else {
    //     width++;
    //     elem.style.width = width + "%";
    //   }
    // }

}
function resetMove(){
	clearInterval(w);
	clearInterval(foo);
	clearInterval(h);
}