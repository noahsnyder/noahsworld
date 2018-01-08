<!DOCTYPE html>

<!–[if IE 8]><html class="lt-ie10 lt-ie9"> <![endif]–>

<!–[if IE 9]><html class="lt-ie10"> <![endif]–>

<!–[if gt IE 9]><!–> <html> <!–<![endif]–>


<html>


	<head>

	<link rel="stylesheet" type="text/css" href="noahsworldstyle.css">
	
	<title>

		Noah’s World

	</title>

      <link rel='icon' href='graphics/jigglypuff1.jpeg'>

 </head>

 <body>

     <script>

						import System.IO;
	 
		class user 
        {
            
            constructor(username,password,email)
            {
                
                this.username=username;
                this.password=password;
                this.email=email;
                

				var filePath = "userdata/" + username;
				
				WriteFile(filePath);
				
				function WriteFile(filepath)
				{
    var sw = StreamWriter = new StreamWriter(filepath);
    sw.WriteLine("username:" + username);
    sw.WriteLine("password:" + password);
	sw.WriteLine("email" + email);
    sw.Flush();
    sw.Close();
}
				
				
				
            }
            
        }

		var users = [];
		
		function register() 
         {
             
            users = users.pop(new user(document.getElementById('username'),document.getElementById('password'),document.getElementById('email'))); 
			
         }
         
    </script>

    <p>

     <form id='signupForm' action=''>

         

         <fieldset>

         

                 <br>

         

             Username: <input type='text' name='username' id='username'>

         

                 <br>

                 

                 <br>

         

             Password: <input type='text' name='password' id='password'>

         

                 <br>

                 

                 <br>


             Email: <input type='text' name='email' id='email'>

         

                 <br>

                 

                 <br>
                 

             <button onclick='register()' value='submit'>Create Account</button>

         

         </fieldset>

         

     </form>

    </p>

     

 </body>

</html>