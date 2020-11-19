
// Automatic Slideshow - change image every 3 seconds
//var myIndex = 0;
//carousel();
//
//function carousel() {
//  var i;
//  var x = document.getElementsByClassName("mySlides");
//  for (i = 0; i < x.length; i++) {
//    x[i].style.display = "none";
//  }
//  myIndex++;
//  if (myIndex > x.length) {myIndex = 1}
//  x[myIndex-1].style.display = "block";
//  setTimeout(carousel, 2000);
//}
var words = ['Hi i like HTML', 'I also like css', 'Lorem ipsum dolor sit amet', ' consectetur adipiscing elit', 'sed do eiusmod tempor incididunt'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});