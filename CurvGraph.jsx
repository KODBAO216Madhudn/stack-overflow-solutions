// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';
// // import ChartDataLabels from 'chartjs-plugin-datalabels';
// import { ChartLabel, getChartLabelPlugin } from 'chart.js-plugin-labels-dv';

// const CurvGraph = () => {
//   const chartContainer = useRef(null);
//   const chartInstance = useRef(null);

//   const level1Labels = ['LabelLabelLabelLabelLabelLabel 1', 'Label 2', 'Label 3', 'Label 4'];
//   const level1Data = [250, 250, 250, 250];

//   useEffect(() => {
//     const canvas = chartContainer.current;
//     const ctx = canvas.getContext('2d');

//     if (chartInstance.current) {
//       chartInstance.current.destroy();
//     }

//     const labelsPlugin = getChartLabelPlugin(ChartLabel, ctx);

//     chartInstance.current = new Chart(ctx, {
//       type: 'pie',
//       data: {
//         labels: level1Labels,
//         datasets: [
//           {
//             data: level1Data,
//             backgroundColor: ['red', 'blue', 'green', 'yellow'],
//             borderColor: 'white',
//             borderWidth: 2,
//           },
//         ],
//       },
//       options: {
//         cutout: '70%',
//         plugins: {
//           legend: false,
//           labels: {
//             render: 'label',
//             fontColor: '#000',
//             arc: true,
//             position: 'inside',
//             outsidePadding: 4,
//             textMargin: 8,
//             overlap: true,
//             rotation: (context) => {
//               console.log("coming 1st")
//               const index = context.dataIndex;
//               const value = context.dataset.data[index];
//               const angle = context.parsed * Math.PI * 2;

//               if (angle < Math.PI) {
//                 return -angle + Math.PI; // Rotates labels below 180 degrees
//               } else {
//                 return -angle; // Rotates labels above 180 degrees
//               }
//             },
//           },
//           // Configure datalabels plugin if needed
//           datalabels: {
//             display: false, // You can disable if using only labels-dv plugin
//           },
//         },
//         // Apply the chart.js-plugin-labels-dv plugin for arc labels
//         plugins: {
//           legend: false,
//           labels: {
//             render: 'label',
//             fontColor: '#000',
//             arc: true,
//             position: 'inside',
//             outsidePadding: 4,
//             textMargin: 8,
//             overlap: true,
//             rotation: (context) => {
//               console.log("coming 2nd")

//               const index = context.dataIndex;
//               const value = context.dataset.data[index];
//               const angle = context.parsed * Math.PI * 2;

//               if (angle < Math.PI) {
//                 return -angle + Math.PI; // Rotates labels below 180 degrees
//               } else {
//                 return -angle; // Rotates labels above 180 degrees
//               }
//             },
//           },
//         },
//       },
//       // Pass the chart.js-plugin-labels-dv plugin as an array
//       plugins: [labelsPlugin],
//     });

//     return () => {
//       if (chartInstance.current) {
//         chartInstance.current.destroy();
//       }
//     };
//   }, [level1Labels, level1Data]);

//   return (
//     <div style={{ marginLeft: '10rem', height: '600px', width: '600px', position: 'relative' }}>
//       <canvas ref={chartContainer} id="mainPieChart" width="400" height="400"></canvas>
//     </div>
//   );
// };

// export default CurvGraph;

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { ChartLabel, getChartLabelPlugin } from 'chart.js-plugin-labels-dv';

const CurvGraph = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  const level1Labels = [
    'Label Label Label Label 1',
    'Label Label Label Label 2',
    'Label Label Label Label 3',
    'Label Label Label Label 4'
  ];
  const level1Data = [250, 250, 250, 250];

  useEffect(() => {
    const canvas = chartContainer.current;
    const ctx = canvas.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Chart.register(ChartLabel); // Register ChartLabel
    const labelsPlugin = getChartLabelPlugin(ChartLabel, ctx);

    chartInstance.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: level1Labels,
        datasets: [
          {
            data: level1Data,
            backgroundColor: ['red', 'blue', 'green', 'yellow'],
            borderColor: 'white',
            borderWidth: 2
          }
        ]
      },
      options: {
        cutout: '70%',
        plugins: {
          labels: {
            render: 'label',
            fontColor: '#000',
            arc: true,
            position: 'inside',
            outsidePadding: 4,
            textMargin: 8,
            overlap: true,
            rotation: (context) => {
              console.log("Rotation function called");
              const angle = context.parsed * Math.PI * 2;

              if (angle < Math.PI) {
                return -angle + Math.PI; // Rotates labels below 180 degrees
              } else {
                return -angle; // Rotates labels above 180 degrees
              }
            }
          }
        },
      },
      plugins: [labelsPlugin]
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [level1Labels, level1Data]);

  return (
    <div style={{ marginLeft: '10rem', height: '600px', width: '600px', position: 'relative' }}>
      <canvas ref={chartContainer} id="mainPieChart" width="400" height="400"></canvas>
    </div>
  );
};

export default CurvGraph;


