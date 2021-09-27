
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';


// import styles from './Button.module.scss';
export interface DropDownProps {
    style?: string;
    children: any
}

const theme = {
    colors: {
        primary: 'hotpink',
        positive: "green",
        negative: "red"
    }
}

const SomeText = styled.div`
  color: ${props => props.theme.colors.primary};
`

export const DropDown = ({ children, style }: DropDownProps) => {

    return (
        <ThemeProvider theme={theme}>
            <SomeText>{children}</SomeText>
        </ThemeProvider>
    )
}

export default DropDown