//Go to top
$(function () {

			var scroll_timer;
			var displayed = false;
			var $message = $('#message');
			var $window = $(window);
			var top = $(document.body).children(0).position().top;

			$window.scroll(function () {
				window.clearTimeout(scroll_timer);
				scroll_timer = window.setTimeout(function () {
					if($window.scrollTop() <= top) 
					{
						displayed = false;
						$message.fadeOut(500);
					}
					else if(displayed == false) 
					{
						displayed = true;
						$message.stop(true, true).fadeIn(500).click(function () { $message.fadeOut(500); });
					}
				}, 100);
			});
			$('#top-link').click(function(e) { 
				e.preventDefault();
				$.scrollTo(0,300); 
			   });
		});
		
		
		
//Tipsy
		
$(function() {

    $('.north').tipsy({gravity: 'n'});
    
});


//Contact Form Box
  
  $(document).ready(function(){
	   $(document).ready(function(){
	  
	  $('#ignorePDF').click(function(){
		  	  var doc = new jsPDF();          
	var elementHandler = {
	  '#editor': function (element, renderer) {
		return true;
	  }
	};
	var source = window.document.getElementsByTagName("body")[0];
	doc.fromHTML( source, 15, 15, {
         'width': 180, // max width of content on PDF
         'elementHandlers': elementHandler
       }, function(bla) {   doc.save('tranphuochuy-cv.pdf');
      });

doc.output("dataurlnewwindow");
	  });

	  $("#message").click(function(){
		  
		$('html, body').animate({ scrollTop: 0 }, 'fast');
	  });
		$("a[rel='gallery']").colorbox();
		$("#contact").colorbox({width:"500", height:"580", iframe:true});
});
	  $("#message").click(function(){
		  
		$('html, body').animate({ scrollTop: 0 }, 'fast');
	  });
		$("a[rel='gallery']").colorbox();
		$("#contact").colorbox({width:"500", height:"580", iframe:true});
});