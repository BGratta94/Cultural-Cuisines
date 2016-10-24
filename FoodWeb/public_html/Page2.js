var p1 = "Italy is known for making pasta. Pasta is known as carbohydrates. Pasta can provide glucose to fuel your brain and muscles and helps sustain the energy. Pasta is low in sodium and contains some nutrients such as iron. It is also cholesterol-free";
var p2 = "Avocados are used in Mexico to create some of their well-known dishes. They have lots of vitamins and minerals. Avocados also have low sugar and they have fiber. Mono- unsaturated fatty acids can be obtained from eating avocados";
var p3 = "Turmeric is a spice used in many dishes in India has many health benefits. This plant can be used as an anti-inflammatory. It contains no cholesterol and helps control the bad cholesterol levels. This root also contains many important minerals needed by the body. ";
var p4 = "Lemongrass has properties that can prevent diseases. It contains no cholesterol and also many different vitamins and minerals.  It has folic acid, which is important in cell division and DNA synthesis.";


$(document).ready(function()
{
    $('#img1').fadeOut(0);
    $('#img1').fadeIn(2500);
}
        );
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
function printInfo1(getElement)
{
    if(getElement == "info1")
    {
        document.getElementById('info1').innerHTML = p1;
        document.getElementById('info1').style.visibility = "visible";
    }
    if(getElement == "info2")
    {
        document.getElementById('info1').innerHTML = p2;
        document.getElementById('info1').visibility = visible;
    }
    if(getElement == "info3")
    {
        document.getElementById('info1').innerHTML = p3;
        document.getElementById('info1').visibility = visible;
    }
    if(getElement == "info4")
    {
        document.getElementById('info1').innerHTML = p4;
        document.getElementById('info1').visibility = visible;
    }
}





