import SearchBar from "./components/SearchBar";
import BookData from "./Data.json";

import './App.css';

function App() {
  return (
    <div className="App">
       <SearchBar   data={BookData}/>
    </div>
  );
}

export default App;
