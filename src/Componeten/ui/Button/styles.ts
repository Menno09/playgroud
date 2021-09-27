import styled from '@emotion/styled'

export const ButtonMain = styled.button`
  padding: 32px;
  background-color: ${props => props.theme.colors.primary};
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: ${props => props.theme.colors.positive};
  }
`