import React, { useEffect, useState } from 'react';

function CharacterCard({ url }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [character, setCharacter] = useState([]);
    useEffect(() => {
        loadChar(url);
    }, [url]);
    const loadChar = (e) => {
        fetch(e)
            .then(res => res.json())
            .then(result => {
                setIsLoaded(true);
                setCharacter(result);
            });
    };
    const divStyle = {
        width: '440px'
    };
    if (isLoaded) {
        return (
            <div className="card mb-3 m-2" style={divStyle}  >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={character?.image} className="card-img" alt={character?.name} />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{character?.name}</h5>
                            <p className="card-text"> {character?.status} - {character?.species} </p>
                            <p className="card-text"><small className="text-muted">{character?.location?.name} </small></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="card mb-3 m-2" style={divStyle} >
                <div className="d-flex justify-content-center" >
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }

}
export default CharacterCard;