import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./AlbumPage.css"; 
import Card from "./card";  

function AlbumPage() {
    const { id } = useParams();  
    const location = useLocation();
    const [tracks, setTracks] = useState([]);
    const album = location.state?.album;

    useEffect(() => {
        if (!id) return; 
        
        fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`)
            .then(res => res.json())
            .then(data => {
                if (data.results.length > 1) {
                    setTracks(data.results.slice(1)); 
                }
            })
            .catch(err => console.error("Erreur API :", err));
    }, [id]);

    if (!album) {
        return <h2>Aucun album sélectionné.</h2>;
    }

    return (
        <div className="album-page">
            <h1>{album.collectionName}</h1>
            <h2>{album.artistName}</h2>
            <img src={album.artworkUrl100.replace("100x100", "300x300")} alt={album.collectionName} />
            <h3>Liste des titres :</h3>
            {tracks.length === 0 ? <p>Chargement des morceaux...</p> : (
                <ul className="track-list">
                    {tracks.map((track) => (
                        <li key={track.trackId}>
                            {track.trackName}  
                            <audio controls>
                                <source src={track.previewUrl} type="audio/mp4" />
                                Votre navigateur ne supporte pas l'audio.
                            </audio>
                        </li>
                    ))}
                </ul>
            )}
            <Card /> 
        </div>
    );
}

export default AlbumPage;
