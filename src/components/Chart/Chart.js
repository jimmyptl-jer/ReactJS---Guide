import React from 'react'
import "./Chart.css"
import ChatBar from './ChatBar'

const Chart = (props) => {

  const dataPointsValues = props.dataPoints.map(dataPoints => dataPoints.value);

  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map(
        dataPoints =>
          <ChatBar
            key={dataPoints.label}
            value={dataPoints.value}
            maxValue={totalMaximum}
            label={dataPoints.label}>
          </ChatBar>
      )}
    </div>
  )
}

export default Chart