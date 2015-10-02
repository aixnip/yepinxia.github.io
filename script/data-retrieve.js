var filename = "json/" + pagename + ".json";

var jqxhr = $.getJSON( filename, function(json) {
  console.log( "success" ); 
  var name = json.name;
  var tag = json.tag;
  var time =json.time;
  var slides = json.slides;
  console.log(slides);
  var html = '';
  for (var i=0; i < slides.length ; i++) {
	  if (slides[i].image == ""){
		html = '<li id="slide-' + i + '"><div class="text">' + slides[i].text + '</div></li>';
		  }else{
		html = '<li id="slide-' + i + '"><div class="text">' + slides[i].text + '</div><img src=' + slides[i].image + '></li>';
		}
		if ($("#work-p-slides").length){
			$("#work-p-slides").append(html);
		}else{
			$("#p-slides").append(html);
		}
	};

	$("#name").html(name);

})

.done(function() { 
	console.log( "second success" ); 
})

.fail(function() { console.log( "error" ); })

.always(function() { console.log( "complete" ); });

jqxhr.complete(function() { console.log( "second complete" ); });
