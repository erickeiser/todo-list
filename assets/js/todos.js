// Check off specific todo by Clicking 
$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
});

// click X to delete todo
$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13) {
    // grab innerText from input box
    let todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
})

