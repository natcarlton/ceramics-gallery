import React from 'react';
import './App.css';
import {FileUploadField} from "./FileUpload/FileUploadField";
import {ShowFiles} from "./showFiles";


function App() {
  return (
    <div className="App">
      HELLO WORLD
        <FileUploadField />
        <ShowFiles />
    </div>
  );
}

export default App;
