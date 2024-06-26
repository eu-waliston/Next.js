import type { NextPage } from 'next';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #ebebeb;
        min-height: 100vh;
        padding:  0.5rem;
        margin: 0;
        font-family: Verdana;
    }
`

const StyledPage: NextPage = () => {
    return (
        <>
            <GlobalStyle />
            <div>This SECTION will be styled WITH global styles</div>
        </>
    )
}

export default StyledPage;