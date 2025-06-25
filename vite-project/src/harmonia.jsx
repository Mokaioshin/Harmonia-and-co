import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "react-js-loader";
import "./Harmonia.css";
import PlaylistDrawer from "./PlaylistDrawer";


function Harmonia() {
    const [img, setImg] = useState([]); 
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 

    function fetchApi(searchTerm) {
        if (!searchTerm.trim()) return; 
        
        setLoading(true);
        setError("");
        setImg([]);

        fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&media=music&entity=album&limit=12`)
            .then(res => res.json())
            .then(data => {
                if (data.results.length > 0) {
                    setImg(data.results);
                } else {
                    setError("Aucun résultat trouvé.");
                }
            })
            .catch(err => {
                console.error("Erreur API :", err);
                setError("Erreur lors du chargement des données.");
            })
            .finally(() => setLoading(false));
    }

    return (
        <div className="result">
            
            <h1>Harmonia 🌙</h1>
            <h3>Le cloud musical de l'academie de Raya Lucaria 🎵</h3>
            
            
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && fetchApi(search)}
                placeholder="Cherchez un artiste ou un album..."
                aria-label="Recherche musicale"
                
            />
            <PlaylistDrawer />
            <button onClick={() => fetchApi(search)}>Rechercher</button>
            
            {loading && <Loader type="spinner-default" bgColor="#fff" color="#fff" title="Chargement ..." size={100} />}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {img.length > 0 && (
                <div className="album-grid"> 
                    {img.map((item, index) => (
                        <div 
                            key={index} 
                            className="card" 
                            onClick={() => navigate(`/harmonia/album/${item.collectionId}`, { state: { album: item } })} 
                        >
                            <img src={item.artworkUrl100.replace("100x100", "250x250")} alt={item.collectionName} />
                            <p><strong>{item.collectionName}</strong></p> 
                            <p>{item.artistName}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Harmonia;
