var soy = 0;
var honey = 0;
var oil = 0;
var zest = 0;
var juice = 0;
var ginger = 0;
var sriracha = 0;
var salt = 0;
var blender = 0;
var chicken = 0;
var count = 0;
var finished = 0;
var audio = new Audio('sizzle.mp3');
var audio2 = new Audio('blender.mp3');

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
function moveSoy()
{
    document.getElementById("soysauce").style.visibility = "hidden";
    document.getElementById("steps").innerHTML = "2. add the honey into the blender";
    soy = 1;
}
function moveHoney()
{
    if(soy == 1)
    {
       document.getElementById("honey").style.visibility = "hidden";
       document.getElementById("steps").innerHTML = "3. add the oil into the blender";
       honey = 1 
    }
    else
    {
        alert("Oops! Looks like you selected the wrong ingredient.");
    }
}
function moveJuice()
{
    if(zest == 1)
    {
       document.getElementById("juice").style.visibility = "hidden";
       document.getElementById("steps").innerHTML = "6. add the ginger into the blender";
       juice = 1 
    }
    else
    {
        alert("Oops! Looks like you selected the wrong ingredient.");
    }
}
function moveOil()
{
   if(honey == 1)
    {
       document.getElementById("oil").style.visibility = "hidden";
       document.getElementById("steps").innerHTML = "4. add the lime zest into the blender";
       oil = 1 
    }
    else
    {
        alert("Oops! Looks like you selected the wrong ingredient.");
    } 
}
function moveZest()
{
    if(oil == 1)
    {
       document.getElementById("zest").style.visibility = "hidden";
       document.getElementById("steps").innerHTML = "5. add the lime juice into the blender";
       zest = 1 
    }
    else
    {
        alert("Oops! Looks like you selected the wrong ingredient.");
    } 
}
function moveGinger()
{
   if(juice == 1)
    {
       document.getElementById("ginger").style.visibility = "hidden";
       document.getElementById("steps").innerHTML = "7. add the sriracha into the blender";
       ginger = 1 
    }
    else
    {
        alert("Oops! Looks like you selected the wrong ingredient.");
    }  
}
function moveSriracha()
{
    if(ginger == 1)
    {
       document.getElementById("sriracha").style.visibility = "hidden";
       document.getElementById("steps").innerHTML = "8. add the salt into the blender";
       sriracha = 1 
    }
    else
    {
        alert("Oops! Looks like you selected the wrong ingredient.");
    } 
}
function moveSalt()
{
   if(sriracha == 1)
    {
       document.getElementById("salt").style.visibility = "hidden";
       document.getElementById("steps").innerHTML = "9. start the blender";
       salt = 1; 
    }
    else
    {
        alert("Oops! Looks like you selected the wrong ingredient.");
    } 
}
function startBlender()
{
   if(salt == 1)
    {
       document.getElementById("salt").style.visibility = "hidden";
       document.getElementById("steps").innerHTML = "9. Please wait for the blender to finish";
       audio2.play();
       var image = document.getElementById("blender");
      image.src = "Blender mixed_burned.png";
      image.style.width = "80px";
      image.style.top = "400px";
       setTimeout(function()
       {
         alert("Blender has finished!");
         salt = 0;
         blender = 1;
         document.getElementById("steps").innerHTML = "10. mix the chicken in with the blended marinade";
       },15000);
    }
    else
    {
        alert("Oops! Looks like you selected the wrong ingredient.");
    }  
}
function moveChicken()
{
    if(blender == 1)
    {
       document.getElementById("chicken").style.visibility = "hidden";
       document.getElementById("bag").style.visibility = "visible";
       document.getElementById("steps").innerHTML = "11. skewer the marinated chicken";
       chicken = 1; 
    }
    else
    {
        alert("Oops! Looks like you selected the wrong ingredient.");
    } 
}
function moveKebab()
{
   if(chicken == 1)
    {
       document.getElementById("kebab").style.visibility = "hidden";
       document.getElementById("bag").style.visibility = "visible";
       document.getElementById("chickenkebab1").style.visibility = "visible";
       document.getElementById("chickenkebab2").style.visibility = "visible";
       document.getElementById("chickenkebab3").style.visibility = "visible";
       audio.play();
       document.getElementById("steps").innerHTML = "12. let the kebabs grill";
       setTimeout(function()
       {
           audio.play();
           setTimeout(function()
           {
              alert("The kebabs have finished grilling");
              document.getElementById("steps").innerHTML = "13. Remove the kebabs from the grill";
              finished = 1;
           },4000);
       },6000);
       chicken = 1;
    }
    else
    {
        alert("Oops! Looks like you selected the wrong ingredient.");
    } 
}
function removekebab(s)
{
    if(finished == 1)
    {
        document.getElementById("chickenkebab"+s).style.visibility = "hidden";
        count++;
        if(count == 3)
        {
            document.getElementById("finishedskewer").style.visibility = "visible";
            alert("Congratulations! you have made chicken sriracha skewers!");
            document.getElementById("steps").innerHTML = "Congratulations! press any button to exit";
        }
    }
    else
    {
        alert("Don't remove the kebabs yet!");
    }
}