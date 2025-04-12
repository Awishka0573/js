var showtext = true;

$(".btn1").click(function(){

  if (showtext==true){
      $(".text1").fadeOut();
      
  } else {
      $(".text1").fadeIn();
  }
  showtext = !showtext;
})