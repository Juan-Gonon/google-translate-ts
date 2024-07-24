import Form from 'react-bootstrap/Form';
import React from 'react';
import { SUPPORTED_LANGUAGES } from '../constants';
import { Language } from '../types/types';

interface Props{
    onChange:  (language: Language) => void
}

export function LanguageSelector({ onChange }: Props):React.JSX.Element {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> ) => {
        onChange(e.target.value as Language)
    }
  return (
    <Form.Select aria-label="Selecciona el idioma" onChange={handleChange} >
        {
            Object.entries(SUPPORTED_LANGUAGES)
            .map(([key, literal]) => (
                <option key={key} value={key} >
                    {
                        literal
                    }
                </option>
            ))
        }
    </Form.Select>
  );
}

