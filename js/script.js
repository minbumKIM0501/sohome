function nav() {
  let wrapWidth = $(".wrap").width();
  if (wrapWidth >= 980) {
    $("nav>ul>li>div").hide();
    $("nav>ul>li").on("mouseenter", function (e) {
      $("nav>ul>li>div").hide();
      $(this).children("div").show();
    });

    $("nav>ul>li>div").on("mouseleave", function (e) {
      $(this).hide();
    });
  }
  if (wrapWidth < 980) {
  }
  $("#btn_01").click(function () {
    $(".nav").css("display", "block");
  });

  $(".close").click(function () {
    $(".nav").css("display", "none");
    $(".nav").css("left", "-380px");
  });
  $(document).ready(function () {
    $("#btn_01").click(function () {
      $(".nav").animate({
        width: "380px",
      });
    });
  });
  $("#btn_01").click(function () {
    $(".nav").animate({ left: "0" }, 1000);
  });
}
