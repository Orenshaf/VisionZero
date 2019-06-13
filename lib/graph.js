import ParseData from '../lib/data/parse_data';

const Graph = (response) => {
    const graphData = ParseData(response);
    // const yearDeaths = [];
    // Object.values(graphData.BRONX).forEach(year => {
    //     yearDeaths.push(year.deaths);
    // })
    // d3.select('h3').style('color', 'darkblue'); d3.select('h3').style('font-size', '24px');

    // const fruits = ['apple', 'mango', 'banana', 'orange'];

    // d3.select('ul').selectAll('li').data(fruits).enter().append('li').text(function (d) { return d; });

    // const data = [80, 120, 60, 150, 200];

    // const barHeight = 20;

    // const bar = d3.select('svg').selectAll('rect').data(yearDeaths).enter().append('rect').attr('width', function (d) { return d; }).attr('height', barHeight - 1).attr('transform', function (d, i) { return "translate(0," + i * barHeight + ")"; });
}

export default Graph;
