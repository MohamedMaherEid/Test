var set_time = function () {
	var d = new Date();
	var s = d.getSeconds();
	var time = d.toLocaleTimeString();

	    styles = {
		'color': '#000000',
		'borderColor': 'hsla(' + (s*3) +', 50%, 20%, .4)',
		'backgroundColor': '#3399FF'
	};

	$('#time_app').text(time).css(styles);
	setTimeout(set_time,1000);
};

var set_date =function () {
	
	var d = new Date();
	var month = d.getMonth()+1;
	var day = d.getDate();
	var output = d.getFullYear() + '/' +
	((''+month).length<2 ? '0' : '') + month + '/' +
	((''+day).length<2 ? '0' : '') + day;


	$('#date_app').text(output).css(styles);
	setTimeout(set_date,1000);

}


function animationClick(element, animation){
	var element = $(element);
	element.click(
		function() {
			element.addClass('animated ' + animation);
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
      	element.removeClass('animated ' + animation);
      }, 500);
  }
  );
};	


function customanimation (element, animation) {
	var element=$(element);
	element.addClass('animated ' + animation);
	window.setTimeout(function () {
		element.removeClass('animated ' + animation);
	},1000);				
}		

function repeatCustomAnimation (elementt, animation) {
	
	var element=$(elementt);
	element.addClass('animated ' + animation);
	
	window.setTimeout(function () {
		element.removeClass('animated ' + animation);
	},999);	
		
}




$(document).ready(function() {

	$('#Time_Date_btn').click(function(event) {
		
		$('.time_date_app').css('display', 'block');
		
		customanimation('#time_app','rubberBand');
		set_time();
		
		customanimation('#date_app','rubberBand');
		set_date();
		
		$('#note').text('This Is Your Computer Time And Date So BeCareful .').show(500, function() {
		 	customanimation('#note','rollIn');
		});
		

		
	});
	

	animationClick('#clculator_btn','wobble');
	animationClick('#Time_Date_btn','wobble');
	
	
	//setInterval(function(){repeatCustomAnimation('#App_running_p','pulse')},1000);	


	$('#clculator_btn').click(function(event) {
		swal("Here's a message!");

	});



	var click_times = 0;
	$('#menu_up_down_btn').on('click', function(event) {


		if(click_times==0){

			click_times =1;

			$('.menu').slideUp("slow");

			$(this).css('background-image', 'url("http://enjoycss.com/bg-img/custom/5934-uaflm6.png")');

			$(this).hover(function() {
				$(this).css('background-image', 'url("http://enjoycss.com/bg-img/custom/5934-4r6m7l.png")');
			}, function() {
				$(this).css('background-image', 'url("http://enjoycss.com/bg-img/custom/5934-uaflm6.png")');
			});
		}
		else{
			click_times = 0;

			$('.menu').slideDown("slow");

			$(this).css('background-image', 'url("http://enjoycss.com/bg-img/custom/5934-1tmxlh4.png")');	
			$(this).hover(function() {
				$(this).css('background-image', 'url("http://enjoycss.com/bg-img/custom/5934-ar6nlj.png")');
			}, function() {
				$(this).css('background-image', 'url("http://enjoycss.com/bg-img/custom/5934-1tmxlh4.png")');
			});
		}


	});

	


});


