import React, { Component } from 'react';
// import logo from './logo.svg';
import {Bar, Line, Pie} from 'react-chartjs-2';
// import './App.css';
import ReactTable from "react-table-6";
// import ReactTable from "react-table";
import styled from 'styled-components';
import { Input } from "semantic-ui-react";
// import "react-table/react-table.css";
import 'react-table-6/react-table.css'



// const ReactTable = styled.div`
// margin-left: 100px;
// `;

export default class Customers extends Component {
constructor(props) {
  super(props);
  this.state = {
    // apiResponse: "",
    custRes: [],
    searchInput: "", 
    filteredData: [],
    columns: [],
   
  };
  
}

// callAPI() {
//    fetch("http://localhost:9000/testAPI")
//        .then(res => res.text())
//        .then(res => this.setState({ apiResponse: res }));
// }

customersAPI() {
  fetch("http://35.224.200.30:9000/customers")
      .then(res => res.json())
      .then(res => this.setState({ custRes: res}));
}


handleChange = event => {
  this.setState({ searchInput: event.target.value }, () =>
    this.globalSearch()
  );
};





componentWillMount() {
  // this.callAPI();
  this.customersAPI();
  // this.searchInput();
}

componentDidMount() {
  // this.getData();
  this.getColumns();
}

getColumns = () => {
const columns = [
  {
    Header: "First Name",
    accessor: "firstName",
    sortable: false,
    show: true,
    displayValue: " First Name"
  },
  {
    Header: "Last Name",
    accessor: "lastName",
    sortable: false,
    show: true,
    displayValue: " Last Name"
  },
  {
    Header: "Email",
    accessor: "email",
    sortable: false,
    show: true,
    displayValue: " Email"
  },
  {
    Header: "Status",
    accessor: "status",
    sortable: false,
    show: true,
    displayValue: " Status"
    
  },
  {
    Header: "Created",
    accessor: "created",
    sortable: false,
    show: true,
    displayValue: " Created"
  }
  
]
this.setState({ columns });
  };
 

globalSearch = () => {
  const { searchInput, custRes } = this.state;
  const filteredData = custRes.filter(value => {
    return (
      value.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
      value.lastName.toLowerCase().includes(searchInput.toLowerCase()) ||
      value.email.toLowerCase().includes(searchInput.toLowerCase()) ||
      value.status.toLowerCase().includes(searchInput.toLowerCase()) ||
      value.created.toString().toLowerCase().includes(searchInput.toLowerCase())
    );
  });
  this.setState({ filteredData });
  
};




render(){
  // var customers = this.state.custRes
  let { custRes, columns, filteredData } = this.state;

 
  return (
    <div>
      <br />
    <Input
          size="large"
          name="searchInput"
          value={this.state.searchInput || ""}
          onChange={this.handleChange}
          label="Search"
          style={{ marginLeft: 320 }}
        />
        <br>
        </br>

    <ReactTable 
    columns={columns}
    data={filteredData && filteredData.length ? filteredData : custRes}
    defaultPageSize={10}
    className="-striped -highlight"
    filterable
   
    style={{ marginLeft: 210, marginRight: 10 }}
        />

               
    </div>


   );
  };
}

 

