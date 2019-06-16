import StackedChart from './stacked_chart';

let currentBorough;
let currentStyle;

const Chart = (DATA, borough, style) => {
    if (borough) {
        if (currentBorough === borough && currentStyle !== style ) {
            if (style === 'stacked') {
                StackedChart(DATA, borough);
            } else {
                GroupedChart(DATA, borough);
            }
        } else {
            currentBorough = borough;
            if (document.getElementsByTagName("svg").length > 0) {
                const removeSVG = document.getElementsByTagName("svg");
                removeSVG[0].parentElement.removeChild(removeSVG[0]);
            }
            StackedChart(DATA, borough)
        }
    } else {
        const intermediate = Object.keys(DATA["NYC"]).map(year => {
            return {
                year: year,
                Person_Deaths: DATA["NYC"][year].personDeaths,
                Motorist_Deaths: DATA["NYC"][year].motoristDeaths,
                Pedestrian_Deaths: DATA["NYC"][year].pedestrianDeaths,
                Cyclist_Deaths: DATA["NYC"][year].cyclistDeaths,
                Person_Injuries: Math.round(DATA["NYC"][year].personInjuries / 100),
                Motorist_Injuries: Math.round(DATA["NYC"][year].motoristInjuries / 100),
                Pedestrian_Injuries: Math.round(DATA["NYC"][year].pedestrianInjuries / 100),
                Cyclist_Injuries: Math.round(DATA["NYC"][year].cyclistInjuries / 100),
            };
        })

        const stackKeys = Object.keys(intermediate[0]).slice(1);

        const series = d3.stack()
            .keys(stackKeys)(intermediate);


        const margin = { top: 20, right: 120, bottom: 30, left: 40 },
            width = 1200 - margin.left - margin.right,
            height = 600 - margin.top - margin.bottom;

        const x = d3.scaleBand()
            .domain(series[0].map(d => d.data.year))
            .rangeRound([0, width], 0.1)

        const y = d3.scaleLinear()
            .domain([0, d3.max(series[7], d => (d[0] + d[1]))]).nice()
            .rangeRound([height, 0])

        const reds = (i) => {
            return `RGB(${((i + 4) * 138) / 4}, ${((i + 4) * 7) / 4}, ${((i + 4) * 7) / 4})`
        }

        const yellows = (i) => {
            return `RGB(${(i * 250) / 4}, ${(i * 185) / 4}, ${(i * 122) / 4})`
        }

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
            .style('fill', (d, i) => i < 4 ? reds(i) : yellows(i))


        layer.selectAll('rect')
            .data(d => d)
            .enter()
            .append('rect')
            .attr('x', d => (x(d.data.year) + 2))
            .attr('y', d => y(d[0] + d[1]))
            .attr('height', d => y(d[0]) - y(d[1] + d[0]))
            .attr('width', x.bandwidth() - 4)
            .on("mouseover", function () { tooltip.style("display", null) })
            .on("mouseout", function () { tooltip.style("display", "none") })
            .on("mousemove", function (d) {
                // console.log(d);
                const xPosition = d3.mouse(this)[0] - 20;
                const yPosition = d3.mouse(this)[1] - 20;
                tooltip.attr("transform", `translate(${xPosition}, ${yPosition})`);
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
            .attr("fill", "grey");
    }
}

export default Chart;
