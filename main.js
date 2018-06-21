$(document).ready(function() {
  $("#cb-liga").change(function() {
    $("#liga").toggleClass("liga-on", this.checked);
  });
  $("#cb-smcp").change(function() {
    $("#smcp").toggleClass("smcp-on", this.checked);
    $("#smcp-text").toggleClass("smcp-on", this.checked);
  });
  $("#cb-salt").change(function() {
    $("#salt").toggleClass("salt-on", this.checked);
  });
  $("#cb-frac").change(function() {
    $("#frac").toggleClass("frac-on", this.checked);
  });
  $("#cb-sups").change(function() {
    $(".sups").toggleClass("sups-on", this.checked);
  });
  $("#cb-subs").change(function() {
    $(".subs").toggleClass("subs-on", this.checked);
  });
  $("#cb-lnum").change(function() {
    $("#lnum-tnum").toggleClass("lnum-on", this.checked);
  });
  $("#cb-tnum").change(function() {
    $("#lnum-tnum").toggleClass("tnum-on", this.checked);
  });
  $("#cb-onum").change(function() {
    $("#onum-pnum").toggleClass("onum-on", this.checked);
  });
  $("#cb-pnum").change(function() {
    $("#onum-pnum").toggleClass("pnum-on", this.checked);
  });
  
  //click to top
  $("#up").click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
});