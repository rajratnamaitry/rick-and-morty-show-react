import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from './../character-card/characterCard';
import {useLocation} from 'react-router-dom';

function CharacterList(props) {
    const [charactersList, setCharactersList] = useState([]);    
    const queryParam = new URLSearchParams(useLocation().search).get('id');
    useEffect(() => {
        goToPage("https://rickandmortyapi.com/api/episode/"+queryParam);
    }, []);
    const goToPage = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setCharactersList(result['characters']);
            })
    }
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/episode" >Episode List  </Link> </li>
                    <li className="breadcrumb-item active" aria-current="page">Character List</li>
                </ol>
            </nav>
            <div className="m-4">
                <div className="row">
                        {charactersList.map((item,i)=>(
                             <CharacterCard url={item}  key={i} ></CharacterCard> 
                        ))}
                </div>
            </div>
        </div>
    )
}

export default CharacterList
