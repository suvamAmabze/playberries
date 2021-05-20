/* navbar background color will change when i will scroll */
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});


/* jquery datepicker */
$(document).ready(function () {
  let minDate = new Date();
  $(function () {
    $("#depart").datepicker({
      showAnim: "drop",
      numberOfMonth: 1,
      minDate: minDate,
      dateFormat: "dd/mm/yy",
      onClose: function (selectedDate) {
        $("#return").datepicker("option", "minDate", "selectedDate");
        console.log(selectedDate);
      },
    });

    $("#return").datepicker({
      showAnim: "drop",
      numberOfMonth: 1,
      minDate: minDate,
      dateFormat: "dd/mm/yy",
      onClose: function (selectedDate) {
        $("#depart").datepicker("option", "minDate", "selectedDate");
        console.log(selectedDate);
      },
    });
  });
});

/* Gallery */
$(document).ready(function () {
  $(".gallerys").magnificPopup({
    type: "image",
    delegate: "a",
    gallery: {
      enabled: true,
    },
  });
});