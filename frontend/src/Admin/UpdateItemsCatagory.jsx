import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router";
import { motion } from "framer-motion";

const UpdateItemsCatagory = () => {

    const { id } = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [discPrice, setDiscPrice] = useState('');
    const [image, setImage] = useState('');
    const [imageFolder, setImageFolder] = useState('');
    const [files, setFiles] = useState(null);
    const [isCancelled, setIsCancelled] = useState(false);
    const inputRef = useRef();
    console.log(inputRef.current);

    useEffect(() => {
        if (id) {
            console.log('here');
            fetchItemsCatagory();
        }
    }, [id]);

    const fetchItemsCatagory = async () => {
        try {
            const response = await axios.get(`/api/products/${id}`);
            setName(response.data.data[0].name);
            setImage(response.data.data[0].image);
            setImageFolder(response.data.data[0].imageFolder);
            setPrice(response.data.data[0].price);
            setDiscPrice(response.data.data[0].discPrice);
            
        } catch (error) {
            console.error(`Error fetching products:`, error);
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files)
    };

    // send files to the server
    const handleUpload = async (e) => {
        const formdata = new FormData()
        formdata.append('file', files[0])
        formdata.append('name', name);
        formdata.append('price', price);
        formdata.append('discPrice', discPrice);
        try {
            const response = await axios.put(`http://localhost:5012/products/${id}`, formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error("Error status:", error.response.status);
                console.error("Error data:", error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error("No response received:", error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error("Error message:", error.message);
            }
            console.error("Error config:", error.config);
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
                                duration: 1.5,
                                delay: 1 / 10,
                            }}>
                    <div className="mainContent">
                        <div className="headerAndInputs text-center pt-[20px]">
                            <h3 className="text-[25pt] mb-[10px]">Update the item</h3>

                            <form onSubmit={handleUpload}>
                                <div className="inputBoxes">
                                    <input type="text" name="name" htmlFor="name" value={name}
                                        onChange={(e) => setName(e.target.value)} placeholder="Name of the item" className="border-none pl-[10px] p-y-[40px] text-[12pt] mb-[3px] mt-[10px] rounded-[10px] bg-[rgba(255, 255, 255, 0.6)] h-[40px] w-[320px] hover:bg-[rgb(255,255,255)] transition-duration-70ms" id="name" />
                                    <input type="text" name="price" htmlFor="price" value={'Rs:' + price}
                                        onChange={(e) => setPrice(e.target.value)} placeholder="Price of the item" className="border-none pl-[10px] p-y-[40px] text-[12pt] mb-[3px] mt-[10px] rounded-[10px] bg-[rgba(255, 255, 255, 0.6)] h-[40px] w-[320px] hover:bg-[rgb(255,255,255)] transition-duration-70ms" id="name" />
                                    <input type="text" name="discPrice" htmlFor="discPrice" value={discPrice}
                                        onChange={(e) => setDiscPrice(e.target.value)} placeholder="Discount Price of the item" className="border-none pl-[10px] p-y-[40px] text-[12pt] mb-[3px] mt-[10px] rounded-[10px] bg-[rgba(255, 255, 255, 0.6)] h-[40px] w-[320px] hover:bg-[rgb(255,255,255)] transition-duration-70ms" id="name" />
                                    {isCancelled && (
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
                                            <button type="button" onClick={(e) => inputRef.current.click()}>Select Files</button>
                                        </div>
                                    )}
                                </div>
                                {!isCancelled && (
                                    <div className="uploads">
                                        <ul>
                                            <img className="h-[160px] text-center mx-auto mt-[10px]" src={`http://localhost:5012/`+ imageFolder + '/' + image} alt="" />
                                            {image}
                                        </ul>
                                        <div className="actions ">
                                            <button type="button" className="rounded-[7px] p-[7px] bg-[#e9eda1] mb-[0]" onClick={() => setIsCancelled(true)}>Cancel</button> <br />
                                            <br />
                                        </div>
                                    </div>
                                )}
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
export default UpdateItemsCatagory;
