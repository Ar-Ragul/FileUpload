import FileUploadPage from "./fileUpload.js";
import fileFetch from "./fileFetch.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <FileUploadPage />
      <fileFetch />
    </div>
  );
}

export default App;
