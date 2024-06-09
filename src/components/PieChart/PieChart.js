import React from 'react';
import { PieChart, pieArcLabelClasses} from '@mui/x-charts'; // Ensure the correct import path

const PieChartComponent = ({ colors, data }) => {
    return (
      <PieChart
        colors= {colors}
        series={[
          {
            arcLabel: (item) => `${item.label}`,
            arcLabelMinAngle: 45,
            data: data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: 'white',
            fontWeight: 'bold',
          },
        }}
        width={600}
        height={300}
    />
    );
}

export default PieChartComponent;

