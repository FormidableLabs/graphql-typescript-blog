import React, { useState } from "react";
import "./App.css";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

const App: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<number>();
  return (
    <div className="App">
      <header className="App-header">
        <h1>An app of the seven kingdoms</h1>
      </header>
      <div className="Character-wrapper">
        <CharacterList setSelectedCharacter={setSelectedCharacter} />
        <CharacterDetail
          selectedCharacter={selectedCharacter}
          setSelectedCharacter={setSelectedCharacter}
        />
      </div>
    </div>
  );
};

export default App;
