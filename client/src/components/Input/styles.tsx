import styled from 'styled-components'
import { IInputProps } from '.'

export const Input = styled.input<IInputProps>`
  padding: 0.85em;
  border-radius: 3px;
  background-color: ${props => (props.isOnWhiteBackground ? 'white' : 'white')};
  border: none;
  outline-color: var(--complementary-1);
  font-size: 1.5rem;
`
