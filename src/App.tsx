import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/Icons'



function App():React.JSX.Element {

  const { fromLanguage, toLanguage, interChangeLanguages } = useStore()


  return (
    <>
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <h2>From</h2>
          <h3>{fromLanguage}</h3>
        </Col>
        <Col >
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interChangeLanguages} >
            <ArrowsIcon />
            </Button>
        </Col>
        <Col>
          <h2>To</h2>
          <h3>{toLanguage}</h3>
        </Col>
      </Row>
      
    </Container>

    </>
  )
}

export default App
