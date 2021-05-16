import Graph from 'react-graph-vis'
import './NetworkChart.css'

const NetworkChart = () => {
    const graph = {
        nodes: [
            { id: 1, label: "192.168.0.1", title: "node 1 tootip text" },
            { id: 2, label: "192.168.0.2", title: "node 2 tootip text" },
            { id: 3, label: "192.168.0.3", title: "node 3 tootip text" },
            { id: 4, label: "192.168.0.4", title: "node 4 tootip text" },
            { id: 5, label: "192.168.0.5", title: "node 5 tootip text" }
        ],
        edges: [
            { from: 2, to: 1 },
            { from: 3, to: 1 },
            { from: 4, to: 1 },
            { from: 5, to: 1 }
        ]
    };

    const options = {
        layout: {
            hierarchical: true
        },
        edges: {
            color: "#000000"
        },
        height: "400px"
    };

    const events = {
        select: function (event) {
            var { nodes, edges } = event;
        }
    };
    return (
        
        <div className="NetworkChart">
            <h2 className = 'NetworkChart__title'>
                Network Chart
            </h2>
            <div className = 'NetworkChart__chart'>
                <Graph
                    graph={graph}
                    options={options}
                    events={events}
                    getNetwork={network => {
                        //  if you want access to vis.js network api you can set the state in a parent component using this property
                    }}
                />
            </div>
        </div>
    )
}

export default NetworkChart;