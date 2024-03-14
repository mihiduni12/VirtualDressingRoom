import { useRef, useState } from "react";
import axios from 'axios';
import { motion } from "framer-motion";

const AddItemsCatagory = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [discPrice, setDiscPrice] = useState('');
    const [files, setFiles] = useState(null);
    const inputRef = useRef();
    // console.log(inputRef.current.files[0]);

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files)
    };

    // send files to the server // learn from my other video
    const handleUpload = async (e) => {
        const formdata = new FormData()
        formdata.append('file', files[0])
        formdata.append('name', name);
        formdata.append('price', price);
        formdata.append('discPrice', discPrice);
        try {
            const response = await axios.post('http://localhost:5012/Nuts&Seeds', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
        } catch (error) {
            console.error("Error adding category:", error);
        }
    }

    return (
        <div>
            <div>
                <div id="logInBox" className="w-[370px] h-[40%] text-center min-h-67vh my-70px bg-[rgb(225,225,225)] rounded-[20px] mx-auto mt-[70px]">
                <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: .8,
                                delay: 1 / 10,
                            }}>
                    <div className="mainContent">
                        <div className="headerAndInputs text-center pt-[20px]">
                            <h3 className="text-[25pt] mb-[10px]">Add a new Item</h3>

                            <form onSubmit={handleUpload}>
                                <div className="inputBoxes">
                                    <input type="text" name="name" htmlFor="name" 
                                        onChange={(e) => setName(e.target.value)} placeholder="Name of the Item" className="border-none pl-[10px] p-y-[40px] text-[12pt] mb-[3px] mt-[10px] rounded-[10px] bg-[rgba(255, 255, 255, 0.6)] h-[40px] w-[320px] hover:bg-[rgb(255,255,255)]" id="name" />
                                    <input type="text" name="price" htmlFor="price" 
                                        onChange={(e) => setPrice(e.target.value)} placeholder="Price of the Item" className="border-none pl-[10px] p-y-[40px] text-[12pt] mb-[3px] mt-[10px] rounded-[10px] bg-[rgba(255, 255, 255, 0.6)] h-[40px] w-[320px] hover:bg-[rgb(255,255,255)]" id="name" />
                                    <input type="text" name="discPrice" htmlFor="discPrice" 
                                        onChange={(e) => setDiscPrice(e.target.value)} placeholder="Discount price of the Item" className="border-none pl-[10px] p-y-[40px] text-[12pt] mb-[3px] mt-[10px] rounded-[10px] bg-[rgba(255, 255, 255, 0.6)] h-[40px] w-[320px] hover:bg-[rgb(255,255,255)]" id="name" />

                                    <div
                                        className="flex flex-col justify-center h-[300px] border-[5px] border-dashed border-[#282727] mx-[20%] mt-[20px] mb-[20px]"
                                        onDragOver={handleDragOver}
                                        onDrop={handleDrop}
                                    >
                                        <h1>Drag and Drop Files to Upload</h1>
                                        <h1>Or</h1>
                                        <input
                                            type="file"
                                            multiple
                                            onChange={(event) => setFiles(event.target.files)}
                                            hidden
                                            accept="image/png, image/jpeg"
                                            ref={inputRef}
                                        />
                                        <button type="button" onClick={() => inputRef.current.click()}>Select Files</button>
                                    </div>
                                </div>
                                {files && (
                                    <div className="uploads">
                                        <ul>
                                            {Array.from(files).map((file, idx) => <li className="font-[12pt]" key={idx}>{file.name}</li>)}
                                        </ul>
                                        <div className="actions ">
                                            <button className="rounded-[7px] p-[7px] bg-[#e9eda1] mb-[0]" onClick={() => setFiles(null)}>Cancel</button> <br />
                                            <br />
                                        </div>
                                    </div>
                                )}
                                <button className="rounded-[7px] w-[300px] p-[6px] text-[#fff] bg-[#c33636] mt-[0] mb-[20px]" type="submit" >Submit</button>
                            </form>
                            {/* </form> */}
                        </div>
                    </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );

}
export default AddItemsCatagory;
