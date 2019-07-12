// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-status").on("click", function(event) {
      var id = $(this).data("id");
      var newStatus = $(this).data("newstatus");
  
      var newItemStatus = {
        done: newStatus
      };
  
      // Send the PUT request.
      $.ajax("/api/todo/" + id, {
        type: "PUT",
        data: newItemStatus
      }).then(
        function() {
          console.log("changed status to", newStatus);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log($("#newTodo").val());
  
      var newTodo = {
        todo: $("#newTodo").val().trim(),
        // sleepy: $("[name=sleepy]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/todo", {
        type: "POST",
        data: newTodo
      }).then(
        function(result) {
          console.log("created new to-do item");
          console.log(result);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  