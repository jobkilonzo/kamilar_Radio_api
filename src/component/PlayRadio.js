import { Howl, Howler } from "howler"

import Button from 'react-bootstrap/Button';

function PlayRadio() {
    // src: "https://stream.zeno.fm/p0fulzmnnkdvv",

    var sound = new Howl({
        src: ['https://stream.zeno.fm/p0fulzmnnkdvv'],
        html5: true
    })
    //sound.play()

    
    return (
        <div className="">
           <Button variant="secondary" onClick={sound.play()}>Play Radio</Button>
           <Button variant="secondary" onClick={sound.stop()}>Stop Radio</Button>
        </div>
    )
}

export default PlayRadio