$(".circle").hover(function(){

    $(this).animate({

        width:"250px" 
    },500, function(){

        $(this).css("background-color","red")
    }
    );
});
