<html>
    <head>
        <title>Login</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel='stylesheet' type='text/css' href='LoginPage.css'>
        <script language="Javascript" type='text/javascript' src='Page2.js'></script>
        <h1>Login</h1>
    </head>
    <body>
        <div id="div1">
            <table id="table">
                <tr>
                    <td id="td1" class="menu" onmouseover="changeColor('1')" onmouseout="revertColor('1')" onclick="goHome()">
                        <p id="p1" >Home</p>
                    </td>
                    <td id="td2" class="menu" onmouseover="changeColor('2')" onmouseout="revertColor('2')" onclick="goPageTwo()">
                        <p id="p2">Table</p>
                    </td>
                    <td id="td3" class="menu" onmouseover="changeColor('3')" onmouseout="revertColor('3')" onclick="goLogin()">
                        <p id="p3">Login</p>
                    </td>
                    <td id="td4" class="menu" onmouseover="changeColor('4')" onmouseout="revertColor('4')" onclick="goPageThree">
                        <p id="p4">About</p>
                    </td>
                </tr>
            </table>
        </div>
        <div id="offset"></div>
        <div id="offset2"></div>
        <div id="login">
        <?php
			$name = "Brandon";
			$password = "imolderthan11";
			$inputname = $_GET["textField"];
			$inputpass = $_GET["textField2"];
			if($inputname == $name)
			{
				echo "<p>HELLO BRANDON!!!</p>";
			}
			else
			{
				echo "<p>YOU ARE NOT BRANDON!!</p>";
			}
                        
		?>
        </div>
    </body>
</html>