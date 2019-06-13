const Chart = (data) => {
    const yearDeaths = Object.values(data.BRONX).map(year => {
        return year.deaths;
    })
    const yearInjuries = Object.values(data.BRONX).map(year => {
        return year.injuries / 100;
    })
    const years = Object.keys(data.BRONX)

    // debugger;

    const margin = { top: 20, right: 30, bottom: 30, left: 40 },
          width = 960 - margin.left - margin.right,
          height = 500 - margin.left - margin.right;
        
    const x = d3.scaleBand()
        .domain(years)
        .range([0, width]);

    const y = d3.scaleLinear()
        .domain([0, (d3.max(yearDeaths) + d3.max(yearInjuries))])
        .range([height, 0]);

    const chart = d3.select(".chart")
        .attr("width", width + margin.left + margin.right + 30)
        .attr("height", height + margin.top + margin.bottom + 20)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    
    const xAxis = d3.axisBottom(x);

    const yAxis = d3.axisLeft(y);
    
    chart.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    chart.append("g")
        .attr("class", "y axis")
        .call(yAxis)
    
    chart.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left - 5)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Totals");   

    chart.append("text")
        .attr("transform",
            "translate(" + (width / 2) + " ," +
            (height + margin.top + 10) + ")")
        .style("text-anchor", "middle")
        .text("Years");

    const deathBar = chart.selectAll(".deathBar")
        .data(yearDeaths)
        .enter()
    
    const injuryBar = chart.selectAll(".injuryBar")
        .data(yearInjuries)
        .enter()

    injuryBar.append("rect")
        .attr("class", "injuryBar")
        .attr("x", function (d) { return x(d); })
        .attr("y", function (d) { return y(d); })
        .attr("height", function (d) { return height - y(d); })
        .attr("width", x.bandwidth() - 100)
        .attr("transform", function (d, i) { return "translate(" + (i + x.bandwidth() + 50) + ",0)"; });

    deathBar.append("rect")
        .attr("class", "deathBar")
        .attr("x", function (d) { return x(d); })
        .attr("y", function (d) { return y(d); })
        .attr("height", function (d) { return height - y(d); })
        .attr("width", x.bandwidth() - 100)
        .attr("transform", function (d, i) { return "translate(" + (i * x.bandwidth() + 50) + ",0)"; });
}

export default Chart;
