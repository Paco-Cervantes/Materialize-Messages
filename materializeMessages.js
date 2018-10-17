	$.extend({
		materializeMessages : function(params){
			contentMaterializeMessages (false, params);
		}
	});
  
	$.fn.extend({
		materializeMessages : function(params){
			$(this).click(function(event) {
				var attrs = this.attributes;
				contentMaterializeMessages (true, params, attrs);
			});
		}
	});

	function contentMaterializeMessages (fnClickEvent, params, attrs) {
		event.preventDefault();
		event.stopPropagation();
		var elemAttrs = {};
		$.each(attrs, function(index, attribute){
		  elemAttrs[attribute.name] = attribute.value;
		});
		elemAttrs.messageId = 'modalMessage';


		
		var Default = {
		  useScrollbar : false,
		  scrollBarType: 'scrollbar-macosx',
		  fullHeight : false,
		  msgMaxWidth: 450,
		  withTitle: true,
		  iconType : 'info',
		  iconColor : 'white',
		  iconSubcolor : '',
		  title : 'No olvides configurar el título del mensaje',
		  titleColor : 'white',
		  titleSubColor: '',
		  bgTitleColor : 'blue',
		  bgTitleSubColor: 'darken-3',
		  message : 'No olvides configurar el mensaje',
		  messageColor : 'grey',
		  messageSubColor : 'darken-3',
		  bgMessage: 'white',
		  bgMessageSubcolor : '',
		  bgButtonsContainer : 'white',
		  bgButtonsContainerSubcolor : '',
		  button1 : false,
		  button1Content:{text:'button1', textColor:'grey', textSubColor:'darken-2', action:'closeMessage'},
		  button1Icon : false,
		  button1IconType: '',
		  button1IconSide: 'left',
		  button2 : false,
		  button2Content:{text:'button2', textColor:'grey', textSubColor:'darken-2', action: 'closeMessage'},
		  button2Icon : false,
		  button2IconType: '',
		  button2IconSide: 'left',
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
				if(settings.fullHeight){
					var modalStyle = 'msg-modal-fullHeight';
					var modalFixedFooter = 'modal-fixed-footer';
					var modalStyleFullHeight = 'modal-fixed--footer';
					var modalStyleBorderTopFooter = 'border-top-footer2';

				} else {
					var modalStyle = 'msg-modal';
					var modalStyleFullHeight = '';
					var modalStyleBorderTopFooter = 'border-top-footer1';
				}
			}else if(settings.modalType === 'bottom'){
			  var modalStyle = 'bottom-sheet';
			  settings.msgMaxWidth = '';
			}else{
			  var modalStyle = 'msg-modal';
			  var modalFixedFooter='';
			}
		
		var wraperMessage ='<div id="modalMessage" class="modal '+ modalFixedFooter +' ' + modalStyle+'" style="max-width: '+settings.msgMaxWidth+'px !important">';
		if(settings.withTitle)
			wraperMessage += '<div class="msg-header '+settings.bgTitleColor+' '+settings.bgTitleSubColor+'" style="padding: 10px 0 10px 24px;"><h5 class="'+settings.titleColor+'-text text-'+settings.titleSubColor+'" style="margin: 0 !important;"><li class=" medium material-icons '+settings.iconColor+'-text text-'+settings.iconSubcolor+'">'+settings.iconType+'</li> '+settings.title+'</h5></div>';
		wraperMessage += '<div class="modal-content '+ settings.scrollBarType+ ' ' +settings.bgMessage+' '+settings.bgMessageSubcolor+'"><p class="'+settings.messageColor+'-text text-'+settings.messageSubColor+'" id="messageContent">'+settings.message+'</p></div>';
		var buttonsContainer = '<div class="modal-footer '+modalStyleBorderTopFooter+' '+settings.bgButtonsContainer+' '+settings.bgButtonsContainerSubcolor+'" id="buttonsMessage"></div>';
		if(settings.button1 === true || settings.button2 === true){
		  wraperMessage += buttonsContainer;
		}
		$('body').append(wraperMessage);
		if(settings.button1Icon === true){
			button2Icon = '<i class="material-icons '+settings.button2IconSide+' ">'+settings.button2IconType+'</i>';
		}else{button2Icon='';}
		if(settings.button1Icon === true){
			button1Icon = '<i class="material-icons '+settings.button1IconSide+' ">'+settings.button1IconType+'</i>';
		}else{button1Icon='';}
		if(settings.button2 === true){
		  var button2 = '<a href="javascript:;" class="btn-flat center-align waves-effect waves-red buttonMessage2 '+settings.button2Content.textColor+'-text text-'+settings.button2Content.textSubColor+'">'+button2Icon+' '+settings.button2Content.text+'</a>';
		  $('#buttonsMessage').append(button2);
		  if(settings.button2Content.action !== undefined ){
			if(settings.button2Content.action === 'closeMessage'){
			  $("#buttonsMessage").on('click','a.buttonMessage2', function() {
			  instance.close();
			  $('#modalMessage').remove();
			  instance.destroy();
			});
			}else{
			  $("#buttonsMessage").on('click','a.buttonMessage2', function() {
			  settings.button2Content.action(elemAttrs);
			});
			}
		  }
		}
		if(settings.button1 === true){
		  var button1 = '<a href="javascript:;" class="btn-flat center-align waves-effect waves-green buttonMessage1 '+settings.button1Content.textColor+'-text text-' +settings.button1Content.textSubColor+'">'+button1Icon+' '+settings.button1Content.text+'</a>';
		  $('#buttonsMessage').append(button1);
		  if(settings.button1Content.action !== undefined ){
			if(settings.button1Content.action === 'closeMessage'){
			  $("#buttonsMessage").on('click','a.buttonMessage1', function() {
			  instance.close();
			  $('#modalMessage').remove();
			  instance.destroy();
			});
			}else{
			  $("#buttonsMessage").on('click','a.buttonMessage1', function() {
			  settings.button1Content.action(elemAttrs);
			});
			}
		  }
		}
		
		ready = function() {
			if(settings.autoclose === true){
			  window.setTimeout(function(){
				instance.close();
				$('#modalMessage').remove();
				instance.destroy();
			  },settings.secondsToClose * 1000)
			}
		};
		
		var elem = document.querySelector('#modalMessage');
		var instance = M.Modal.init(elem,{
			dismissible : settings.dismissible,
			onOpenEnd : ready,
			onCloseEnd : function(){
				$('#modalMessage').remove();
			}
		});
		if(settings.useScrollbar)jQuery('.'+settings.scrollBarType).scrollbar();
		instance.open();
	}
