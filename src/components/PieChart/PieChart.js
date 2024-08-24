import React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts'; // Ensure the correct import path

const PieChartComponent = ({ colors, data, legendColor = 'white' }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <PieChart
                colors={colors}
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
                    // Hiding the specific legend classes found during inspection
                    '& .MuiChartsLegend-root, & .MuiChartsLegend-column, & .css-1u0lry5-MuiChartsLegend-root': {
                        display: 'none', // Hide the deprecated legend
                    },
                    // Changing "no data to display" text to white
                    '& .css-1f57y8b': {
                      strokeWidth:"0.4",
                      fill:"white",
                    }
                }}
                width={400}
                height={300}
            />
            {/* Custom Legend positioned to the right and aligned with the top of the chart */}
            <div 
                style={{ 
                    display: 'flex', 
                    flexDirection: 'column',  
                    alignSelf: 'flex-start',
                    maxWidth: '150px',
                    minWidth: '150px',  // Set a maximum width for the legend container
                    overflowY: 'auto',  // Allow vertical scrolling if content overflows
                    overflowX: 'hidden',  // Prevent horizontal scrolling
                }}
            >
                {data.map((item, index) => (
                    <div 
                        key={index} 
                        style={{ 
                            marginBottom: '10px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            flexWrap: 'wrap'  // Wrap text if it overflows
                        }}
                    >
                        <div 
                            style={{ 
                                width: '12px', 
                                height: '12px', 
                                backgroundColor: colors[index % colors.length], // Cycle through colors
                                marginRight: '6px' 
                            }}
                        ></div>
                        <span 
                            style={{ 
                                color: legendColor, 
                                wordWrap: 'break-word',  // Ensure long words break and wrap
                                maxWidth: '200px'  // Set a max width for the text
                            }}
                        >
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PieChartComponent;