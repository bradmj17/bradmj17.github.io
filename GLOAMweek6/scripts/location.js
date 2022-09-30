var map = $("#div_map").am_map( { } );
$("#div_map").am_map( 'addLayer', { 'name' : 'layer1', 'points' : [12.55, 2.45, { 'code' : 1, 'name' : 'Title', 'desc' :'Description' }], 'url' : 'https://www.jqueryscript.net' });
$("#div_map").am_map( 'addLayer', { 'name' : 'layer2', 'points' : [ 42.55, 3.45 ], 'icon' : '<i class="fa fa-stop-circle-o" style="color:#8b0000;"></i>' });


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

try {
    fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
      return true;
    }).catch(function(e) {
      var carbonScript = document.createElement("script");
      carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
      carbonScript.id = "_carbonads_js";
      document.getElementById("carbon-block").appendChild(carbonScript);
    });
  } catch (error) {
    console.log(error);
  }