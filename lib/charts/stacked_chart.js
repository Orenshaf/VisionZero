const StackedChart = (DATA) => {
    const intermediate = Object.keys(DATA).map(year => {
        return {
            year: year,
            Cyclist_Deaths: DATA[year].cyclistDeaths,
            Motorist_Deaths: DATA[year].motoristDeaths,
            Pedestrian_Deaths: DATA[year].pedestrianDeaths,
            Motorist_Injuries: Math.round(DATA[year].motoristInjuries / 100),
            Pedestrian_Injuries: Math.round(DATA[year].pedestrianInjuries / 100),
            Cyclist_Injuries: Math.round(DATA[year].cyclistInjuries / 100),
        };
    })

    const stackKeys = Object.keys(intermediate[0]).slice(1);

    const series = d3.stack()
        .keys(stackKeys)(intermediate);

    const margin = { top: 20, right: 110, bottom: 30, left: 65 },
          width = 700 - margin.left - margin.right,
          height = 350 - margin.top - margin.bottom;

    const x = d3.scaleBand()
        .domain(series[0].map(d => d.data.year))
        .rangeRound([0, width], 0.1)

    const y = d3.scaleLinear()
        .domain([0, d3.max(series[5], d => (d[1]))]).nice()
        .range([height, 0])

    const colors = category => {
        if (category === "Cyclist_Deaths") {
            return "#ff8c00"
        } else if (category === "Motorist_Deaths") {
            return "#d0743c"
        } else if (category === "Pedestrian_Deaths") {
            return "#a05d56"
        } else if (category === "Cyclist_Injuries") {
            return "#8a89a6"
        } else if (category === "Motorist_Injuries") {
            return "#6b486b"
        } else if (category === "Pedestrian_Injuries") {
            return "#7b6888"
        }
    }

    const xAxis = d3.axisBottom(x)

    const yAxis = d3.axisLeft(y)

    const svg = d3.select('#svg')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)

    series.forEach((category, i) => {
        svg.selectAll(`layer-${i}`)
            .data(category, (category) => category.key)
            .join('rect')
            .attr('class', `layer-${i}`)
            .attr('x', d => (x(d.data.year) + 2))
            .attr('y', d => ((height - ((height - y(d[1] - d[0]) + (height - y(d[0])))))))
            .attr("height", d => y(d[0]) - y(d[1]))
            .attr("width", 0)
            .call(selection => {
                selection.transition()
                    .duration(750)
                    .attr('x', d => (x(d.data.year) + 2))
                    .attr('y', d => ((height - ((height - y(d[1] - d[0]) + (height - y(d[0])))))))
                    .attr('height', d => (height - y(d[1] - d[0])))
                    .attr('width', x.bandwidth() - 4)
            })
            .on("mouseover", function () {
                d3.select(this)
                    .transition()
                    .duration(200)
                    .attr('x', d => x(d.data.year) - 2)
                    .attr('width', x.bandwidth() + 4)  
                    .attr('height', d => (height - y(d[1] - d[0]) + 10))
                tooltip.style("display", null)
            })
            .on("mouseout", function () {
                d3.select(this)
                    .transition()
                    .duration(200)
                    .attr('x', d => (x(d.data.year) + 2))
                    .attr('width', x.bandwidth() - 4) 
                    .attr('height', d => (height - y(d[1] - d[0])))
                tooltip.style("display", "none")
            })
            .on("mousemove", function (d) {
                tooltip.select("text").text(function () {
                    let category;
                    const categories = Object.keys(d.data);
                    for (let i = 0; i < categories.length; i++) {
                        if (d.data[categories[i]] === d[1] - d[0]) {
                            category = categories[i].split('_').join(" ");
                            break;
                        }
                    }
                    if (category.includes("Injuries")) {
                        return `${category} (in hundreds): ${d[1] - d[0]}`
                    } else {
                        return `${category}: ${d[1] - d[0]}`
                    }
                });
            })
    })


    svg.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', `translate(0, ${height})`)
        .call(xAxis)

    svg.append('g')
        .attr('class', 'axis axis--y')
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", `${0 - 45}`)
        .attr("x", `${0 - (height / 2)}`)
        .attr("dy", "1em")
        .attr('fill', 'black')
        .style("text-anchor", "middle")
        .text("Totals");

    const tooltip = svg.append("g")
        .attr("class", "tooltip")
        .style("display", "none");

    tooltip.append("rect")
        .attr("transform", `translate(${width}, 0)`)
        .attr("width", 100)
        .attr("height", 20)
        .attr("fill", "grey")
        .style("opacity", 0)
        .style("pointer-events", "none")

    tooltip.append("text")
        .attr("x", 400)
        .attr("dy", "1.2em")
        .style("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("font-weight", "bold")

    const legend = svg.append("g")
        .attr("class", "legend")
        .attr("transform", "translate(605, 0)")

    legend.selectAll("rect")
        .data(stackKeys.reverse())
        .enter()
        .append("rect")
        .attr('x', 0)
        .attr('y', (d, i) => i * 18)
        .attr('width', 12)
        .attr('height', 12)
        .attr('fill', function (d, i) {
            return colors(d);
        });

    legend.selectAll('text')
        .data(stackKeys)
        .enter()
        .append('text')
        .text(d => {
            return d.split('_').join(" ") + "\xa0\xa0";
        })
        .attr('x', 0)
        .attr('y', (d, i) => i * 18)
        .attr('text-anchor', 'end')
        .attr("font-size", "10px")
        .attr('alignment-baseline', 'hanging');
}

export default StackedChart;