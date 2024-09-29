import React from 'react';
import { PieChart } from '@mui/x-charts';

//Manually truncate labels and add ellipses
const truncateLabel = (label, maxLength = 10) => {
    if (label.length > maxLength) {
        return `${label.slice(0, maxLength)}...`; // Truncate and add ellipses
    }
    return label;
};

const PieChartComponent = ({ colors, data, legendColor = 'white' }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <PieChart
                colors={colors}
                series={[
                    {
                        arcLabel: (item) => truncateLabel(item.label, 10), // Truncate label here
                        arcLabelMinAngle: 45,
                        data: data,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    },
                ]}
                sx={{
                    '& .MuiPieArcLabel-root': {
                        fill: legendColor,
                        fontWeight: 'bold',
                    },
                    // Hiding the specific legend classes found during inspection
                    '& .MuiChartsLegend-root, & .MuiChartsLegend-column, & .css-1u0lry5-MuiChartsLegend-root': {
                        display: 'none',
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
            {/* Custom Legend */}
            <div 
                style={{ 
                    display: 'flex', 
                    flexDirection: 'column',  
                    alignSelf: 'flex-start',
                    maxWidth: '218px',
                    minWidth: '218px',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                }}
            >
                {data.map((item, index) => (
                    <div 
                        key={index} 
                        style={{ 
                            marginBottom: '10px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            flexWrap: 'wrap' 
                        }}
                    >
                        <div 
                            style={{ 
                                width: '12px', 
                                height: '12px', 
                                backgroundColor: colors[index % colors.length],
                                marginRight: '6px' 
                            }}
                        ></div>
                        <span 
                            style={{ 
                                color: legendColor, 
                                wordWrap: 'break-word',
                                maxWidth: '200px'
                            }}
                        >
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PieChartComponent;
