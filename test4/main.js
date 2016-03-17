var test,
    xScale = d3.scale.linear()
      .domain([0,300])
      .range([0,300]),
    dataSet = {
      "id": "graph",
      "dataList1": [300,100,50,230,25],
      "height": 20,
      "space": 5
    };
    dataSet2 = {
      "id": "graph",
      "dataList2": [100,120,80,200,90],
      "height": 20,
      "space": 5
    };



var BarGraph = (function(){
  function BarGraph(dataSet){
    this.dataSet = dataSet; //コンストラクタ部分
  }

  BarGraph.prototype.create = function() {
    var yPos = this.dataSet.height + this.dataSet.space,
        XScalePos = this.dataSet.dataList1.length * yPos;

    d3.select("#" + this.dataSet.id)
      .append("g")
      .attr("class","axis")
      .attr("transform", "translate(0," + XScalePos + ")")
      .call(d3.svg.axis().scale(xScale).orient("bottom"));
    d3.select("#" + this.dataSet.id)
      .selectAll("rect")
      .data(this.dataSet.dataList1)
      .enter()
      .append("rect")
      .attr("y",function(d,i){
        return yPos * i;
      })
      .attr("x",0)
      .attr("height",this.dataSet.height)
      .attr("width",function(d,i){
        return d;
      });
  };

  BarGraph.prototype.change1 = function(){
    d3.select("#" + this.dataSet.id)
      .selectAll("rect")
      .data(this.dataSet.dataList1)
      .transition()
      .attr("x",0)
      .attr("width",function(d,i){
        return d;
      });
  };

  BarGraph.prototype.change2 = function(){
    d3.select("#" + this.dataSet.id)
      .selectAll("rect")
      .data(this.dataSet.dataList2)
      .transition()
      .attr("x",0)
      .attr("width",function(d,i){
        return d;
      });
  };

  return BarGraph;
})();

d3.select("#create").on("click",function(){
  test = new BarGraph(dataSet);
  test.create();
});

d3.select("#updata1").on("click",function(){
  test = new BarGraph(dataSet);
  test.change1();
});

d3.select("#updata2").on("click",function(){
  test = new BarGraph(dataSet2);
  test.change2();
});


