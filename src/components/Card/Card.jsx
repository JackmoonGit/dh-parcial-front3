import './Card.css'; // Asegúrate de crear un archivo CSS para los estilos

const Card = ({ track }) => {
  return (
    <div className="card">
      <h2>La canción fue agregada a la playlist correctamente:</h2>
      <p>Título de la canción: {track.trackName}</p>
      <p>Artista: {track.trackArtist}</p>
    </div>
  );
};

export default Card;