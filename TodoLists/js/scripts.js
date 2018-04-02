function todoLists(task,category) {
  this.task = task;
  this.category = category;
}

todoLists.prototype.Check = function() {
  if(this.category === "done") {
    return "Done";
  } else {
    return "InProgress";
  }
}
$(document).ready(function() {

  //User Interface
  $("form#todolists").submit(function(event) {

    event.preventDefault();
    userInput = $("input#lists").val().toLowerCase();
    category = $("input#category").val().toLowerCase();

    var todo = new todoLists(userInput,category);
    alert(todo.Check());

    // append the list to the screen on col 1
    $("ul#tasks").append("<li>" + userInput + "</li>");
    $("#show-lists").show();

    // append output to the screen on col 2
    $("tasks").last().click(function() {
      $(".tasks").show();
      $("ul#jobs").append("<li>" + todo.Check() + "</li>");
    });

  });

});
