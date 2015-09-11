// Menu mouse over animation

$(document).ready(function(){
	// generate menu
  var menuItem = '<li><a href="projects.html"><div id="m-projects"><span>Projects</span></div></a></li><li><a href="index.html"><div id="m-index"><span>Hi!</span></div></a></li> ';
  $("#menu ul").append(menuItem);
	var sPath=window.location.pathname;
	var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
	console.log(sPage);
	switch (sPage)
		{
			case 'index.html':
 				$('#m-index').addClass('onselect')
  				break;
			case 'projects.html':
 				$('#m-projects').addClass('onselect')
  				break;
			default:
  				console.log("non-selected");
		}
  //generate footer
  var footer = "<footer><span class='ft-message'>pinxia's website; all rights reserved <a href='website.html'>more about this site</a></span><span class='ft-contact'>contact<a href='http://www.linkedin.com/pub/pinxia-ye/17/a7a/502'>LinkedIn</a><a href='mailto: yepinxia@gmail.com'>yepinxia@gmail.com</a></span></footer>";
  $('body').append(footer);
  
  //scroll to the top
  $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        }); 
 
        $('.back-to-top').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);

        });
 
})

