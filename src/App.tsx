import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelecter'
import { SectionType } from './types/types.d'



function App():React.JSX.Element {

  const { fromLanguage, toLanguage, interChangeLanguages, setFromLanguages, setToLanguage } = useStore()


  return (
    <>
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <Stack gap={2} >
              <LanguageSelector 
              type= {SectionType.From}
              onChange={setFromLanguages} 
              value={fromLanguage}
              />

              <Form.Control
              as='textarea'
              placeholder='Introducir texto'
              autoFocus
              style={{
                height: '150px'
              }}
              />

          </Stack >

        </Col>
        <Col xs='auto' >
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interChangeLanguages} >
            <ArrowsIcon />
            </Button>
        </Col>
        <Col>
          <Stack gap={2} >
            <LanguageSelector 
            type={SectionType.To}
            value={toLanguage}
            onChange={setToLanguage} /
            >
            <Form.Control
            as='textarea'
            placeholder='Traducción'
            style={{
              height: '150px'
            }}
            />
          </Stack >

        </Col>
      </Row>
      
    </Container>

    </>
  )
}

export default App
