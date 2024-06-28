$("#plan").on({
  input: function () {
    if ($(this).is(":checked")) {
      $("#price_basic").text("199.99");
      $("#price_professional").text("249.99");
      $("#price_master").text("399.99");
    } else {
      $("#price_basic").text("19.99");
      $("#price_professional").text("24.99");
      $("#price_master").text("39.99");
    }
  },
});
