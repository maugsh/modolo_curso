$(document).ready(function() {
    $("#adicionar").click(function() {
        const novoItem = $("#input").val();
        if (novoItem.length > 0){
            $("#lista").append("<li>" + novoItem + "</li>");
            $('#input').val("");
        }
        
})
$(document).on('click','li', function(){
    $(this).toggleClass('risco');   
});

})