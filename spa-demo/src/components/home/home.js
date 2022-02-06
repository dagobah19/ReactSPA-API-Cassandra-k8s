import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios'
import {Card, Col } from 'react-bootstrap'

ChartJS.register(ArcElement, Tooltip, Legend);

const baseURL = "http://localhost:3001/sensordata/demosensor";
export default function Home() {


  const [sensorVals, setSensorVals] = useState({})
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setSensorVals(response.data)
    });
  }, []);

    return (
      <Col>
        <h1>Welcome to the sensor console</h1>
        <Card className="chart-container">
          <Card.Header>Motion Detector</Card.Header>
          <Card.Body>
              <Card.Text>
                <Pie data={{
                  labels: ['Motion Detected', 'No Motion'],
                  datasets: [
                    {
                      label: 'Motion Sensor',
                      data: sensorVals,
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                      ],
                      borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                      ],
                      borderWidth: 1,
                    },
                  ]
                }} />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
}