const Chart = (DATA, borough) => {
    console.log(DATA);
    if (borough) {
        const intermediate = Object.keys(DATA[borough]).map(year => {
            return { year: year, deaths: DATA[borough][year].deaths, injuries: Math.round(DATA[borough][year].injuries / 100) };
        })

        const series = d3.stack()
            .keys(["deaths", "injuries"])(intermediate);

        const margin = { top: 20, right: 20, bottom: 30, left: 40 },
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        const x = d3.scaleBand()
            .domain(series[0].map(d => d.data.year))
            .rangeRound([0, width], 0.1)

        const y = d3.scaleLinear()
            .domain([0, d3.max(series[1], d => (d[0] + d[1]))]).nice()
            .rangeRound([height, 0])

        const z = d3.scaleOrdinal(d3.schemeCategory10)

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
            .style('fill', (d, i) => (z(i)))

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
    } else {
        return null;
    }
}

export default Chart;
