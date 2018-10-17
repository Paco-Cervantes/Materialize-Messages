$(function() {

  /* Button example1*/
	$('#example1').materializeMessages();

    /* Button example2 */
    $('#example2').materializeMessages({
      title : 'Título del Mensaje',
      message : 'Contenido del Mensaje',
	    msgMaxWidth: '650px',
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
			  var el = document.querySelector('#modalMessage');
			  var instance = M.Modal.getInstance(el);
			   instance.close();
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
        titleColor : 'lime',
        titleSubColor : 'accent-2',
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
        variables : {
          firstname : 'data-firstname',
          lastname : 'data-lastname'
        },
        title : 'Está seguro de borrar a "{{firstname}}"',
        bgTitleColor : 'red',
        bgTitleSubColor: 'darken-4',
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
          action : function(elem){ 
            var el = document.querySelector('#modalMessage');
            var instance = M.Modal.getInstance(el);
            instance.close();
            $('#'+elem['messageId']).remove();
            alert ('aquí debe ir una llamada ajax para borrar al usuario '+elem['data-firstname']+' '+elem['data-lastname'] +' con el id: '+elem['data-id']);}
        }
    });
    /* Button example6 */
    $('#example6').materializeMessages({
      dismissible : false,
      iconType : 'cloud_done',
      title : 'Proceso terminado ! ! !',
      message : 'El archivo ha sido envíado exitosamente, por favor revise su correo electrónico para más detalles.<br><b class="grey-text text-lighten-1">Puede ser necesario que busque en su bandeja de spam.</b>',
      messageColor : 'blue',
      messageSubColor : 'darken-3',
      autoclose : true,
      secondsToClose : 5,
      modalType : 'bottom',
    });

    /* Button example7*/
var msg = '<div class="container">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et dignissim quam. Phasellus id elit ipsum. Fusce et sapien eu nibh ultrices sodales. Ut id felis in augue molestie placerat. Donec cursus lectus a rhoncus vestibulum. Maecenas non felis vel diam egestas accumsan eget et lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p><p>Cras non mattis tellus. Praesent tincidunt eleifend nisi vel sollicitudin. Duis porttitor lorem sed sem aliquam, sed euismod ex commodo. Nam blandit nisl enim, eu lobortis nibh bibendum in. Morbi dapibus mattis rutrum. Suspendisse at orci convallis, mattis lacus sit amet, pellentesque ante. Donec non malesuada velit. Nullam molestie ligula ac nisi aliquet sagittis. Pellentesque interdum nisi vel diam iaculis elementum venenatis at felis. Aenean at magna consequat, scelerisque nisi a, condimentum nunc. Donec malesuada nibh magna, euismod consequat orci congue ut.</p><p>Morbi nec orci eget turpis semper blandit eu non velit. Phasellus aliquet egestas dolor nec aliquet. Aenean laoreet nunc in erat ullamcorper pretium. Maecenas fringilla justo sed congue sagittis. Curabitur tincidunt, diam ac placerat maximus, sem ante aliquam enim, vitae tempus leo ligula vitae elit. Nulla fringilla, ante ac dictum laoreet, arcu orci imperdiet enim, eu ullamcorper risus quam ac lacus. Aliquam dapibus dictum ornare.</p><p>Ut nisl mi, venenatis in lorem nec, hendrerit pharetra augue. Sed sed erat eu diam aliquet bibendum at id metus. Donec eu vulputate felis. Vivamus blandit pretium sem, quis sodales sem fermentum non. Praesent a arcu luctus, auctor elit id, suscipit urna. Vestibulum tristique rhoncus ante, sed lobortis quam convallis at. Curabitur scelerisque tempus arcu, a malesuada turpis. Praesent quis fringilla ligula. Quisque tincidunt tempus leo, vel rutrum augue semper in.</p><p>Morbi gravida eget lacus eu finibus. Duis diam nunc, varius sit amet sem imperdiet, fringilla sagittis risus. Aenean convallis quis magna ut tristique. Donec eu ullamcorper urna. Proin euismod enim non velit sagittis, eget tristique ex gravida. Etiam vestibulum sit amet tortor a pretium. Nunc id dui tellus</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et dignissim quam. Phasellus id elit ipsum. Fusce et sapien eu nibh ultrices sodales. Ut id felis in augue molestie placerat. Donec cursus lectus a rhoncus vestibulum. Maecenas non felis vel diam egestas accumsan eget et lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p><p>Cras non mattis tellus. Praesent tincidunt eleifend nisi vel sollicitudin. Duis porttitor lorem sed sem aliquam, sed euismod ex commodo. Nam blandit nisl enim, eu lobortis nibh bibendum in. Morbi dapibus mattis rutrum. Suspendisse at orci convallis, mattis lacus sit amet, pellentesque ante. Donec non malesuada velit. Nullam molestie ligula ac nisi aliquet sagittis. Pellentesque interdum nisi vel diam iaculis elementum venenatis at felis. Aenean at magna consequat, scelerisque nisi a, condimentum nunc. Donec malesuada nibh magna, euismod consequat orci congue ut.</p><p>Morbi nec orci eget turpis semper blandit eu non velit. Phasellus aliquet egestas dolor nec aliquet. Aenean laoreet nunc in erat ullamcorper pretium. Maecenas fringilla justo sed congue sagittis. Curabitur tincidunt, diam ac placerat maximus, sem ante aliquam enim, vitae tempus leo ligula vitae elit. Nulla fringilla, ante ac dictum laoreet, arcu orci imperdiet enim, eu ullamcorper risus quam ac lacus. Aliquam dapibus dictum ornare.</p><p>Ut nisl mi, venenatis in lorem nec, hendrerit pharetra augue. Sed sed erat eu diam aliquet bibendum at id metus. Donec eu vulputate felis. Vivamus blandit pretium sem, quis sodales sem fermentum non. Praesent a arcu luctus, auctor elit id, suscipit urna. Vestibulum tristique rhoncus ante, sed lobortis quam convallis at. Curabitur scelerisque tempus arcu, a malesuada turpis. Praesent quis fringilla ligula. Quisque tincidunt tempus leo, vel rutrum augue semper in.</p><p>Morbi gravida eget lacus eu finibus. Duis diam nunc, varius sit amet sem imperdiet, fringilla sagittis risus. Aenean convallis quis magna ut tristique. Donec eu ullamcorper urna. Proin euismod enim non velit sagittis, eget tristique ex gravida. Etiam vestibulum sit amet tortor a pretium. Nunc id dui tellus</div><br><br>';

$('#example7').materializeMessages({
  useScrollbar: true,
  scrollBarType: 'scrollbar-dynamic',
  fullHeight : true,
  msgMaxWidth: '800px',
  dismissible : false,
  iconType : 'warning',
  iconColor : 'white',
  iconSubcolor : '',
  title : 'Mensaje',
  titleColor : 'white',
  titleSubColor : '',
  message : msg,
  button2 : true,
  button2Content : {
    text : 'Cancelar',
    action : 'closeMessage'
  },
  button1 : true,
  button1Content : {
    text : 'Grabar',
    action : function(elem){
      var el = document.querySelector('#modalMessage');
      var instance = M.Modal.getInstance(el);
      instance.close();
      $('#modalMessage').remove();
      instance.destroy();
    }
  }
});

    /* Button example8 */
    $('#example8').materializeMessages({
      title : 'Botones con icono',
      message : 'Ejemplo para agregar iconos a los botones',
      dismissible : false,
      iconType: 'radio_button_unchecked',
      button1 : true,
      button1Content : {
        text : 'Guardar',
        textColor: 'green',
        textSubColor: 'darlken-4',
        action : function(elem){
            alert('tus datos han sido guardados.')
            var el = document.querySelector('#modalMessage');
            var instance = M.Modal.getInstance(el);
            instance.close();
            $('#modalMessage').remove();
            instance.destroy();
          }
      },
      button1Icon: true,
      button1IconType: 'done',
      button1IconSide: 'right',
      button2: true,
      button2Content: {
        text: 'Cancelar',
        textColor: 'red',
        textSubcolor: 'darken-3',
        action: 'closeMessage'
      },
      button2Icon: true,
      button2IconType: 'close',
      button2IconSide:'left'
    });


}); /*jquery ready*/
