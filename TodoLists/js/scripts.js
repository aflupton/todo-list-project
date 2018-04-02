function todoLists(task,category) {
  this.task = task;
  this.category = category;
}

todoLists.prototype.getTask = function() {
  return this.task;
}
todoLists.prototype.Check = function() {
  if(this.category === "done") {
    return "Done &#9989";
  } else {
    return "InProgress &#10008";
  }
}
$(document).ready(function() {

  //User Interface
  $("form#todolists").submit(function(event) {

    event.preventDefault();
    userInput = $("input#lists").val().toLowerCase();
    category = $("input#category").val().toLowerCase();

    var todo = new todoLists(userInput,category);


    // append the list to the screen on col 1
    $("ul#tasks").append("<li>" + userInput + "</li>");
    $("#show-lists").show();

    // append output to the screen on col 2
    $("ul#tasks li").last().click(function() {

      $(".tasks").show();
      //$("ul#jobs").empty();


      $("ul#jobs").append("<li class=\"remove\">" +  todo.getTask().charAt(0).toUpperCase() + todo.getTask().slice(1,todo.getTask().length) + " : " + todo.Check()  + "</li>") ;

      $(".remove").click(function() {
        $(this).remove();
      })
    });




  });

});
