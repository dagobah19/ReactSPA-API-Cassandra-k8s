import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Card, Col, Table } from 'react-bootstrap'


const baseURL = "http://localhost:3001/sensorhealth";
export default function Health() {


  const [sensorVals, setSensorVals] = useState([])
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setSensorVals(response.data)
    });
  }, []);

    return (
      <Col>
        <Card className="chart-container">
          <Card.Header>Sensor Health</Card.Header>
          <Card.Body>
              <Card.Text>
               <Table striped hover>
                   <thead>
                       <tr>
                           <td>Sensor</td>
                           <td>State</td>
                        </tr>  
                   </thead>
                   <tbody>
                       
                           {sensorVals.map((vals,index)=>
                            <tr key={index}>
                                <td>{vals.sensorname}</td>
                                <td>{vals.sensorhealth}</td>
                            </tr>
                           )}
                       
                   </tbody>
               </Table>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
}