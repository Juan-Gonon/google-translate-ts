import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelecter'



function App():React.JSX.Element {

  const { fromLanguage, toLanguage, interChangeLanguages, setFromLanguages, setToLanguage } = useStore()


  return (
    <>
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
        <LanguageSelector onChange={setFromLanguages} />
        {toLanguage}
        </Col>
        <Col >
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interChangeLanguages} >
            <ArrowsIcon />
            </Button>
        </Col>
        <Col>
        <LanguageSelector onChange={setToLanguage} />
        {toLanguage}
        </Col>
      </Row>
      
    </Container>

    </>
  )
}

export default App
