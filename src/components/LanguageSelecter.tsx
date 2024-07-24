import Form from 'react-bootstrap/Form';
import React from 'react';
import { SUPPORTED_LANGUAGES } from '../constants';
import { type FromLanguage, type Language, SectionType } from '../types/types.d';

// interface Props{
//     onChange:  (language: Language) => void
// }

type Props = 
    | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
    | { type: SectionType.To, value: Language, onChange: (language: Language) => void }

export function LanguageSelector({ onChange, type, value }: Props):React.JSX.Element {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> ) => {
        onChange(e.target.value as Language)
    }
  return (
    <Form.Select aria-label="Selecciona el idioma" onChange={handleChange} value={value} >
        {
            type === SectionType.From && (<option value='auto'>Detectar idioma</option> )
        }
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

