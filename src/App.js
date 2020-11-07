import React from 'react';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import EpisodeList from './component/episode-list/episodeList';
import './App.css';
import CharacterList from './component/character-list/characterList';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={["/","/episode"]} exact={true} >
            <EpisodeList></EpisodeList>
          </Route>
          <Route path="/character" >
            <CharacterList></CharacterList>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
