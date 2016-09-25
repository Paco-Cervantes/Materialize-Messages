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
      title : 'Obteniendo atributos',
      message : 'Haz click en el botón "Get Attributes" y en la consola se mostrarán todos los atributos del objeto al que hiciste click. este objeto es devuelto a la función que determinaste del botón.',
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
              });
               $('#'+elem['messageId']).closeModal();
               $('#'+elem['messageId']).remove();
                alert('check your console');
          }
        }
      });

    /* Button example4 */
    $('#example4').materializeMessages({
      dismissible : false,
        iconType : 'check_circle',
        iconColor : 'yellow',
        iconSubcolor : 'darken-2',
        title : 'Todos los Estilos',
        titleColor : 'blue',
        titleSubColor : 'darken-1',
        message : 'Se utilizan todos los parametros de estilos permitidos',
        messageColor : 'orange',
        bgMessage : 'black',
        bgButtonsContainer : 'black',
        button1 : true,
        button1Content : {
          text : 'Cerrar',
          textColor : 'white',
          action: 'closeMessage'
        },
        button2 : true,
        button2Content : {
          text : 'Launch function',
          textColor : 'red',
          action : function(){alert('do what you want')}
        }
    });
  
    /* Button example5 */
    $('#example5').materializeMessages({
        dismissible : false,
        iconType : 'warning',
        iconColor : 'red',
        iconSubcolor : 'darken-2',
        variables : {
          firstname : 'data-firstname',
          lastname : 'data-lastname'
        },
        title : 'Está seguro de borrar a "{{firstname}}"',
        titleColor : 'red',
        titleSubColor : 'darken-2',
        message : 'El usuario {{firstname}} {{lastname}} será borrado permanentemente',
        messageColor : 'red',
        messageSubColor : 'darken-4',
        button1 : true,
        button1Content : {
          text : 'Cancelar',
          action : 'closeMessage'
        },
        button2 : true,
        button2Content : {
          text : 'Borrar',
          action : function(elem){ alert ('aquí debe ir una llamada ajax para borrar al usuario '+elem['data-firstname']+' '+elem['data-lastname'] +' con el id: '+elem['data-id']);}
        }
    });
    /* Button example6 */
    $('#example6').materializeMessages({
      dismissible : false,
      iconType : 'cloud_done',
      iconColor : 'blue',
      iconSubcolor : 'darken-4',
      title : 'Proceso terminado ! ! !',
      titleColor : 'blue',
      titleSubColor : 'darken-4',
      message : 'El archivo ha sido envíado exitosamente, por favor revise su correo electrónico para más detalles.<br><b class="grey-text text-lighten-1">Puede ser necesario que busque en su bandeja de spam.</b>',
      messageColor : 'blue',
      messageSubColor : 'darken-3',
      autoclose : true,
      secondsToClose : 5,
      modalType : 'bottom',
    });
}); /*jquery ready*/
