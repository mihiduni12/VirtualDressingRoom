import { useEffect, useRef, useState } from "react";
import axios from 'axios';

const AddCatagory = () => {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [files, setFiles] = useState(null);
    const inputRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCatagory = { name, image }

        try {
            const response = await axios.post('/api/catagories', newCatagory);
            console.log(response);
        } catch (error) {
            console.error("Error adding catagory:", error);
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files)
    };

    // send files to the server // learn from my other video
    const handleUpload = (e) => {
        const formdata = new FormData()
        formdata.append('file', files[0])
        axios.post('http://localhost:5010/upload', formdata)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>           
            <form onSubmit={handleSubmit}>
                <div class="inputBoxes">
                    <input type="text" name="name" placeholder="Name of the Catagory" className="border-none pl-[10px] p-y-[40px] text-[12pt] mb-[3px] mt-[10px] rounded-[10px] bg-[rgba(255, 255, 255, 0.6)] h-[40px] w-[320px] hover:bg-[rgb(255,255,255)] transition-duration-70ms" id="name" />

                    <div
                        className="flex flex-col justify-center h-[300px] border-[5px] border-dashed border-[#282727] mx-[20%] mt-[20px]"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        <h1>Drag and Drop Files to Upload</h1>
                        <h1>Or</h1>
                        <input
                            type="file"
                            multiple
                            onChange={(event) => setFiles(event.target.files[0])}
                            hidden
                            accept="image/png, image/jpeg"
                            ref={inputRef}
                        />
                        <button onClick={() => inputRef.current.click()}>Select Files</button>
                    </div>
                </div>
                <button type="submit">Select Files</button>
            </form>
            {files && (
                <div className="uploads">
                    <ul>
                        {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li>)}
                    </ul>
                    <div className="actions">
                        <button onClick={() => setFiles(null)}>Cancel</button>
                        <button onClick={handleUpload}>Upload</button>
                        <br />
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddCatagory;
