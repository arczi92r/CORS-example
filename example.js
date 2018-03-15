
//var url = 'https://crossorigin.me/https://medium.com/feed/@sideshowbarker';
  function onError(e) {
    alert("Podczas pobierania dokumentu wystąpił błąd prawdopodobnie JSON nie odbiera" + e.target.status + ".");
  }
  
  function onLoad(e) {
    console.log(e.target.responseXML);
    var xmlDoc = e.target.responseXML;
    var x = xmlDoc.getElementsByTagName('channel')[0];
    document.getElementById("demo").innerHTML =x;
  }

  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       alert("zadzwoniłem do JSON-a");
    }
 };
 req.onload = onLoad;
  req.onerror = onError;
  req.send(null);