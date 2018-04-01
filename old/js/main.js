$(document).ready(function() {
// all js inside doc ready wrapper, all actions available.


const hideContents = function () {
  // add class hiddent to call all of content's children
    console.log("running hide contents");
  $('.content').children().addClass('hidden')
}

$('#home').on('click', function() {
  console.log("#hom on click");
  hideContents()
  $('.home').removeClass('hidden')
})


$('#music').on('click', function() {
  console.log("#music on click");
  hideContents()
  $('.music').removeClass('hidden')
})

$('#events').on('click', function() {
  console.log("#events on click");
  hideContents()
  $('.events').removeClass('hidden')
})


$('#presskit').on('click', function() {
  console.log("#presskit on click");
  hideContents()
  $('.presskit').removeClass('hidden')
})








}) // THIS IS THE END OF DOCUMENT READY
