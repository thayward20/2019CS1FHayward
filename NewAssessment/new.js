$('.box').click(
    function(){
        var myColor = $(this).css('background-color');
        $('display').css('background-color', myColor)
    }

)

$('.color3, .color4').click(
    function(){
        $('#display').css('color',$(this).css('color'));
        
    }
)



$("#box1").click(function(){
    $("#bar").css("background-color", "orange");
    $("#bar").text("1")
    $("#box6").text(Math.floor(Math.random()*100)+1)
}
  );

  $("#box2").click(function(){
    $("#bar").css("background-color", "blue");
  $("#bar").text("2")
}
  );

  $("#box3").click(function(){
    $("#bar").css("background-color", "maroon");
  $("#bar").text("3")
}
  );

  $("#box4").click(function(){
    $("#bar").css("background-color", "maroon");
  $("#bar").text("4")

}
  );

  $("#box5").click(function(){
    $("#bar").css("background-color", "blue");
   $("#bar").text("5")
}
  );

   $("#box6").click(function(){
    $("#bar").css("background-color", "orange");
  }
  );