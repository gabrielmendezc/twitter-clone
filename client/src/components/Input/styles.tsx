import styled from 'styled-components'
import { IInputProps } from '.'

export const Input = styled.input<IInputProps>`
  padding: 0.9em 0.7em;
  font-size: 1.6rem;
  border: none;
  border-radius: 3px;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  label {
    color: rgb(220, 220, 220);
    font-size: 1.7rem;
    margin-bottom: 0.5em;
  }

  &:not(:last-of-type) {
    margin-bottom: 1.75em;
  }
`
