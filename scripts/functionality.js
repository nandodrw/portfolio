$(document).ready(function() {

  $('#message-submit-buttom').click(function (e) {
    e.preventDefault();
    var url = 'http://nandodrw.us10.list-manage.com/subscribe?u=708481d41f00a8738968af3ef&id=170e326f16';
    var name = $('#name-form').val();
    var email = $('#mail-form').val();
    var message = $('#text-form').val();
    window.open(url + '&MERGE1='+ name + "&MERGE0=" + email + "&MERGE2=" + message, '_blank');
    var name = $('#name-form').val("");
    var email = $('#mail-form').val("");
    var message = $('#text-form').val("");
  })

  $('.link_map').click(function (e) {
    var linkTo = $(this).attr('id');

    switch(linkTo) {
      case 'portfolio-link':
        window.location.href = '#portfolio';
        break;
      case 'skills-link':
        window.location.href = '#knowledge';
        break;
      case 'experience-link':
        window.location.href = '#experience';
        break;
      case  'contact-link':
        window.location.href = '#contact';
        break;
    }

  })

});