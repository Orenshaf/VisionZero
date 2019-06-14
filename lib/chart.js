const Chart = (DATA, borough) => {

    if (borough) {
        if (document.getElementsByTagName("svg").length > 0) {
            const removeSVG = document.getElementsByTagName("svg");
            removeSVG[0].parentElement.removeChild(removeSVG[0]);
        }

        const intermediate = Object.keys(DATA[borough]).map(year => {
            return { year: year, deaths: DATA[borough][year].deaths, injuries: Math.round(DATA[borough][year].injuries / 100) };
        })

        const series = d3.stack()
            .keys(["deaths", "injuries"])(intermediate);

        const margin = { top: 20, right: 20, bottom: 30, left: 40 },
            width = 1000 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;
        
        const categories = ["Deaths", "Injuries(in hundreds)"];

        const x = d3.scaleBand()
            .domain(series[0].map(d => d.data.year))
            .rangeRound([0, width], 0.1)

        const y = d3.scaleLinear()
            .domain([0, d3.max(series[1], d => (d[0] + d[1]))]).nice()
            .rangeRound([height, 0])

        const xAxis = d3.axisBottom(x)

        const yAxis = d3.axisLeft(y)

        const svg = d3.select('body')
            .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                    .attr('transform', `translate(${margin.left}, ${margin.top})`)

        const layer = svg.selectAll('layer')
            .data(series)
            .enter()
            .append('g')
                .attr('class', 'layer')
                .style('fill', (d, i) => (i === 0 ? "#af111c" : "url(#bg)"))

        svg.selectAll('legend')
            .data(categories)
            .enter()
            .append('rect')
                .attr('class', 'legend')
                .attr('y', (d, i) => (i === 0 ? 0 : 14))
                .attr('x', width)
                .attr('width', 12)
                .attr('height', 12)
                .style('fill', (d, i) => (i === 0 ? "#af111c" : "FAB97A"))

        svg.selectAll('legendLabel')
            .data(categories)
            .enter()
            .append("text")
                .attr('class', 'legendLabel')
                .text(d => d)
                .attr('x', (d, i) => (i === 0 ? width - 15 : width - 43))
                .attr('y', (d, i) => (i === 0 ? 8 : 22))
                .style("font-size", "10px")
                .style('fill', 'black')
                .style("text-anchor", "middle")

        layer.selectAll('rect')
            .data(d => d)
            .enter()
            .append('rect')
                .attr('x', d => (x(d.data.year) + 2))
                .attr('y', d => y(d[0] + d[1]))
                .attr('height', d => y(d[0]) - y(d[1] + d[0]))
                .attr('width', x.bandwidth() - 4)

        svg.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', `translate(0, ${height})`)
            .call(xAxis)

        svg.append('g')
            .attr('class', 'axis axis--y')
            .call(yAxis)
            .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", `${0 - margin.left}`)
                .attr("x", `${0 - (height / 2)}`)
                .attr("dy", "1em")
                .attr('fill', 'black')
                .style("text-anchor", "middle")
                .text("Totals");
        
        svg.append("defs")
            .data(series)
            .append("pattern")
            .attr("id", "bg")
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', 156)
            .attr('height', 50)
            .style('background', 'transparent')
            .append("image")
            .attr("xlink:href", "./assets/images/bandaid.png")
            .attr('x', 8)
            .attr('width', 140)
            .attr('height', 50)
            .style('background', 'transparent')

    } else {
        return null;
    }
}

export default Chart;
