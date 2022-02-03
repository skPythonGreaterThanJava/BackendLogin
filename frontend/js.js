$("register").click(function() {
    var request = $.ajax({
        url: "localhost:3000/page",
        method: "POST",
        data: { username : $("username").val(), 
                password : $("password").val() },
        dataType: "json"
    });

    request.done(function(msg) {
        $("log").val("Messaggio verde");
    });

    request.fail(function(msg) {
        $("log").val("Messaggio rosso");
    });
});

$("login").click(function() {
    var request = $.ajax({
        url: "localhost:3000/page",
        method: "PUT",
        data: { username : $("username").val(), 
                password : $("password").val() },
        dataType: "json"
    });

    request.done(function(msg) {
        $("log").val("Messaggio verde");
    });

    request.fail(function(msg) {
        $("log").val("Messaggio rosso");
    });
});