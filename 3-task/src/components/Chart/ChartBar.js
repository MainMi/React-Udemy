import './ChartBar.css';

const ChartBar = (props) => {

    const { value, max, label } = props;

    

    let currentHeight = value > 0
        ? Math.round(value / max * 100) + '%'
        : "0%"
    return (<div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{"height": currentHeight }}></div>
        </div>
        <div className="chart-bar__label">{label}</div>
    </div>)
}

export default ChartBar;
