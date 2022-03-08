import React, {useState} from 'react';
import changeHandler from 'react';
import handleSubmission from 'react';

function App(){
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	return(
   <div>
			<input type="file" name="file" onChange={changeHandler} />
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
		</div>
	)
}
export default App;
