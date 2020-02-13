
$('.box').click(
    function(){
        console.log("box clicked");
        var imageName = $(".teamImage",this).text();
        console.log(imageName);
        $('#teamImage').append(imageName);
        $('#teamImage').fadeIn();
    }
);

$('#exit').click(
    function(){
        $('[stadium]').fadeOut();
    }
);






