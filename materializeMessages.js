
  $.fn.extend({
    materializeMessages : function(params){
          $(this).click(function(event) {
            var elemAttrs = {};
            $.each($(this)[0].attributes, function(index, attribute){
              elemAttrs[attribute.name] = attribute.value;
            });
            elemAttrs['messageId'] = 'modalMessage';
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
              messageSubColor : 'lighten-2',
              bgMessage: 'white',
              bgMessageSubcolor : '',
              bgButtonsContainer : 'white',
              bgButtonsContainerSubcolor : '',
              textButtonsContainer : '',
              button1 : false,
              button2 : false,
              dismissible : true,
              titleVariables : {},
              messageVariables : {}
            }
            var settings = $.extend(Default, params);
              if (typeof settings.titleVariables != "undefined"){
               $.each(settings.titleVariables,function(index, value){
                  settings.title = settings.title.replace('{{'+index+'}}', elemAttrs[value]);
                  
               });
              }
              if (typeof settings.messageVariables != "undefined"){
               $.each(settings.messageVariables,function(index, value){
                  settings.message = settings.message.replace('{{'+index+'}}', elemAttrs[value]);
                  
               });
              }

            wraperMessage ='<div id="modalMessage" class="modal msg-modal '+settings.bgMessage+' '+settings.bgMessageSubcolor+' "><div class="modal-content"><h5 class="'+settings.titleColor+'-text text-'+settings.titleSubColor+'"><li class=" medium material-icons '+settings.iconColor+'-text text-'+settings.iconSubcolor+'">'+settings.iconType+'</li> '+settings.title+'</h5><p class="'+settings.messageColor+'-text text-'+settings.messageSubColor+'" id="messageContent">'+settings.message+'</p></div><div class="divider"></div><div class="modal-footer '+settings.bgButtonsContainer+' '+settings.bgButtonsContainerSubcolor+'" id="buttonsMessage"><div class="row center-align"><div class="col s6 m6 center-align" id="button1Container"></div><div class="col s6 m6 center-align" id="button2Container"></div></div></div>';
            $('body').append(wraperMessage);
            // button 2
            if(settings.button2 === true){
              button2 = '<a href="javascript:;" class="btn-flat center-align waves-effect waves-light buttonMessage2 '+settings.button2Content.textColor+'-text">'+settings.button2Content.text+'</a>';
              $('#button2Container').append(button2);
              if(settings.button2Content.action != undefined ){
                if(settings.button2Content.action === 'closeMessage'){
                  $("#button2Container").on('click','a.buttonMessage2', function() {
                  $('#modalMessage').closeModal();
                  $('#modalMessage').remove();
                });
                  
                }else{
                  $("#button2Container").on('click','a.buttonMessage2', function() {

                  settings.button2Content.action(elemAttrs);
                });
                }
              }
            }
            // button 1
            if(settings.button1 === true){
              button1 = '<a href="javascript:;" class="btn-flat center-align waves-effect waves-light buttonMessage1 '+settings.button1Content.textColor+'-text">'+settings.button1Content.text+'</a>';
              $('#button1Container').append(button1);
              if(settings.button1Content.action != undefined ){
                if(settings.button1Content.action === 'closeMessage'){
                  $("#button1Container").on('click','a.buttonMessage1', function() {
                  $('#modalMessage').closeModal();
                  $('#modalMessage').remove();
                });
                  
                }else{
                  $("#button1Container").on('click','a.buttonMessage1', function() {
                  settings.button1Content.action(elemAttrs);
                });
                }
              }
            }
      
            $('#modalMessage').openModal({
              dismissible : settings.dismissible,
              complete : function(){$('#modalMessage').remove()}
            });
            
          });
    }
  });


