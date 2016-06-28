
$(document).ready(function(){

/* affix the navbar after scroll below header */
$('#nav').affix({
      offset: {
        top: $('.jumbotron').height()-$('#nav').height()
      }
});	

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})

/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top;
  $('body,html').animate({scrollTop:posi},700);
});

$('.jumbotron-inner>h1>a').click(function(){
  var link = $(this).attr('href');
  var posi = 20 +  $(link).offset().top;
  $('body,html').animate({scrollTop:posi},700);
});

$.fn.followTo = function (pos) {
    var $this = this,
        $window = $(window);

    $window.scroll(function (e) {
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'absolute',
                top: pos
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 0
            });
        }
    });
};

var scrollheight = $(window).height()-350-50;

$('.jumbotron-inner').followTo(scrollheight);


});
