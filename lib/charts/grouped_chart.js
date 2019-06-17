const GroupedChart = (DATA, borough) => {

    const intermediate = Object.keys(DATA[borough]).map(year => {
        return {
            year: year,
            Cyclist_Deaths: DATA[borough][year].cyclistDeaths,
            Motorist_Deaths: DATA[borough][year].motoristDeaths,
            Pedestrian_Deaths: DATA[borough][year].pedestrianDeaths,
            // Person_Deaths: DATA[borough][year].personDeaths,
            Cyclist_Injuries: Math.round(DATA[borough][year].cyclistInjuries / 100),
            Pedestrian_Injuries: Math.round(DATA[borough][year].pedestrianInjuries / 100),
            Motorist_Injuries: Math.round(DATA[borough][year].motoristInjuries / 100),
            // Person_Injuries: Math.round(DATA[borough][year].personInjuries / 100),
        };
    })
    const margin = { top: 20, right: 115, bottom: 30, left: 65 },
        width = 700 - margin.left - margin.right,
        height = 350 - margin.top - margin.bottom;
    
    const keys = intermediate.map( datum => {
        return datum.year;
    })

    const categories = Object.keys(intermediate[0]).slice(1);

    const x0 = d3.scaleBand()
        .domain(keys)
        .rangeRound([0, width], 0.1)

    const x1 = d3.scaleBand()
        .padding(0.05)
        .domain(categories)
        .rangeRound([0, x0.bandwidth()])
    
    const y = d3.scaleLinear()
        .rangeRound([height, 0])
        .domain([0, d3.max(intermediate, d => d3.max(categories, category => d[category]))]).nice()

    const colors = category => {
        if (category === "Cyclist_Deaths") {
            return "#ff8c00"
        } else if (category === "Motorist_Deaths") {
            return "#d0743c"
        } else if (category === "Pedestrian_Deaths") {
            return "#a05d56"
        } 
        // else if (category === "Person_Deaths") {
        //     return "#510639"
        // } 
        else if (category === "Cyclist_Injuries") {
            return "#6b486b"
        } else if (category === "Motorist_Injuries") {
            return "#8a89a6"
        } else if (category === "Pedestrian_Injuries") {
            return "#7b6888"
        } 
        // else if (category === "Person_Injuries") {
        //     return "#F4F9E1"
        // }
    }

    const xAxis = d3.axisBottom(x0)

    const yAxis = d3.axisLeft(y)

    const svg = d3.select('body')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)

    svg.append("g")
        .selectAll("g")
        .data(intermediate)
        .enter()
        .append("g")
        .attr("transform", d => `translate(${x0(d.year)}, 0)`)
        .selectAll("rect")
        .data((d) => { return categories.map(category => { 
            return { category, value: d[category] }
        })})
        .enter()
        .append("rect")
        .attr("x", d => {
            return x1(d.category)
        })
        .attr("y", d => {
            return y(d.value)
        })
        .attr("width", x1.bandwidth())
        .attr("height", d => (height - y(d.value)))
        .attr("fill", d => colors(d.category))
        .on("mouseover", function () { tooltip.style("display", null) })
        .on("mouseout", function () { tooltip.style("display", "none") })
        .on("mousemove", function (d) {
            // console.log(d);
            const xPosition = d3.mouse(this)[0] - 20;
            const yPosition = d3.mouse(this)[1] - 20;

            tooltip.attr("transform", `translate(${xPosition}, ${yPosition})`);
            tooltip.select("text").text(function () {
                const category = d.category.split('_').join(" ");
                if (category.includes("Injuries")){
                    return `${category} (in hundreds): ${d.value}`
                } else {
                    return `${category}: ${d.value}`
                }
            });
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
        .attr("width", 100)
        .attr("height", 20)
        .attr("fill", "grey")
        .style("opacity", 0)
        .style("pointer-events", "none")

    tooltip.append("text")
        .attr("x", 80)
        .attr("dy", "1.2em")
        .style("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("font-weight", "bold")
        .attr("fill", "black");
}

export default GroupedChart;