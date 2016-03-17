var dataList = [300,100,200],
    height = 20,
    space = 5,
    xScale = d3.scale.linear()
    .domain([0,300])
    .range([0,300]),
    XScalePos = dataList.length * 25;

var A = (function(){
  function A(runAction){
    this.runAction = runAction; //コンストラクタ部分
  }

  A.prototype.run = function() {
    d3.select("#graph")
      .append("g")
      .attr("class","axis")
      .attr("transform", "translate(0," + XScalePos + ")")
      .call(d3.svg.axis().scale(xScale).orient("bottom"));
    d3.select("#graph")
      .selectAll("rect")
      .data(this.runAction)
      .enter()
      .append("rect")
      .attr("y",function(d,i){
        return (height + space) * i;
      })
      .attr("x",0)
      .attr("height",height)
      .attr("width",0)
      .attr("width",function(d,i){
        return d;
      });
  };
  return A;
})();

var test = new A(dataList);

d3.select("#create").on("click",function(){
  test.run();
})
