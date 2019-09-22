$(document).ready(function (){

    // Slider
   if (window.location.href.indexOf('index') > -1) {
	 
	  $('.galeria').bxSlider({
         mode: 'fade',
         captions: true,
         slideWidth: 1200,
         responsive: true,
         pager: true
     });

    }

	// Posts
	if (window.location.href.indexOf('index') > -1) {
	var posts = [
       {
       	    title: 'prueba de titulo 1',
       	    date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
       	    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula pellentesque fringilla. Vivamus scelerisque, dolor a mollis commodo, sapien mi aliquet ex, id mattis metus nulla eu sapien. Maecenas quis nisi non est egestas maximus sit amet non metus. Cras semper aliquet euismod. Nulla facilisis massa tristique est placerat, vehicula semper risus eleifend. Maecenas aliquet sapien id aliquam egestas. Maecenas quis sollicitudin ligula. Cras interdum diam vitae diam efficitur, eu imperdiet libero dictum. Aenean sed velit non risus aliquam eleifend. Nullam tortor enim, euismod ac cursus non, commodo eget odio. In vestibulum bibendum orci vitae malesuada. Etiam pellentesque ullamcorper nisl sed lobortis.'
       },
       {
       	    title: 'prueba de titulo 2',
       	     date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
       	    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula pellentesque fringilla. Vivamus scelerisque, dolor a mollis commodo, sapien mi aliquet ex, id mattis metus nulla eu sapien. Maecenas quis nisi non est egestas maximus sit amet non metus. Cras semper aliquet euismod. Nulla facilisis massa tristique est placerat, vehicula semper risus eleifend. Maecenas aliquet sapien id aliquam egestas. Maecenas quis sollicitudin ligula. Cras interdum diam vitae diam efficitur, eu imperdiet libero dictum. Aenean sed velit non risus aliquam eleifend. Nullam tortor enim, euismod ac cursus non, commodo eget odio. In vestibulum bibendum orci vitae malesuada. Etiam pellentesque ullamcorper nisl sed lobortis.'
       },
       {
       	    title: 'prueba de titulo 3',
       	     date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
       	    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula pellentesque fringilla. Vivamus scelerisque, dolor a mollis commodo, sapien mi aliquet ex, id mattis metus nulla eu sapien. Maecenas quis nisi non est egestas maximus sit amet non metus. Cras semper aliquet euismod. Nulla facilisis massa tristique est placerat, vehicula semper risus eleifend. Maecenas aliquet sapien id aliquam egestas. Maecenas quis sollicitudin ligula. Cras interdum diam vitae diam efficitur, eu imperdiet libero dictum. Aenean sed velit non risus aliquam eleifend. Nullam tortor enim, euismod ac cursus non, commodo eget odio. In vestibulum bibendum orci vitae malesuada. Etiam pellentesque ullamcorper nisl sed lobortis.'
       },
       {
       	    title: 'prueba de titulo 4',
       	     date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
       	    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula pellentesque fringilla. Vivamus scelerisque, dolor a mollis commodo, sapien mi aliquet ex, id mattis metus nulla eu sapien. Maecenas quis nisi non est egestas maximus sit amet non metus. Cras semper aliquet euismod. Nulla facilisis massa tristique est placerat, vehicula semper risus eleifend. Maecenas aliquet sapien id aliquam egestas. Maecenas quis sollicitudin ligula. Cras interdum diam vitae diam efficitur, eu imperdiet libero dictum. Aenean sed velit non risus aliquam eleifend. Nullam tortor enim, euismod ac cursus non, commodo eget odio. In vestibulum bibendum orci vitae malesuada. Etiam pellentesque ullamcorper nisl sed lobortis.'
       },
       {
       	    title: 'prueba de titulo 5',
       	     date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
       	    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula pellentesque fringilla. Vivamus scelerisque, dolor a mollis commodo, sapien mi aliquet ex, id mattis metus nulla eu sapien. Maecenas quis nisi non est egestas maximus sit amet non metus. Cras semper aliquet euismod. Nulla facilisis massa tristique est placerat, vehicula semper risus eleifend. Maecenas aliquet sapien id aliquam egestas. Maecenas quis sollicitudin ligula. Cras interdum diam vitae diam efficitur, eu imperdiet libero dictum. Aenean sed velit non risus aliquam eleifend. Nullam tortor enim, euismod ac cursus non, commodo eget odio. In vestibulum bibendum orci vitae malesuada. Etiam pellentesque ullamcorper nisl sed lobortis.'
       },
       {
       	    title: 'prueba de titulo 6',
       	     date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
       	    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula pellentesque fringilla. Vivamus scelerisque, dolor a mollis commodo, sapien mi aliquet ex, id mattis metus nulla eu sapien. Maecenas quis nisi non est egestas maximus sit amet non metus. Cras semper aliquet euismod. Nulla facilisis massa tristique est placerat, vehicula semper risus eleifend. Maecenas aliquet sapien id aliquam egestas. Maecenas quis sollicitudin ligula. Cras interdum diam vitae diam efficitur, eu imperdiet libero dictum. Aenean sed velit non risus aliquam eleifend. Nullam tortor enim, euismod ac cursus non, commodo eget odio. In vestibulum bibendum orci vitae malesuada. Etiam pellentesque ullamcorper nisl sed lobortis.'
       },
       
	];

    posts.forEach((item, index) => {
         var post = `
              <article class="post">
		  	   	    <h2>${item.title}</h2>
		  	   	    <span class="date">${item.date}</span>
		  	   	    <p>
		  	   	    	${item.content}
		  	   	    </p>
                    <a href="#" class="button-more">Leer Mas</a>
		  	  </article>  
         `;

         $("#posts").append(post);
    });
}


    // Selector de tema
    var theme = $("#theme");

    $("#to-green").click(function(){
         theme.attr("href", "css/green.css"); 
    });

    $("#to-red").click(function(){
         theme.attr("href", "css/red.css"); 
    });

    $("#to-blue").click(function(){
         theme.attr("href", "css/blue.css"); 
    });
    
    // Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();

      $('html, body').animate({
         scrollTop: 0
      }, 500);
       return false;
    });

    // Login falso

    $("#login form").submit(function(){
      var form_name = $("#form_name").val();

      localStorage.setItem("form_name", form_name);

    });
      
   var form_name = localStorage.getItem("form_name");

   if (form_name != null && form_name != "undefined") {
       var about_parrafo = $("#about p");

   	about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
    about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");

   	$("#login").hide();

    $("#logout").click(function(){
          localStorage.clear();
          location.reload();
    });

   }
       
       // Acordeon

	   if (window.location.href.indexOf('about') > -1) {
           $("#acordeon").accordion();
	   }

	   // Reloj

	   if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function(){
                var reloj = moment().format("hh:mm:ss");  
                $('#reloj').html(reloj);
        }, 1000);

           
	   }
          

       // Validacion
       if (window.location.href.indexOf('contact') > -1) {

       	$("form input[name='date']").datepicker({
       		dateFormat: 'dd-mm-yy'
       	});

       $.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		  });

    }

});