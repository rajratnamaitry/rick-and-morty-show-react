import React, { useEffect, useState } from 'react';
import EpisodeCard from './../episode-card/episodeCard'

function EpisodeList() {
    const [error, setError] = useState(null);
    const [episodeList, setEpisodeList] = useState([]);
    const [info, setInfo] = useState({});

    useEffect(() => {
        goToPage("https://rickandmortyapi.com/api/episode/");
    }, [])
    const goToPage = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setEpisodeList(result['results']);
                setInfo(result.info);
            })
    }
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Episode List</li>
                </ol>
            </nav>
            <div className="container-fluid">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {
                            info?.prev ? <li className="page-item"><a className="page-link" onClick={(e)=>goToPage(info?.prev)} >Previous</a></li>:null
                        }
                        {
                            info?.next ? <li className="page-item"><a className="page-link" onClick={(e)=>goToPage(info?.next)} >Next</a></li> :null
                        }
                    </ul>
                </nav>
                {episodeList.map(item => (
                    <div className="list-group" key={item.name}>
                        <EpisodeCard episode={item} ></EpisodeCard>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EpisodeList
