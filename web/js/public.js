$('.s-end').click(function () {
    var message = $('.text-problems-or-recommendations-you-want-us-to-know').val();
    if(!message) return false;

    var date = new Date();
    var date_str = date.getHours() + ':' + date.getMinutes() + ' ' + (date.getMonth()+1) + '/' + date.getDate();
    var message_obj = { datetime: date_str , content: message};

    var messages_str = window.localStorage.getItem('messages');
    if(!messages_str){
        var messages_obj = [];
    }
    else{
        var messages_obj = JSON.parse(messages_str);
    }
    messages_obj.push(message_obj);

    var new_messages_str = JSON.stringify(messages_obj);
    window.localStorage.setItem('messages',new_messages_str);

    $('.text-problems-or-recommendations-you-want-us-to-know').val('');

});

$('.group3').click(function () {
    $('.nav-droplist').fadeToggle();
})
