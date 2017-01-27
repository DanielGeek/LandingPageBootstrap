$(document).ready(function(){
    
    //play automatico del video al abrir el modal
    $("#myModal").on('show.bs.modal', function(e) {
        $("#myModal iframe").attr("src", 'https://www.youtube.com/embed/aNkcE_72E5M?autoplay=1&rel=0&showinfo=0');
    });
    //stop play del video al cerrar el modal
    $('#myModal').on('hidden.bs.modal', function (e) {   
                $("#myModal iframe").attr("src", 'https://www.youtube.com/embed/aNkcE_72E5M?autoplay=0&rel=0&showinfo=0');
    });
})