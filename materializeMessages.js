  $.fn.extend({
    materializeMessages : function(params){
          $(this).click(function(event) {
            var elemAttrs = {};
            $.each($(this)[0].attributes, function(index, attribute){
              elemAttrs[attribute.name] = attribute.value;
            });
            elemAttrs.messageId = 'modalMessage';
            event.preventDefault();
            event.stopPropagation();
            var Default = {
              iconType : 'info',
              iconColor : 'grey',
              iconSubcolor : 'darken-2',
              title : 'dont forget set the title',
              titleColor : 'grey',
              titleSubColor: 'darken-2',
              message : 'dont forget set the message',
              messageColor : 'grey',
              messageSubColor : 'darken-3',
              bgMessage: 'white',
              bgMessageSubcolor : '',
              bgButtonsContainer : 'white',
              bgButtonsContainerSubcolor : '',
              button1 : false,
              button2 : false,
              dismissible : true,
              variables : {},
              autoclose : false,
              secondsToClose : 3,
              modalType : 'message'
            };
            var settings = $.extend(Default, params);
              if (typeof settings.variables !== "undefined"){
               $.each(settings.variables,function(index, value){
                  settings.title = settings.title.replace('{{'+index+'}}', elemAttrs[value]);
                  settings.message = settings.message.replace('{{'+index+'}}', elemAttrs[value]);
               });
              }
             
                if(settings.modalType === 'message'){
                  var modalStyle = 'msg-modal';
                }else if(settings.modalType === 'bottom'){
                  var modalStyle = 'bottom-sheet';
                }else{
                  var modalStyle = 'msg-modal';
                }
              
            var wraperMessage ='<div id="modalMessage" class="modal '+modalStyle+' '+settings.bgMessage+' '+settings.bgMessageSubcolor+' "><div class="modal-content"><h5 class="'+settings.titleColor+'-text text-'+settings.titleSubColor+'"><li class=" medium material-icons '+settings.iconColor+'-text text-'+settings.iconSubcolor+'">'+settings.iconType+'</li> '+settings.title+'</h5><p class="'+settings.messageColor+'-text text-'+settings.messageSubColor+'" id="messageContent">'+settings.message+'</p></div>';
            var buttonsContainer = '<div class="divider"></div><div class="modal-footer '+settings.bgButtonsContainer+' '+settings.bgButtonsContainerSubcolor+'" id="buttonsMessage"></div>';
            if(settings.button1 === true || settings.button2 === true){
              wraperMessage += buttonsContainer;
            }
            $('body').append(wraperMessage);
            if(settings.button2 === true){
              var button2 = '<a href="javascript:;" class="btn-flat center-align waves-effect waves-light buttonMessage2 '+settings.button2Content.textColor+'-text">'+settings.button2Content.text+'</a>';
              $('#buttonsMessage').append(button2);
              if(settings.button2Content.action !== undefined ){
                if(settings.button2Content.action === 'closeMessage'){
                  $("#buttonsMessage").on('click','a.buttonMessage2', function() {
                  $('#modalMessage').closeModal();
                  $('#modalMessage').remove();
                });
                }else{
                  $("#buttonsMessage").on('click','a.buttonMessage2', function() {
                  settings.button2Content.action(elemAttrs);
                });
                }
              }
            }
            if(settings.button1 === true){
              var button1 = '<a href="javascript:;" class="btn-flat center-align waves-effect waves-light buttonMessage1 '+settings.button1Content.textColor+'-text">'+settings.button1Content.text+'</a>';
              $('#buttonsMessage').append(button1);
              if(settings.button1Content.action !== undefined ){
                if(settings.button1Content.action === 'closeMessage'){
                  $("#buttonsMessage").on('click','a.buttonMessage1', function() {
                  $('#modalMessage').closeModal();
                  $('#modalMessage').remove();
                });
                }else{
                  $("#buttonsMessage").on('click','a.buttonMessage1', function() {
                  settings.button1Content.action(elemAttrs);
                });
                }
              }
            }
            $('#modalMessage').openModal({
              dismissible : settings.dismissible,
              ready : function(){
                if(settings.autoclose === true){
                  window.setTimeout(function(){
                    $('#modalMessage').closeModal();
                    $('#modalMessage').remove();
                  },settings.secondsToClose * 1000)
                }
              },
              complete : function(){$('#modalMessage').remove();}
            });
          });
    }
  });