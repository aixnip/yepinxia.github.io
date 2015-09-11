

var jqxhr = $.getJSON( "json/work.json", function(json) {
  console.log( "success" ); 
  var name = json.name;
  var tag = json.tag;
  var time =json.time;
  var slides = json.slides;
  console.log(slides);
  var html = '';
  for (var i=0; i < slides.length ; i++) {
	html += '<li id="slide-' + i + '"><div class="text">' + slides[i].text + '</div></li>';
	};
  $("#work-slides").append(html);
  $("#name").html(name);
  
  for (var i=0; i < slides.length ; i++) {
	$('#slide-' + i).css("background-image", "url(" + slides[i].image + ")"); 	$('#slide-' + i).css("background-position", "center");
	};

})

.done(function() { 
	console.log( "second success" ); 
})

.fail(function() { console.log( "error" ); })

.always(function() { console.log( "complete" ); });

jqxhr.complete(function() { console.log( "second complete" ); });

$(document).ready(function(){
	$("#work-icon-0").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide-0").offset().top
    }, 800);
	});
	$("#work-icon-1").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide-1").offset().top
    }, 800);
	});
	$("#work-icon-2").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide-2").offset().top
    }, 800);
	});
	$("#work-icon-3").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide-3").offset().top
    }, 800);
	});
});
