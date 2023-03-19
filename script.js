
function myfunction()
{  
    var a = document.getElementById("n1").value,
        b = document.getElementById("n2").value,
        c = document.getElementById("n3").value,
        d = document.getElementById("n4").value,
        e = document.getElementById("n5").value,
        f = form1.gender.value,
        g = document.getElementsByName("course");
        var result = " ";
  
        for (var i = 0; i < g.length; i++) {
            if (g[i].checked) {
                result += g[i].value+" ";
    }
  }
    document.write("<h1>SUBMITTED FORM DETAILS:</h1>")
    document.write("<br>FirstName: ",a);
    document.writeln("<br>LastName: ",b);
    document.write("<br>E-Mail: ",c);
    document.write("<br>Mobile Number: ",d);
    document.write("<br>State: ",e);
    document.write("<br>Gender: ",f);
    
       
      document.write("<br>Language: "
                    + result);
    }
