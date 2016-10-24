var aname = false;
var apass = false;
var userp = false;

$(document).ready(function()
{
    $('#adminTextfields').fadeOut(0)
    $('#userTextfields').fadeOut(0)
    $('#back').fadeOut(0)
    var check = confirm("Are you the page administrator? if not, please click cancel now.");
    if(check == false)
    {
        window.location = "MainPage.html";
    }
    
    $('#admin').click(function()
    {
        $('#useredit').fadeOut('slow')
        $('#adminedit').fadeOut('slow')
        $('#adminTextfields').fadeIn(1500)
        $('#back').fadeIn(1500)
    });
    $('#admin2').click(function()
    {
        $('#useredit').fadeOut('slow')
        $('#adminedit').fadeOut('slow')
        $('#adminTextfields').fadeIn(1500)
        $('#back').fadeIn(1500)
    });
    $('#auser').click(function()
    {
        document.getElementById('up').innerHTML = "Add User";
        userp = true;
        $('#useredit').fadeOut('slow')
        $('#adminedit').fadeOut('slow')
        $('#userTextfields').fadeIn(1500)
        $('#back').fadeIn(1500)
    });
    $('#duser').click(function()
    {
        document.getElementById('up').innerHTML = "Delete User";
        document.getElementById('uupass').disabled = true;
        $('#useredit').fadeOut('slow')
        $('#adminedit').fadeOut('slow')
        $('#userTextfields').fadeIn(1500)
        $('#back').fadeIn(1500)
    });
    $('#vuser').click(function()
    {
        $('#useredit').fadeOut('slow')
        $('#adminedit').fadeOut('slow')
        $('#userTextfields').fadeIn(1500)
        $('#back').fadeIn(1500)
    });
});

function logout()
{
    window.location = "MainPage.html";
}
function setAName()
{
    document.getElementById("aupass").disabled = true;
    aname = true;
    
}
function setAPass()
{
    document.getElementById("auname").disabled = true;
    apass = true;
}
function goBack() //resets all possible changes that occurred
{
    $('#useredit').fadeIn('slow')
    $('#adminedit').fadeIn('slow')
    $('#adminTextfields').fadeOut(1000)
    $('#userTextfields').fadeOut(1000)
    $('#back').fadeOut(1000)
    document.getElementById("auname").disabled = false;
    document.getElementById("aupass").disabled = false;
    document.getElementById('uupass').disabled = false;
    apass = false;
    aname = false;
    userp = false;
}
function submitNewAdmin()
{
    var s1 = document.getElementById('auname').value;
    var s2 = document.getElementById('aupass').value;
    if(apass)
    {
        var check = confirm("\nThe new Password is: " + s2 + "\n If this is correct, click ok");
        if(check)
        {
        
        }
    }
    if(aname)
    {
       var check = confirm("The new Username is: " + s1 + "\n If this is correct, click ok");
        if(check)
        {
        
        } 
    }
    
}
function submitUser()
{
    if(userp) //if they were adding a new user
    {
       var s3 = document.getElementById('uuname').value;
       var s4 = document.getElementById('uupass').value;
       var check2 = confirm("New Username: " + s3 + "\nNew Password: " + s4 + "\nIf this is correct, click ok");
       if(check2)
       {
           
       }
    }
    else //they are deleting a user
    {
        var s5 = document.getElementById('uuname').value;
        var check3 = confirm(s5 + " will be deleted, are you sure?");
        if(check3)
        {
            
        }
    }
}