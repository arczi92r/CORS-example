var createCORSRequest = function(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // Most browsers.
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      // IE8 & IE9
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // CORS not supported.
      xhr = null;
    }
    return xhr;
  };
  
  //var url = 'https://crossorigin.me';
  //var url = 'https://gist.githubusercontent.com/vanstee/3698845/raw/3bcf07af63424ea8c8d3d221a023f44599336a82/cors-configuration.xml';
var url = 'https://crossorigin.me/https://medium.com/feed/@sideshowbarker';//
// var url = 'https://raw.githubusercontent.com/arczi92r/lab/master/cors2';
  var method = 'GET';
  var xhr = createCORSRequest(method, url);
  
  xhr.onload = function() {
   alert("zadzwoniłem do JSON-a")
  };
  
  xhr.onerror = function() {
    alert("JSON nie odbiera :(")
  };
  
  xhr.send();