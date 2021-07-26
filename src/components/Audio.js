import React, {useState,useRef} from 'react'
import song from "../STEREO HEARTS  [Ringtone] _ My Heart's a Stereo Ringtone [Download Link]_256k.mp3"
function Audio() {
    const [audio, setAudio] = useState(false);
    const Ref = useRef();
    const playAudio = () => {
      Ref.current.play();
      setAudio(true);
    };
    const pauseAudio = () => {
      Ref.current.pause();
      setAudio(false);
    };
    return (
      <>
        <audio
          ref={Ref} src={song}
        />
        {audio ? (
          <button onClick={pauseAudio}>pause</button>
        ) : (
          <button onClick={playAudio}>play</button>
        )}
      </>
    );
  };
  export default Audio;