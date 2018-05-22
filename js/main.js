console.log("connected");
let state = {
  styleCounter: 0,
  slideIndex: 0
};


(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: ($(this).offset().top - 70 ) + 'px'
        }, 'slow');
        return this; // for chaining...
    }
})(jQuery);
// from https://stackoverflow.com/questions/4801655/how-to-go-to-a-specific-element-on-page








const buzzFizz = function ( $fizzDiv ) {
  // $fizzDiv.css("background-color", "rgb(96, 99, 85)")
  let divLeft = $fizzDiv.position().left
  let divTop = $fizzDiv.position().top
  let divWidth = $fizzDiv.width();
  let divHeight = $fizzDiv.height();
  let divBottom = $fizzDiv.position().top + divHeight;

  let x = (Math.random() * divWidth) + divLeft;
  const size = (Math.random() * 0.5) + 'em';

  const $bubble = $('<div class="bubble"></div>').css({
    left: x,
    top: divBottom,
    width: size,
    height: size
  }).appendTo($fizzDiv);


  $bubble.animate({top: 100 }, 22000, function () {
    $bubble.animate( {top: divTop}, 32000, function () {
      $bubble.remove(); // Clean up after ourselves to conserve memory.
    })

  });
}


const fizzBuzz = function () {
  const fizzies = $('.fizz')
  // console.log(fizzies);
  for (var i = 0; i < fizzies.length; i++) {
    let $thisFizz = $(fizzies[i])
    buzzFizz( $thisFizz )
  }
}


//
// const shuffleDivs = function () {
//
// }
//
//
// const cycleCSS = function () {
//
//   $('<link/>', {
//      rel: 'stylesheet',
//      type: 'text/css',
//      href: 'css/normalize.css'
//   }).appendTo('head');
//   $('<link/>', {
//      rel: 'stylesheet',
//      type: 'text/css',
//      href: 'css/master.css'
//   }).appendTo('head');
//
//
//   let styles = ["css/master.css", "css/theme.css", "css/red-cat.css"]
//   state.styleCounter = state.styleCounter + 1;
//   if (state.styleCounter >= styles.length) {
//     state.styleCounter = 0
//   }
//
//     var link = document.createElement("link");
//     link.rel = "stylesheet";
//     link.type = "text/css";
//     link.href = styles[state.styleCounter];
//
//     $('head').append(link)
//
// }







$(document).ready( function() {

  console.log("ready");

  // $('.cycler').on('click', function () {
  //   cycleCSS()
  // });



  $('#images').slick({
    // dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
  });



  const fizzTimeDone = window.setInterval(fizzBuzz, 150);
  // const shuffleTimeDone = window.setInterval(shuffleDivs, 5000);

  // var slideIndex = 0;
  // carousel(slideIndex);



  // $('#toggleShy').on('click', function () {
  //   $('.shy').toggleClass('is-active')
  // })
  //
  // $('#toggleSpace').on('click', function () {
  //   $('#space-demo').toggleClass('space-between')
  //   $('#space-demo').toggleClass('space-around')
  // })



  $('.btnHome').on('click', function () {
    $('#home').goTo();
  })
  $('.btnGigs').on('click', function () {
    $('#events').goTo();
  })
  $('.btnMusic').on('click', function () {
    $('#music').goTo();
  })
  $('.btnContact').on('click', function () {
    $('#contact').goTo();
  })



})





(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'slow');
        return this; // for chaining...
    }
})(jQuery);
// from https://stackoverflow.com/questions/4801655/how-to-go-to-a-specific-element-on-page
