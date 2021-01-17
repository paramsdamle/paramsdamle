import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Tab = styled.div`
    width: 80vmin;
    height: 15vmin;
    background-color: #b08272;
    color: black;
    border-radius: 3vmin;
    margin-top: 2vmin;
    margin-bottom: 2vmin;
    margin-left: 50vmin;
    margin-right: 5ovmin;
    padding-bottom: 2vmin;
    padding-left: 2vmin;
    padding-right: 2vmin;
`

const TabHeader = styled.h1`
    font-size: 4vmin;
    text-decoration: none!important;
    margin-top: 0vmin;
    margin-left: 15vmin;
    margin-bottom: 0vmin;
    padding-top: 0vmin;
`
const TabHeaderLabel = styled.span`
    margin-left: 1vmin;
    font-size: 2vmin;
    color: #690c00;
`

const TabText = styled.h2`
    font-size: 2vmin;
    margin-top: 0vmin;
    margin-left: 15vmin;
    font-weight: normal;
    padding: 0vmin;
`

const TabIcon = styled.img`
    float: left;
    margin-top: 2vmin;
    height: 13vmin;
`

export default ({name, img, desc, toLink, label}) => {
    return <Link to={toLink} style={{"text-decoration":'none',}}><Tab>
        
        <TabIcon src={img}></TabIcon>
        <TabHeader>{name}<TabHeaderLabel>{label}</TabHeaderLabel></TabHeader>
        <TabText>{desc}</TabText>
        
    </Tab></Link>
}