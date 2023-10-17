$("#submit").click(function () {
  let name = $("#name");
  let lastName = $("#last_name");
  let type = $("#type");

  if (!name.val()) {
    name.next().show();
    return;
  }
  if (!lastName.val()) {
    lastName.next().show();
    return;
  }
  if (!type.val()) {
    type.next().show();
    return;
  }
})