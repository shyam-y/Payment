// import React from 'react';
// import FusionCharts from 'fusioncharts';
// import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
// import ReactFC from 'react-fusioncharts';
 
// ReactFC.fcRoot(FusionCharts, TimeSeries);
 
// const jsonify = res => res.json();
// const dataFetch = fetch(
//   'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/data.json'
// ).then(jsonify);
// const schemaFetch = fetch(
//   'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/schema.json'
// ).then(jsonify);
 
// class ChartViewer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onFetchData = this.onFetchData.bind(this);
//     this.state = {
//       timeseriesDs: {
//         type: 'timeseries',
//         renderAt: 'container',
//         width: '600',
//         height: '400',
//         dataSource: {
//           caption: { text: 'Online Sales of a SuperStore in the US' },
//           data: null,
//           yAxis: [
//             {
//               plot: [
//                 {
//                   value: 'Sales ($)'
//                 }
//               ]
//             }
//           ]
//         }
//       }
//     };
//   }
 
//   componentDidMount() {
//     this.onFetchData();
//   }
 
//   onFetchData() {
//     Promise.all([dataFetch, schemaFetch]).then(res => {
//       const data = res[0];
//       const schema = res[1];
//       const fusionTable = new FusionCharts.DataStore().createDataTable(
//         data,
//         schema
//       );
//       const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
//       timeseriesDs.dataSource.data = fusionTable;
//       this.setState({
//         timeseriesDs
//       });
//     });
//   }
 
//   render() {
//     return (
//       <div>
//         {this.state.timeseriesDs.dataSource.data ? (
//           <ReactFC {...this.state.timeseriesDs} />
//         ) : (
//           'loading'
//         )}
//       </div>
//     );
//   }
// }











// // import React, { Component } from 'react';
// // import ReactDOM from 'react-dom';
// // import FusionCharts from 'fusioncharts';
// // import Charts from 'fusioncharts/fusioncharts.charts';
// // import ReactFC from 'react-fusioncharts';
// // import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
 
// // ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
 
// // const dataSource =  "Data source A given above" ;
 
// // const chartConfigs = {
// //   type: 'column2d',
// //   width: 600,
// //   height: 400,
// //   dataFormat: 'json',
// //   dataSource: dataSource
// // };
 
// // class trail extends Component {
// //   // Convert the chart to a 2D Pie chart after 5 secs.
// //   alterChart(chart) {
// //     setTimeout(() => {
// //       chart.chartType('pie2d');
// //     }, 5000);
// //   }
 
// //   render() {
// //     return (
// //       <div>
// //         <ReactFC {...chartConfigs} onRender={alterChart} />
// //       </div>
// //     );
// //   }
// // }

// // export default trail;









// // // import React, { Component } from "react";

// // // import ReactDOM from 'react-dom';
// // // import FusionCharts from 'fusioncharts';
// // // import Charts from 'fusioncharts/fusioncharts.charts';
// // // import ReactFC from 'react-fusioncharts';

// // // ReactFC.fcRoot(FusionCharts, Charts);

// // // class trail extends Component {
// // //     state = { data:'' }
// // //     componentDidMount(){
// // //         fetch('http://localhost:9000/customers')
// // //         .then(response => response.json())
// // //         .then(data => this.setState({ response:data }))
// // //     }
// // //     render() {
// // //         return (
// // //             <ReactFC {...this.state.pieConfigs}/>
// // //         );
// // //     }
// // // }
// // // export default trail;