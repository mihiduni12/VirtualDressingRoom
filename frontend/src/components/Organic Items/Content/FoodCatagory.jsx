import React, { useEffect } from "react";
import Nuts from '../../../pages/Shop'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


const FoodCatagory = ({ items, fetchItems }) => {
    // get rpoducts from the product contexst
    // const { product } = useContext(productContext)
    // console.log(product);

    // // only get from the Nuts catagory
    // const filteredProducts = product.filter(
    //     (item) => {
    //         return item.category === "Nuts"
    //     }
    // )
    useEffect(() => {
        fetchItems()
    }, [])

    return (

        <div>
            
            <div>
                <div className="absolute text-[#000000] transition-shadow text-center font-Protest w-[100%] top-[-10px] text-[36pt] tracking-wide">
                    Natural Food Catagories
                               
                </div> 
                <div>

                    <section className="py-16 z-30 font-Barlow font-bold pt-[120px]">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[10px] max-w-sm mx-auto md:max-w-none md:max-0">
                                {/* {filteredProducts.map(product => {
                                    <div className="w-full h-[300px] bg-purple"></div>
                                    return <div key={product.id}> {product.title} </div>


                                })} */}
                                {items?.length
                                    ?
                                    items.map((items) => (
                                        <div  className='border-[2px] rounded-[9px] bg-[#edf0efc9]  border-[#ffffff] h-[410px] w-[270px] mb-4 overflow-hidden group transition'>
                                        <Link to={'/shopInside/' + items.name}>   
                                            <div className="w-full h-full pt-[10px]" >
                                                <div className="w-[200px] mx-auto h-[330px] flex justify-center items-center ">
                                                    <img className="max-h-[310px] group-hover:scale-110 transition duration-300" src={'http://localhost:5012/catagories/' + items.image} alt="" />
                                                </div>
                                                    <div href="#" className="mt-[5px] text-[15pt] text-center h-[50px]">{items.name}</div>
                                            </div>
                                            </Link>
                                        </div>




                                    )) :
                                    <td className="border px-4 py-2 text-center " rowSpan={10} colSpan={10}>No Data Found</td>
                                }
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div >
    );
}

export default FoodCatagory;
