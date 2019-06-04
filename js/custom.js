/*********************************************
                             Services
**********************************************/

$(document).ready(function(){
	new WOW().init();
})
/*********************************************
                            Magnific popup Image
**********************************************/
$(function() {
  $('#work').magnificPopup({
     delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
      enabled: true
    },
 
  });
});