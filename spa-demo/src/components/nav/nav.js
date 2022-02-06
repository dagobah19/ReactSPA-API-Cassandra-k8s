import React from 'react'
import {Nav} from 'react-bootstrap'

export default function Navbar(){

    return(
        <Nav variant="tabs" defaultActiveKey="/">
            <Nav.Item>
                <Nav.Link eventKey="/" href="/">Overview</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="health" href="/health">Sensor Health</Nav.Link>
            </Nav.Item>
            </Nav>
    )
}