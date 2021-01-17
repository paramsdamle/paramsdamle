import React, {useState, useEffect} from 'react'
import background from "./stars.jpg"
import styled from 'styled-components'
import anon_person from './anon_person.jpg'
import anon_planet from './anon_planet.jpg'
import {Link} from 'react-router-dom'
import home from './home.png'

const GoogleImages = require('google-images');

// Y29uc3QgY2xpZW50ID0gbmV3IEdvb2dsZUltYWdlcygnNmM3ODRiNTU5ZTg2MjA2NWUnLCAnQUl6YVN5QzR2ZFVWQlo1b29wcmxzWXJieGVCQy1tSUIzV3NlY0hzJyk7

const HeaderText = styled.h1`
    text-align: center;
    font-family: HelveticaNeue;
    font-size: 7vmin;
    color: #f0d126;
`

const FooterText = styled.h4`
    position: absolute;
    text-align: center;
    font-family: HelveticaNeue;
    font-size: 3vmin;
    color: #f0d126;
    bottom: 2vh;
`

const Btn = styled.button`
    position: relative;
    background-color: transparent;
    color: #f0d126;
    margin-left: 3vmin;
    margin-right: 3vmin;    
    font-size: 2vh;
`

const HomeButton = styled.img`
    height: 5vh;
    position: absolute;
    top: 1vh;
    left: 1vw;
`

const Display = styled.div`
    text-align: center;
    width: 20vw;
    height: auto;
    background: black;
    margin-top: 5vmin;
    margin-left: 3vmin;
    margin-right: 3vmin;
    margin-bottom: 2vmin;
`

const CharIcon = styled.img`
    width:20vw;
`

async function homeName (url){
    if(url){
        let res = await fetch(url);
        let home = await res.json();
        return home.name
    }
    return ""
}

async function filmName (url){
    if(url){
        let res = await fetch(url);
        let film = await res.json()
        return film.title
    }
    return ""
}

async function imgUrl (keyword) {
    if(keyword){
        return client.search(keyword);
    }
    return "";
}

const ItemBlock = ({item, type, imgSrc}) => {

    const [hN2, sethN2] = useState("space")
    const [fN2, setfN2] = useState("some movies...")

    if(item){
        // console.log("item called")
        if(type == "Person"){
            // console.log(item)

            let hN = homeName(item.homeworld)
            hN.then(result => {
                // console.log("got to hN promise");
                sethN2(result);
                // console.log(result)
                // console.log(hN2)
            })
            // console.log(hN2)
            // console.log(item.films[0])

            let fN = filmName(item.films[0])
            fN.then(result => {
                // console.log("got to fN promise")
                setfN2(result);
                // console.log(result)
                // console.log(fN2)
            })
            // console.log(fN2)
        


            return <Display> 
                <CharIcon src={imgSrc} />
                <br/>Hi! I'm {item.name} from {hN2 || "space"}.
                You might have seen me in {fN2 || "some movies over the years"}.
            </Display>
        }
        if(type == "Planet"){
            // console.log(type)

            

            return <Display>
                <CharIcon src={imgSrc} />
                <br/>Planet Name: {item.name} <br/>
                {item.climate} {item.terrain} planet with {item.population || "many"} residents
            </Display>
        }
    }
    return <div></div>        
}

const SwapiTest = () => {

    const [people, setPeople] = useState([])
    const [currentPerson, setCurrentPerson] = useState()

    const [planets, setPlanets] = useState([])
    const [currentPlanet, setCurrentPlanet] = useState()

    const [loading, setLoading] = useState(false)
    
    const [personImg, setPersonImg] = useState(anon_person)
    const [planetImg, setPlanetImg] = useState(anon_planet)

    function randomizePerson (){
        if(people.length > 0){
            let x = Math.floor(Math.random()*people.length)
            // console.log(x)
            setCurrentPerson(people[x])
            // const imgLink = imgUrl(people[x].name)
            // console.log(imgLink)
            // if (imgLink){ setPersonImg(imgLink); }
        }
    }

    function randomizePlanet (){
        if(planets.length > 0){
            let x = Math.floor(Math.random()*planets.length)
            // console.log(x)
            setCurrentPlanet(planets[x])

            // const imgLinkPromise = imgUrl(planets[x].name)
            // console.log(imgLinkPromise)
            // .then(images => {
            //     if(images.length > 0){
            //         return images[0].url;
            //     }
            //     /*
            //     [{
            //         "url": "http://steveangello.com/boss.jpg",
            //         "type": "image/jpeg",
            //         "width": 1024,
            //         "height": 768,
            //         "size": 102451,
            //         "thumbnail": {
            //             "url": "http://steveangello.com/thumbnail.jpg",
            //             "width": 512,
            //             "height": 512
            //         }
            //     }]
            //     */
            // });
            // console.log(imgLink)
            // if (imgLink){ setPersonImg(imgLink); }
        }
    }

    useEffect(()=>{
        async function fetchPeople () {
            let res = await fetch("https://swapi.dev/api/people")
            let data = await res.json()
            // console.log(data)
            await setPeople(data.results)
            // await console.log(people)
            await randomizePerson()
        }

        async function fetchPlanets () {
            let res = await fetch("https://swapi.dev/api/planets")
            let data = await res.json()
            // console.log(data)
            await setPlanets(data.results)
            // await console.log(planets)
            await randomizePlanet()
        }

        fetchPeople();
        fetchPlanets();

        

    }, [])



    return <div style={{ backgroundImage: `url(${background})`, position: "fixed", textAlign: "center",
        bottom: "0",
        right: "0",
        left: "0",
        top: "0", paddingLeft:"15vw", paddingRight:"10vw"}}>
            <Link to="/projects"><HomeButton src={home}></HomeButton></Link>
            <HeaderText>Star Wars API Test</HeaderText>
            <div style={{"float":"left", justifyContent:"center", textAlign: "center"}}>
                <ItemBlock item={currentPerson} type="Person" imgSrc={personImg}/>
                <Btn onClick={randomizePerson}>Randomize Character</Btn>
            </div>
            <div style={{"float":"right", justifyContent:"center", textAlign: "center"}}>
                <ItemBlock item={currentPlanet} type="Planet" imgSrc={planetImg}/>
                <Btn onClick={randomizePlanet}>Randomize Planet</Btn>
            </div>
            <FooterText>Images are placeholders--I still need to get the Google Image Search API to work!</FooterText>
        </div>
};

export default SwapiTest;