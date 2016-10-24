function changeColor(s)
{
    document.getElementById("td"+s).style.backgroundColor = "green";
    document.getElementById("p"+s).style.backgroundColor = "green";
    document.getElementById("p"+s).style.paddingBottom = "3px";
    
}
function revertColor(s)
{
    document.getElementById("td"+s).style.backgroundColor = "red";
    document.getElementById("p"+s).style.backgroundColor = "red";
    document.getElementById("p"+s).style.paddingBottom = "0px";
}
function goHome()
{
    window.location = "LoginPage.html";
}
function goPageTwo()
{
    window.location = "Page2.html";
}
function goPageThree()
{
    window.location = "about.html";
}
function goRecipes()
{
    window.location = "Recipes.html";
}


