import React, {useRef, useState, useEffect, Component} from 'react'
import styles from './magic-mirror.module.css'
import cx from 'classnames'
import * as faceapi from 'face-api.js';
import Helmet from 'react-helmet'

const MagicMirror = () => {
        
    useEffect(() => {
        alert("I haven't quite gotten this to work outside the VS Code live server. Please come back later!")
    }, [])

    let aspect = 1;
    
    const videoRef = useRef(null);

    let [showMagic, setShowMagic] = useState(false);

    let cameraOn = false;

    function startVideo() {
        console.log("starting video")
        navigator.getUserMedia(
            { video: {} },
            stream => {
            // console.log(stream);
            // console.log(stream.getVideoTracks()[0].getSettings());
            aspect = stream.getVideoTracks()[0].getSettings().aspectRatio;
            // console.log(aspect);
            cameraOn = true; // startCamWarning.remove();
            console.log('CameraOn True')
            while(! videoRef.current){
                continue
            }
            videoRef.current.srcObject = stream;
            console.log("all started.")

            // videoRef.current.addEventListener('play', () => {
            videoRef.current.onplay = detectDraw;
            // )
            console.log(videoRef.current)


            },
            err => console.error(err)
        )

    }

    const toggleMagic = () => {
        setShowMagic(!showMagic);
    // console.log(showMagic);
    };

    function detectDraw () {
        console.log("initializing canvas")

        const canvas = faceapi.createCanvasFromMedia(videoRef.current);
        canvas.setAttribute("className", cx(styles.canvas, styles.mirrored));
        document.body.append(canvas);


        setInterval(async () => {
            var minsize = Math.min( Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            Math.max(document.documentElement.clientHeight, window.innerHeight || 0) );
            
            console.log(minsize);

            let displaySize = { width: minsize*.5*aspect, height: minsize*.5 }

            console.log(displaySize);

            videoRef.current.setAttribute('width', displaySize.width);
            videoRef.current.setAttribute('height', displaySize.height);
            
            // console.log(videoRef.current);
            // console.log(canvas);
            faceapi.matchDimensions(canvas, displaySize)
            
            const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
            const resizedDetections = faceapi.resizeResults(detections, displaySize)
            // console.log(resizedDetections);
            canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height) // clear drawings between each re render
            
            if(showMagic){
            // faceapi.draw.drawDetections(canvas, resizedDetections)
            faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
            // faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
            }
        }, 100)
    };

    const model_url = '/assets/face-api/models'
    
    Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(model_url),
        faceapi.nets.faceLandmark68Net.loadFromUri(model_url),
        faceapi.nets.faceRecognitionNet.loadFromUri(model_url),
        faceapi.nets.faceExpressionNet.loadFromUri(model_url)
    // ]).then(startVideo)
    ]).then(() => {console.log("promises met"); startVideo()}) 
    
    console.log("got till event listener")
    console.log(videoRef.current)

    // useEffect(() => {
    //     console.log("Rerender")
    // })

    return <div className={styles.body}>
        <Helmet>
            <title>Magic Mirror</title>
        </Helmet>
        <h1 className={styles.h1}>"MAGIC MIRROR"</h1>
        
        <h3 className={styles.h3} style={{position:"absolute", bottom:"0", top:"15vh", color:"#d5e1e3",}}>CREATED USING <a style={{color:"#d5e1e3"}} href="https://github.com/justadudewhohacks/face-api.js/">FACE-API</a></h3>
        
        <video className={cx(styles.video, styles.mirrored)} id="video" ref={videoRef} width="100vmin" height="100vmin" autoPlay="" muted=""></video>
        
        {!cameraOn && <h2 className={styles.h2}>MAKE SURE<br/>A) you are on desktop<br/>B) you have a webcam and<br/>C) your browser allows me to use it!</h2>}
        
        <button className={styles.btn} onClick={toggleMagic}>SHOW ME MAGIC</button>
        
        <h3 className={styles.h3}>BEWARE: MAGIC MIRROR MAY SEE THE UNSEEN.<br/>® 2020</h3>
    </div>;
      
};

export default MagicMirror;