//BarChartComponent.js
import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';


export default class BarChartComponent extends Component
{
   constructor(props) {
      super(props);
      this.state = {
          Data : []
       }
    }

    componentDidMount() {
        axios.get(`http://34.69.173.48:9000/customers`)
          .then(res => {
            const customers = res.data;
            let created = [];
            let status = [];
            customers.forEach(element => {
                created.push(element.created);
                status.push(element.status);
            });
            this.setState({ 
              Data: {
                labels: created,
                datasets:[
                   {
                      label:'Customers',
                      data: status ,
                      backgroundColor:[
                       'rgba(255,105,145,0.6)',
                       'rgba(155,100,210,0.6)',
                       'rgba(90,178,255,0.6)',
                       'rgba(240,134,67,0.6)',
                       'rgba(120,120,120,0.6)',
                       'rgba(250,55,197,0.6)'
                    ]
                   }
                ]
             }
             });
          })
      }
 render()
   {
      return(
        <div>
          <Bar
            data = {this.state.Data}
            options = {{ maintainAspectRatio: true }} />
        </div>
      )
   }
}
