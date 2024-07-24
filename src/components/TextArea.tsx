import React from 'react'
import { Form } from 'react-bootstrap'
import { SectionType } from '../types/types.d'

// type Props = 
//     | { type: SectionType.From, loading?: undefined, onChange: (value: string) => void, value: string }
//     | { type: SectionType.To, loading?: boolean, onChange: (value: string) => void, value: string }

interface Props {
    loading?: undefined
    onChange: (value: string) => void
    value: string
    type: SectionType
}

const commonStyles = { border: 0, height: '200px' }

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean } ) => {
    if(type === SectionType.From) return 'Introducir texto'

    if(loading === true) return 'Cargando...'

    return 'Traduciendo'
}

export function TextArea({ type, loading, value, onChange }: Props):React.JSX.Element {

    const styles = type === SectionType.From ? commonStyles : { ...commonStyles, backgroundColor: '#f5f5f5'}

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement> ) => {
        onChange(e.target.value)
    }
   
  return (
    <Form.Control
        as='textarea'
        placeholder={getPlaceholder({ type, loading})}
        autoFocus={type === SectionType.From}
        style={styles}
        value={value}
        onChange={handleChange}
        disabled= {type === SectionType.To}
    />
  )
}
