import { useState } from 'react';
import Card from '../Card/Card';
import "./form.css";

export const Form = () => {
  const [track, setTrack] = useState({ trackName: '', trackArtist: '' });
  const [isValid, setIsValid] = useState(true); // Estado para controlar la validación
  const [formSubmitted, setFormSubmitted] = useState(false); // Estado para controlar la renderización del Card

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    
    if (track.trackName.length < 3 || track.trackName.startsWith(' ')) {
      valid = false;
    }
    if (track.trackArtist.length < 6) {
      valid = false;
    }

    setIsValid(valid);
    setFormSubmitted(true); // Indica que el formulario ha sido enviado

    if (valid) {
      console.log('Formulario válido', track);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrack(prevTrack => ({
      ...prevTrack,
      [name]: value
    }));
    if (formSubmitted) { // Restablece el estado al modificar el formulario después de un envío
      setIsValid(true);
      setFormSubmitted(false);
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="track_name">Nombre de la canción: </label>
        <input type="text" name='trackName' id='trackname' value={track.trackName} onChange={handleChange} />
        <label htmlFor="track_artist">Artista de la canción: </label>
        <input type="text" name='trackArtist' id='track_artist' value={track.trackArtist} onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>
      {!isValid && <div className='error-card'>Por favor chequea que la información sea correcta.</div>}
     {formSubmitted && isValid && <Card track={track} />}
    </div>
  );
};