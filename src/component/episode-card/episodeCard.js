import React from 'react'
import { useHistory } from 'react-router-dom';

function EpisodeCard({episode}) {
    const history = useHistory();
    const goToEpisode = (e)=>{
        history.push('/character?id='+episode.id);
    };
    return (
        <div>
            <a class="list-group-item list-group-item-action" onClick={goToEpisode} >
            <div class="d-flex w-100 justify-content-between"  >
                <h5 class="mb-1">{episode.episode} - { episode.name }</h5>
                <small> { episode.air_date }</small>
            </div>
            </a>
        </div>
    )
}

export default EpisodeCard
