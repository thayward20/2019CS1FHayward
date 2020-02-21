
$('.box').click(
    function(){
        console.log("box clicked");
        var imageName = $(".teamImage",this).text();
        console.log(imageName);
        $('#teamImage').attr("src",imageName);
        $('#teamInfowrapper').fadeIn();
    }
);

$('#exit').click(
    function(){
        $('[stadium]').fadeOut();
    }
);

var curb = new Audio('Curb.mp3')

$('#box11').click(
    function(){
    curb.play()
    }
);






