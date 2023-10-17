$("#submit").click(function () {
  let name = $("#name");
  let lastName = $("#last_name");
  let type = $("#type");
  let hasError = false;

  $(".error-input").hide();

  if (!name.val()) {
    name.next().show();
    hasError = true;
  }
  if (!lastName.val()) {
    lastName.next().show();
    hasError = true;
  }
  if (!type.val()) {
    type.next().show();
    hasError = true;
  }
})