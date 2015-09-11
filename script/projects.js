// get data for projects list 

var jqxhr = $.getJSON( "json/projects.json", function(json) {
  console.log( "success" ); 
  var projects = json.projects;
  console.log(projects);
  var html = '';
  for (var i=0; i < projects.length ; i++) {
	html += '<li><a href="' + projects[i].url + '"><img src="' + projects[i].image + '"><div class="p-title"><span class="p-name">' + projects[i].name + '</span><br><span class="p-tag">' + projects[i].tag + '   ' +  projects[i].time + '</span></div></a></li>';
	};
	$("#p-list").append(html);
})

.done(function() { 
	console.log( "second success" ); 
})

.fail(function() { console.log( "error" ); })

.always(function() { console.log( "complete" ); });

jqxhr.complete(function() { console.log( "second complete" ); });

//accordion
