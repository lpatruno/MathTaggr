function get_about_page( index ){
	
	var url = '/about/' + String(index);
	
	$.get(url, function(data){
		
		$('#container').html(data);
		
	});
	
	// Render all LaTeX content
	if (index == 0){
		MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
	}
}

function get_tokens( keyword ){
	
	var url = '/latex/' + keyword;
	
	$.get(url, function(data){
		tokens = data['token'];
		token_string = '';
		
		for (var i=0; i<tokens.length; i++){
			token_string += tokens[i];
		}
		$('#tokens').html(token_string);
		
	});
}

$( document ).ready(function() {
	
	i = 0;
	
	$('#next').click(function(){
		i = i + 1;
		get_about_page(i);
	});
	
	$('#back').click(function(){
		if (i>0){
			i = i - 1;
			get_about_page(i);
		}
	});
	
	get_about_page(i);
	
});

