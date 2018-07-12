//normal random function

function random(n, m) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(random(1, 10));

//d3 random function

function random(n, m) {
    var rscale = d3.scale.linear().domain([0, 1])
        .rangeRound([n, m])
    return rscale(Math.random());
}
console.log(random(10, 100));

// d3 scale min and max 

var scale = d3.scale.linear()
    .domain([d3.min(arr), d3.max(arr)])
    .range([0, 255]);

var scale = d3.scale.linear().domain([d3.min(dataste, (d) => {
        return d.amount
    }), d3.max(dataste, (d) => {
        return d.amount;
    })])
    .range(10, 300)

// d3 scale ordinal()  
var index = ["中國國⺠民黨", "民主進步黨", "時代⼒力力量", "無黨團結聯盟", "親⺠黨"]
var color = ["blue", "green", "green", "yellow", "gray", "orange"];

var xScale = d3.scale.ordinal()
    .domain(index)
    .range(color);

console.log(xScale('中國國⺠民黨')); //blue
console.log(xScale("民主進步黨")); //green

//d3 scale category20()

var fScale = d3.scale.category20();
console.log(fScale(1)); //"#1f77b4"
console.log(fScale(2)); //"#aec7e8"
console.log(fScale("3")); //"#ff7f0e"

for (var i = 0; i < 20; i++) {
    d3.select("body").append("div")
        .classed('ball', true)
        .style({
            "background": fScale(i)
        });

}

//