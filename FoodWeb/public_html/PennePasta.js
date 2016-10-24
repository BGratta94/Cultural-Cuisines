var pasta = 0;
var shallots = 0;
var vodka = 0;
var butter = 0;
var garlic = 0;
var flakes = 0;
var tomato = 0;
var timeup = false;
var timeup2 = false;
var finished = false;
var audio = new Audio('sizzle.mp3');

function changeColor(s)
{
    document.getElementById("td"+s).style.backgroundColor = "green";
    document.getElementById("p"+s).style.backgroundColor = "green";
    
}
function revertColor(s)
{
    document.getElementById("td"+s).style.backgroundColor = "red";
    document.getElementById("p"+s).style.backgroundColor = "red";
}
function goHome()
{
    window.location = "LoginPage.html";
}
function goPageTwo()
{
    window.location = "Page2.html";
}
function goRecipes()
{
    window.location = "Recipes.html";
}
function goPageThree()
{
    window.location = "about.html";
}
function logout()
{
    if(confirm("Are you sure you want to log out?") === true)
    {
        window.location = "MainPage.html";
    }
}
function select(s)
{
  document.getElementById('img'+ s).style.borderColor = "green"; 
  document.getElementById('img'+ s).style.opacity = ".6";
}
function unselect(s)
{
  document.getElementById('img'+ s).style.borderColor = "red";
  document.getElementById('img'+ s).style.opacity = "1.0";
}
function movePasta()
{
    if(pasta == 0)
    {
      document.getElementById("penne").style.visibility = "hidden";
      var image = document.getElementById("pot");
      image.src = "fullpot.png";
      image.style.width = "100px";
      image.style.top = "430px";
      pasta = 1;
      document.getElementById("steps").innerHTML  = "2. Add the butter to the skillet";
    }
    
}
function moveShallots()
{
    if(shallots == 0 && pasta == 1 && butter == 1)
    {
      document.getElementById("shallots").style.visibility = "hidden";
      var image = document.getElementById("skillet");
      image.src = "skillet-shallots_burned.png";
      image.style.width = "100px";
      image.style.top = "440px";
      shallots = 1;
      document.getElementById("steps").innerHTML  = "3. wait for 5 seconds for the shallots to cook";
      audio.play();
      setTimeout(function(){alert("Shallots have finished cooking"); timeup = true; document.getElementById("steps").innerHTML  = "4. add red pepper flakes to the skillet.";},5000);
    }
    else
    {
       alert("Oops! Looks like you clicked on the wrong ingredient");
    }
}
function moveButter()
{
    if(pasta == 1 && butter == 0)
    {
        document.getElementById("butter").style.visibility = "hidden";
      butter = 1;
      document.getElementById("steps").innerHTML  = "3. Add the shallots to the skillet";
    }
    else
    {
       alert("Oops! Looks like you clicked on the wrong ingredient");
    }
}
function moveFlakes()
{
     if(timeup == true)
    {
        document.getElementById("pepper").style.visibility = "hidden";
      flakes = 1;
      document.getElementById("steps").innerHTML  = "5. Add the garlic to the skillet";
      var image = document.getElementById("skillet");
      image.src = "skillet-shallots-flakes.png";
      image.style.width = "100px";
      image.style.top = "440px";
    }
    else
    {
       alert("Oops! Looks like you clicked on the wrong ingredient");
    }
}
function moveGarlic()
{
    if(timeup == true && flakes == 1)
    {
        document.getElementById("garlic").style.visibility = "hidden";
      garlic = 1;
      var image = document.getElementById("skillet");
      image.src = "skillet-shallots-flakes-garlic.png";
      image.style.width = "100px";
      image.style.top = "440px";
      document.getElementById("steps").innerHTML  = "5. let the garlic and flakes cook in for 5 seconds";
      audio.play();
      setTimeout(function(){alert("The garlic and flakes have finished cooking"); timeup2 = true; document.getElementById("steps").innerHTML  = "6. add in the tomatoes";},5000);
    }
    else
    {
       alert("Oops! Looks like you clicked on the wrong ingredient");
    } 
}
function moveTomato()
{
   if(garlic == 1 && flakes == 1)
    {
        document.getElementById("tomato").style.visibility = "hidden";
      tomato = 1;
      var image = document.getElementById("skillet");
      image.src = "skillet-shallots-flakes-garlic-tomato_burned.png";
      image.style.width = "100px";
      image.style.top = "440px";
      document.getElementById("steps").innerHTML  = "7. add in the vodka"; 
    }
    else
    {
       alert("Oops! Looks like you clicked on the wrong ingredient");
    } 
}
function moveVodka()
{
   if(tomato == 1)
    {
        document.getElementById("vodka").style.visibility = "hidden";
      vodka = 1;
      var image = document.getElementById("skillet");
      document.getElementById("steps").innerHTML  = "8. let the sauce cook for 5 seconds";
      audio.play();
      setTimeout(function()
      {
         image.src = "finishedsauce_burned.png";
         image.style.width = "100px";
         image.style.top = "440px";
         alert("The sauce is finished! You're almost done!");
         document.getElementById("steps").innerHTML  = "9. add the pasta to the sauce (click on the pot of pasta)";
         vodka = 1;
      },5000);
    }
    else
    {
       alert("Oops! Looks like you clicked on the wrong ingredient");
    } 
}
function emptyPot()
{
    if(vodka == 1)
    {
         image = document.getElementById("pot");
         image.src = "pot.png";
         vodka = 0;
         image.style.width = "100px";
         image.style.top = "400px";
         var image = document.getElementById("skillet");
         image.src = "skillet_empty_burned.png";
         image.style.width = "100px";
         image.style.top = "440px";
         document.getElementById("finishedpenne").style.visibility = "visible";
         alert("Congratulations! You have made Penne with vodka sauce!");
         document.getElementById("steps").innerHTML  = "Congratulations! Click any button to exit";
         finished = true;
    }
    else if(finished == true)
    {
        
    }
    else
    {
       alert("Oops! Looks like you clicked on the wrong ingredient"); 
    }
}