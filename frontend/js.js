$("register").click(function() {
    var send = {username : $("username").val(), password : $("password").val() };
    $.ajax({
        url : 'http://localhost:3000/page',
        method = 'POST', 
        contentType : 'application/json',
        dataType : 'json', 
        data : JSON.stringify(send), 
        success : function (result) {
            $("log").val("Messaggio verde");
        },
        error : function (request, msg, error) {
            $("log").val("Messaggio rosso");
        }
    });
});

$("login").click(function() {
    var send = {username : $("username").val(), password : $("password").val() };
    $.ajax({
        url : 'http://localhost:3000/page',
        method = 'PUT', 
        contentType : 'application/json',
        dataType : 'json', 
        data : JSON.stringify(send), 
        success : function (result) {
            $("log").val("Messaggio verde");
        },
        error : function (request, msg, error) {
            $("log").val("Messaggio rosso");
        }
    });
});