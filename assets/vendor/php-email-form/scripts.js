$("#contact").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
 
    $.ajax({
        type: "POST",
        url: "assets\vendor\php-email-form\process.php",
        data: "name=" + name + "&email=" + email + "$submit" + submit + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}
function formSuccess(){
    $( "#mb-3" ).removeClass( "hidden" );
}