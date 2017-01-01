
var Epoch = new Date(2017, 0, 1);
var Apoc = new Date(2021, 0, 1);
var leapDay = new Date(2020, 1, 29);

var r = 1460/1461;

function setup() {

  noCanvas();
  // createCanvas(600,500);

}

function init() {
  startTime();

}

function startTime() {
    //Actual Time
    var today = new Date();
    document.getElementById('leapTime').innerHTML =
    moment(today).format("HH:mm:ss");

    document.getElementById('leapDate').innerHTML =
    moment(today).format("D MMM YY");


    var diff = r * (today - Epoch);
    var trueDay = moment(diff + Epoch.getTime());


    document.getElementById('trueTime').innerHTML =
    moment(trueDay).format("HH:mm:ss");

    if(trueDay - leapDay >= 0) {
      document.getElementById('trueDate').innerHTML =
      moment(trueDay).add(1,'d').format("D MMM YY");
    } else {
      document.getElementById('trueDate').innerHTML =
      moment(trueDay).format("D MMM YY");
    }


    var t = setTimeout(startTime, 100);
}
