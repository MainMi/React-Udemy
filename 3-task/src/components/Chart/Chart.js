import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {

    const { dataPoint } = props;

    const valueDataPoint = dataPoint.map(data => data.value);
    const maxValue = Math.max(...valueDataPoint);

    return (
        <div className="chart">
            {dataPoint.map((data, index) => (
                <ChartBar
                    key={index}
                    value={data.value}
                    max={maxValue}
                    label={data.label}
                />))}
        </div>
    )
}

export default Chart;
