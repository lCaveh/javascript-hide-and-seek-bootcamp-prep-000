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
  let first = document.getElementById('grand-node');
  let next = first.children[0];

while (next) {
  first = next;
  next = first.children[0];
  }
  return first;
  
}