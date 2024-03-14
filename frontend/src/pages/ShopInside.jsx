import React, { useEffect, useState } from "react";
import Products from "../images/food6.jpg";
import Header from "../components/Header/Header";
import { useParams } from "react-router";
import GradientOpen3 from "../components/Organic Items/Content/GradientOpen3";
import { motion } from "framer-motion";
import "./product.css";

const ShopInside = ({ nuts, fetchNuts, snacks, fetchSnacks, sweetners, fetchSweetners, fetchCartItems, cartItems }) => {
  const param = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (param.id === "Nuts & Seeds") {
      fetchNuts();
    }
    else if (param.id === "Snacks") {
      fetchSnacks();
    }
    else if (param.id === "Sweetners") {
      fetchSweetners();
    }
  }, [param.id]); // param.id as dependency

  useEffect(() => {
    if (param.id === "Nuts & Seeds") {
      setItems(nuts);
    }
    else if (param.id === "Snacks") {
      setItems(snacks);
    }
    else if (param.id === "Sweetners") {
      setItems(sweetners);
    }
  }, [nuts, snacks, sweetners, param.id]); // nuts, snacks, sweetners as dependencies




  // useEffect(() => {
  //     fetchCartItems();
  //     setCart(cartItems);
  // }, []);


  // const handleEnter = (event) => {
  //     if (event.code === "Enter") {
  //         handleClick();
  //     }
  // };

  // const handleClick = (id) => {
  //   if (id !== "") {
  //       fetch(`http://localhost:5012/list`, {
  //           method: "POST",
  //           body: JSON.stringify({ productId: id }),
  //           headers: {
  //               "Content-type": "application/json",
  //           },
  //       })
  //       .then((res) => res.json())
  //       .then((data) => {
  //           console.log(data);  // Log the response data, not 'id'
  //           // Assuming setCart is a function that updates the cart state
  //           // Make sure setCart is defined and does what you intend
  //           setCart();  
  //       })
  //       .catch((error) => {
  //           console.error(error);
  //           // Handle any error that occurred during the fetch
  //       });
  //   } else {
  //       alert("Input is Empty");
  //   }
  // };


  // const handleDoubleClick = (id) => {
  //     {
  //         fetch(`http://localhost:5000/list/${id}`, {
  //             method: "DELETE",
  //         })
  //             .then((res) => res.json())
  //             .then((data) => {
  //                 console.log(data);
  //                 getCart();
  //             });
  //     }
  // };

  // for cart

  const [productsInCart, setProducts] =
    useState(
      JSON.parse(
        localStorage.getItem(
          "shopping-cart"
        )
      ) || []
    );
  useEffect(() => {
    localStorage.setItem(
      "shopping-cart",
      JSON.stringify(productsInCart)
    );
  }, [productsInCart]);
  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProducts([
      ...productsInCart,
      newProduct,
    ]);
  };

  const onQuantityChange = (
    productId,
    count
  ) => {
    setProducts((oldState) => {
      const productsIndex =
        oldState.findIndex(
          (item) =>
            item.id === productId
        );
      if (productsIndex !== -1) {
        oldState[productsIndex].count =
          count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (product) => {
    setProducts((oldState) => {
      console.log(setProducts)

      const productsIndex =
        oldState.findIndex(
          (item) =>
            item.id === product.id
        );


      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };



  return (
    <div>
      <Header
        productsInCart={productsInCart}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
        Cart={cartItems} fetchCart={fetchCartItems}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 1 / 10,
        }}
      >
        <div className="pt-[115px]">
          <div className="h-[500px] w-[100%] mt-[-1px] border-black bg-[#edf3ce] ">
            <div className="absolute bg-[#deb78379] h-[455px] w-[720px] mt-[40px] ml-[-70px] rounded-[45px] ">
              <img
                src={Products}
                className="absolute h-[400px] rounded-[25px] mt-[26px] ml-[45px]"
              />
            </div>
            <div className="ml-[730px] pt-[100px] w-[540px] font-Coda font-light text-[#848a39]">
              <div className="border-[9px] border-[#848a39] p-[13px] rounded-[17px]">
                <h1 className="text-[51pt] border-b-[2px]">
                  {param.id}
                  <br />
                  Species
                </h1>
                <p className="mt-[25px]">
                  They are rich in vitamins, minerals, and antioxidants, and have
                  a natural flavor and color.
                </p>
              </div>
            </div>
          </div>
        </div>
        <GradientOpen3 />
        <div>
          <section className="py-16 z-30 font-Barlow font-bold pt-[30px]">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[20px] max-w-sm mx-auto md:max-w-none md:max-0">
                {items?.length ? (
                  items.map((items) => (
                    <div className="border-[2px] rounded-[12px] bg-[#ebedec]  border-[#d6d6d6] h-[440px] w-[270px] mb-4 overflow-hidden group transition hover:border-[#428627]">
                      <div class="product-box">
                        <div class="product-item">
                          <div className="w-[180px] mx-auto h-[330px] flex justify-center items-center ">
                            <img
                              className="max-h-[280px] group-hover:scale-110 transition duration-300"
                              src={
                                "http://localhost:5012/" +
                                items.imageFolder +
                                "/" +
                                items.image
                              }
                              alt=""
                            />
                          </div>
                          <div class="overlay-c"></div>
                          <div class="product-desc h-[175px] border-b-[2px] ">
                            <button onClick={() => addProductToCart(items)}>
                              <div className="bg-white w-[50px] h-[50px] pt-[10px] ml-[-65px] mx-auto rounded-[7px] hover:bg-[#efffb5]">
                                <i
                                  class="fa-duotone fa-cart-circle-plus fa-2xl mt-[20px]"
                                  style={{
                                    "--fa-primary-color": "#046604",
                                    "--fa-secondary-color": "#046604",
                                  }}
                                ></i>
                              </div>
                            </button>
                            <div className="absolute bg-white w-[50px] h-[50px] pt-[14px] mt-[-50px] ml-[135px] mx-auto rounded-[7px]">
                              <i
                                class="fa-duotone fa-circle-info fa-2xl"
                                style={{
                                  "--fa-primary-color": "#006515",
                                  "--fa-secondary-color": "#006515",
                                }}
                              ></i>
                            </div>
                          </div>

                          <div className="bg-white rounded-[7px] mt-[5px] text-[15pt] font-Barlow font-bold text-left pl-[20px] h-[110px] text-[#000]">
                            <p className="absolute mt-[5px] mb-[3px]">
                              {items.name}
                            </p>
                            <div className="absolute font-normal mt-[40px]">
                              From
                              <div className="font-bold ml-[0px]">
                                Rs: {items.price}
                                <strike className="ml-[8px] font-normal">
                                  {items.discPrice}
                                </strike>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <td
                    className="border px-4 py-2 text-center "
                    rowSpan={10}
                    colSpan={10}
                  >
                    No Data Found
                  </td>
                )}
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default ShopInside;
