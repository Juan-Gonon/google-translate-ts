import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelecter'
import { SectionType } from './types/types.d'
import { TextArea } from './components/TextArea'



function App():React.JSX.Element {

  const { fromLanguage, loading, setFromText, setResult, fromText, result, toLanguage, interChangeLanguages, setFromLanguages, setToLanguage } = useStore()


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

              <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
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
            <TextArea
            loading={loading}
            type={SectionType.To}
            value={result}
            onChange={setResult}
            />
          </Stack >

        </Col>
      </Row>
      
    </Container>

    </>
  )
}

export default App
