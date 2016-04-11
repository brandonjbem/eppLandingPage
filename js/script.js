$(document).ready(function() {
	var i = 266;
	var pixelate = setInterval(function() {
		i--
		$('#index'+i).css('opacity', '1');
		$('#index'+i).css('transform', 'scale(6.0)').delay(800).queue(function() {
			$(this).css('transform', 'scale(1.0)');
		});

	}, 12);

	var set = setTimeout(function() {
		var i = 266;
		var scale = setInterval(function() {
			i--
			$('#index'+i).css('transform', 'scale(1.2)');
		}, 12);
	}, 3800);

	var flashOut = setTimeout(function() {
		var i = 0;
	var pixelate = setInterval(function() {
		i++
		$('#index'+i).css('opacity', '0');
		

	}, 20);
	}, 8200);

	var flashIn = setTimeout(function() {
		$('#hires').css('opacity', '1');
	}, 8250);
});

/** REVERSED!! 
$(document).ready(function() {
	var i = 0;
	var pixelate = setInterval(function() {
		i++
		$('#index'+i).css('opacity', '1');
		$('#index'+i).css('transform', 'scale(2.0').delay(1000).queue(function() {
			$(this).css('transform', 'scale(1.0)');
		});

	}, 20);
}); **/