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

function goItalian()
{
    window.location = "ItalianRecipes.html";
}
function goIndian()
{
    window.location = "IndianRecipes.html";
}
function goMexican()
{
    window.location = "MexicanRecipes.html";
}
function goThai()
{
    window.location = "ThaiRecipes.html";
}