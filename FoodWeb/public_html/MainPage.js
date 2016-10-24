$(document).ready(function()
{
        $('#login').fadeOut(10);
        $('#login').fadeIn(2000);
        $('body').fadeOut(10);
        $('body').fadeIn(3000);
});

var loginSuccess = 0;
var logintrial = 0;

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
    document.getElementById("p"+s).style.paddingBottom = "0";
}
function clearform()
{
    document.getElementById("textField").value = "";
    document.getElementById("textField2").value = "";
    document.getElementById('error').style.visibility = "hidden";
}
function goHome()
{   if(loginSuccess == 0)
    {
        
    }
    else
    {
        window.location = "MainPage.html";
    }
}
function goPageTwo()
{   if(loginSuccess == 0)
    {
        
    }
    else
    {
        window.location = "Page2.html";
    }
}
function goHome()
{
    if(loginSuccess == 0)
    {
        
    }
    else
    {
       window.location = "LoginPage.html"; 
    }
    
}
function checkLogin()
{
    if(document.getElementById('textField').value == "user" && document.getElementById('textField2').value == "password")
    {
        loginSuccess = 1;
        document.getElementById('error').style.visibility = "hidden";
        window.location = "LoginPage.html";
    }
    else if(document.getElementById('textField').value == "Admin" && document.getElementById('textField2').value == "brandonchelsea")
    {
        loginSuccess = 1;
        document.getElementById('error').style.visibility = "hidden";
        window.location = "AdminPage.html";
    }
    else
    {
       document.getElementById('error').style.visibility = "visible";
       logintrial++;
       if(logintrial == 3)
       {
           alert("For this test site, the username is 'user' and the password is 'password'")
       }
    }
}