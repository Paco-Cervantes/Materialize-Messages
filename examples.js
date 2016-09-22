$( document ).ready(function() {
	/* Button example1*/
	$('#example1').materializeMessages();

    /* Button example2 */
    $('#example2').materializeMessages({
      title : 'Titulo del Mensaje',
      message : 'Contenido del Mensaje',
      dismissible : false,
      button1 : true,
      button1Content : {
      	text : 'Cerrar',
      	action : 'closeMessage',
      }
    });

    /* Button example3 */
    $('.example3').materializeMessages({
      title : 'Usando el selector de clase',
      message : 'Se lanza el mensaje con cualquier objeto con la clase .example3 y puedes obtener todos sus atributos',
      dismissible : false,
      button1 : true,
      	button1Content : {
      		text : 'Cerrar',
      		action : 'closeMessage',
      	},
      button2 : true,
      	button2Content : {
      		text : 'Get Atributes',
      		action : function(elem){
      				$.each(elem, function(index, value){
      					console.log(index+' -> '+value);
      				})
      		}
      	}
    });


});
