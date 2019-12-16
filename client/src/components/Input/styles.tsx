import styled from 'styled-components'
import { IInputProps } from '.'

export const Input = styled.input<IInputProps>`
  border: none;
  background-color: transparent;
  padding: 0.45rem 0.7rem 0.45rem 0.7rem;
  outline: none;
  font-size: 1.9rem;
  border-radius: 2px;
  border-bottom: 2px solid rgb(101, 119, 134);
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  background-color: rgb(245, 248, 250);
  margin-bottom: 2em;

  input:focus {
    border-color: var(--complementary-4);

    + label {
      color: var(--complementary-4);
    }
  }

  label {
    padding: 0.7rem 0 0 0.7rem;
    font-size: 1.5rem;
    order: -1;
    color: rgb(101, 119, 134);
  }
`
