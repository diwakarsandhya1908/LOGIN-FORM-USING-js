var ans = validate();
function validate()
    {
      
      const username=document.getElementById("username");
      const password=document.getElementById("password");
      if(username =="admin" && password == "s1234")
      {
       return 1;
        
        
      }
    else{
        return 0;
      }
    }
    if(ans == 1){
      alert("login successsfully");
    }
  else
    {
      alert("login failed");
    }
