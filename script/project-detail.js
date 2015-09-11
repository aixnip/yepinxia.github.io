// get data for projects list 

var jqxhr = $.getJSON( "../json/virtualCurrency.json", function(json) {
  console.log( "success" ); 
  var name = json.name;
  var tag = json.tag;
  var time =json.time;
  var slides = json.slides;
  console.log(slides);
  var html = '';
  for (var i=0; i < slides.length ; i++) {
	html += '<li><img src="' + slides[i].image + '"><span class="text">' + projects[i].text + '</span></li>';
	};
  $("#p-slides").append(html);
  $("#name").innerHTML(name);
})

.done(function() { 
	console.log( "second success" ); 
})

.fail(function() { console.log( "error" ); })

.always(function() { console.log( "complete" ); });

jqxhr.complete(function() { console.log( "second complete" ); });

