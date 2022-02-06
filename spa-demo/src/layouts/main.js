
import Home from '../components/home/home'
import Health from '../components/health/health';
import Navbar from '../components/nav/nav'
import {Container, Row} from 'react-bootstrap'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function Main() {
    return (
        <Container fluid>
            <Row>
                <Navbar />
            </Row>
            <Row id="dataDisplay">
              <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />}></Route>
                    <Route path="/health" element={<Health />}></Route>
                </Routes>
              </BrowserRouter>
            </Row>
        </Container>
    )
}
export default Main;