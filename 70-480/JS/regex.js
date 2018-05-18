
var x = document.getElementById("RageID");
//alert(x.value);
function allLetter(inputtxt)
  {
   // var inputtxt = document.getElementById("NameID");
   var letters = /^[_0-9A-Za-z]+$/;
    var liczbaIznakZaytania = /^[_0-9A-Z]+$/;
    var fiveTag = /^\?{1}\_{5}$/
     fiveTag = new RegExp("^[\\?{1}\\_{5}]+[0-9]{0,}$");
    var reg = /^http+(s){0,}$/;
    var onlyONE = new RegExp("^\\?{1}$");
   onlyONE = /^[?]{1}$/;
   var abcabcabc = /abc/;
   console.log(inputtxt.value.match(abcabcabc));
   console.log(abcabcabc.test(inputtxt.value));
   if(inputtxt.value.match(abcabcabc))
     {
      alert("match dobrze");
      return true;
     }
   else
     {
     alert("zle");
     return false;
     }

     if(inputtxt.value.test(abcabcabc))
     {
      alert("test dobrze");
      return true;
     }
  }