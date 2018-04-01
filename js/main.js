console.log("connected");
let state = {
  styleCounter: 0,
  slideIndex: 0
};


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


  $bubble.animate({top: 100 }, 12000, function () {
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



const shuffleDivs = function () {

}


const cycleCSS = function () {
  // console.log("cycling now");

  $('<link/>', {
     rel: 'stylesheet',
     type: 'text/css',
     href: 'css/normalize.css'
  }).appendTo('head');
  $('<link/>', {
     rel: 'stylesheet',
     type: 'text/css',
     href: 'css/master.css'
  }).appendTo('head');




  let styles = ["css/master.css", "css/theme.css", "css/red-cat.css"]
  state.styleCounter = state.styleCounter + 1;
  if (state.styleCounter >= styles.length) {
    state.styleCounter = 0
  }

    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = styles[state.styleCounter];

    $('head').append(link)
    // console.log(state.styleCounter);
    // console.log(link.href);

}




function carousel () {
  console.log("carousel");
  $slideArray = $('.mySlides')

  $.each($slideArray, function(index,value) {
    // console.log(index, value);
    $(value).css("display", "none")
  })

  if (state.slideIndex >= $slideArray.length) { state.slideIndex = 0 }

  $imgToDisplay = $( $slideArray[ state.slideIndex ] );
  console.log(state.slideIndex);
  $imgToDisplay.css("display", "block")

  state.slideIndex ++
  setTimeout(carousel, 2000); // Change image every 2 seconds

}






$(document).ready( function() {

  console.log("ready");

  $('.cycler').on('click', function () {
    cycleCSS()
  });


  const fizzTimeDone = window.setInterval(fizzBuzz, 150);
  // const shuffleTimeDone = window.setInterval(shuffleDivs, 5000);

  // var slideIndex = 0;
  // carousel(slideIndex);



  $('#toggleShy').on('click', function () {
    $('.shy').toggleClass('is-active')
  })

  $('#toggleSpace').on('click', function () {
    $('#space-demo').toggleClass('space-between')
    $('#space-demo').toggleClass('space-around')
  })


})
