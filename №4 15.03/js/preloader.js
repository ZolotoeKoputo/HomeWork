document.body.onload = function() {

 	setTimeout(function(){
 		var preloader = document.getElementById('page-preloader');
	 		if( !preloader.classList.containes('done') )
	 		{
	 			preloader.classList.add('done');
	 		}
 	}, 1000);
 }