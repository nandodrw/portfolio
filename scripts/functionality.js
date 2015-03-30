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

});