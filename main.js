function check(){
    var varusername=document.getElementById("input_username").value;
    var n=document.getElementById("input_password").value;
    var a=document.getElementById("input_confirm_password").value;
    var p=document.getElementById("input_age").value;
    var h=document.getElementById("input_sex").value;
    var y=document.getElementById("input_address").value;
    var z=document.getElementById("input_phone_number").value;
    var b=document.getElementById("input_other_details").value;

        if(varusername==""){
        window.alert("ALERT! Enter Username")
    }
    
        else if(n==""){
        window.alert("ALERT! Enter Password")
    }
   
       else if(a==""){
        window.alert("ALERT! Confirm your password")
    }
       else if(n!=a){
        window.alert("ALERT! Your password and confirmed password doesn't match.")
    }
   
       else if(p==""){
        window.alert("ALERT! Enter Age")
    }
   
       else if(h==""){
        window.alert("ALERT! Enter Sex")
    }
   
       else if(y==""){
        window.alert("ALERT! Enter Address")
    }
    
       else if(z==""){
        window.alert("ALERT! Enter Phone Number")
    }
   
       else if(b==""){
        window.alert("ALERT! Enter Other Details")
    }
    else{
        
                document.getElementById("heading").style.display="none";
        document.getElementById("imagewelcome").style.display="inline-block";
        document.getElementById("username_").style.display="none"; 
        document.getElementById("password_").style.display="none"; 
        document.getElementById("cpassword_").style.display="none"; 
        document.getElementById("age_").style.display="none"; 
        document.getElementById("sex_").style.display="none"; 
        document.getElementById("address_").style.display="none"; 
        document.getElementById("phnu_").style.display="none"; 
        document.getElementById("odet_").style.display="none"; 
        document.getElementById("button_submit").style.display="none"; 
        document.getElementById("input_password").style.display="none"; 
        document.getElementById("input_confirm_password").style.display="none"; 
        document.getElementById("input_age").style.display="none"; 
        document.getElementById("input_sex").style.display="none"; 
        document.getElementById("input_address").style.display="none"; 
        document.getElementById("input_phone_number").style.display="none"; 
        document.getElementById("input_other_details").style.display="none";
        document.getElementById("body").style.width="1350px";
        document.getElementById("body").style.margin="30px";
        document.getElementById("label_username").style.display="inline-block";
        document.getElementById("input_username").style.fontSize="40px";
        document.getElementById("input_username").style.margin="40px";
        document.getElementById("input_username").readOnly="true";
        
    }
    }