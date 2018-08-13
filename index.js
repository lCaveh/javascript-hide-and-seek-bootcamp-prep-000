function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.querySelector('#nested .target');
}
function increaseRankBy(n) {
  const LIS = document.querySelectorAll('.ranked-list');
 
  for (let i = 0; i < LIS.length; i++) {
   LIS[i].innerHTML = parseInt(LIS[i])+n;
  }
}
function deepestChild() {
  var str= " .grande-node ";
  var exitLoop = true;
  do {
    if (document
    .querySelector("str")) {
      str+= document
      .querySelector("str") + " ";
    } else {
      exitLoop = false;
    }
  } while (exitLoop);
  return document
   .querySelectorAll("str");
}