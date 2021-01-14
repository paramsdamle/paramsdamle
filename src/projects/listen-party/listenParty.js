import React from 'react';
import Helmet from 'react-helmet'
import styled from 'styled-components'

const ListenParty = () => {
    const BigTemp = styled.div`
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    `

    const Temp = styled.h1`
        justify-content: center;
        margin: auto;
        color: #915f5c;
    `

    return <>
        <Helmet>
            <title>Listen Party</title>
        </Helmet>
        <BigTemp>
        <Temp>I'm still figuring out how to use APIs. When I do, you'll see this page update!</Temp>
        </BigTemp>
    </>
};

export default ListenParty;