import data from "./data.js";

const graph = document.querySelector(".graph");

let outpost = "";

function calculHeight(amount) {
  const result = amount * 2.86;
  return result;
}

data.forEach((element) => {
  outpost += '<div class="col-graph">';
  outpost += '<p class="col-legend">' + element.day + "</p>";
  outpost +=
    '<div class="col-chart" style="height:' +
    calculHeight(element.amount) +
    'px" onmouseover=""></div>';
  outpost += '<div class="col-chart-tool">' + element.amount + "</div>";
  outpost += "</div>";
});

graph.innerHTML = outpost;

const colChart = document.querySelectorAll(".col-chart");
const tool = document.querySelectorAll(".col-chart-tool");

let Width = window.innerWidth;
if (Width >= 700) {
  for (let i = 0; i < colChart.length; i++) {
    colChart[i].addEventListener("mouseover", function (event) {
      tool[i].style.visibility = "visible";
    });
    colChart[i].addEventListener("mouseout", function (event) {
      tool[i].style.visibility = "hidden";
    });
  }
} else {
  for (let i = 0; i < colChart.length; i++) {
    colChart[i].addEventListener("mousedown", function (event) {
      tool[i].style.visibility = "visible";
    });
    colChart[i].addEventListener("mouseup", function (event) {
      tool[i].style.visibility = "hidden";
    });
  }
}
