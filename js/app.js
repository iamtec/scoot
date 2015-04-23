$(document).foundation();
$(function() {

		var total = 200, px = true, fn = 'velocity', step = 20, test, ar = {},
			d = document, w = window, x, y, s, ww, wh, ww2, wh2, ww22, wh22, a = {}, b, dots = [], dot, d, m = Math, mr = function(n){return m.random()*(n||1)};
		
		function init() {
			$('#dots').empty();
			dots.length = 0;
			for (var i=0; i < total; i++) dots.push($('<i/>').css(ar));
			$('#dots').html(dots);
			for (i in dots) update(i);
		}

		function update(n) {
			if (dots[n]) {
				s = mr(16)+4;
				o = mr(.8)+.2;
				a = {
					left:mr(ww22)-ww2,
					top:mr(wh22)-wh2,
					width:s,
					height:s,
					opacity:o
				};
				d = mr(2000)+2000;
				(fn=='animate')?dots[n].animate(a,d,'linear',function(){reset(n)}):dots[n].velocity(a,d,'linear',function(){reset(n)});
			}
		}
		function reset(n) {
			if (dots[n]) {
				dots[n].stop().css(ar);
				update(n);
			}
		} 
		
		function winsize() {
			ww = $(w).width();
			wh = $(w).height();
			ww22 = ww*2;
			wh22 = wh*2;
			ww2 = ww/2;
			wh2 = wh/2;
			ar = {top:wh2+'px',left:ww2+'px',opacity:0,width:0,height:0};
		}
		function log(e){try{console.log(e)}catch(e){}}
		
		$(w).on('resize',function(){
			winsize();
		});
		
		$(function(){
			
			$('#animate,#velocity').on('click',function(){
				$('button').removeClass('active');
				fn = $(this).addClass('active').attr('rel');
				document.title = $(this).attr('rel');
				return false;
			});
			$('#total').on('change',function(){
				total = $(this).val();
				init();
			});
		
			b = $('body');
			
			$(w).on('load',function(){
				winsize();
				init();
			});

		});


	});