import React, { useEffect, useState } from "react";
import Shop from "./pages/shop/Shop.jsx";
import FoodCatagory from "./components/Organic Items/Content/FoodCatagory.jsx";
import { Route, Router, Routes } from "react-router";
import ShopInside from "./pages/shop/ShopInside.jsx";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter } from "react-router-dom";
import Products from "./pages/shop/Products.jsx";
import axios from "axios";
import Admin from "./Admin/Admin.jsx";
import AddCatagory from "./Admin/AddCatagory.jsx";
import Image from "./components/Organic Items/Content/image.jsx";
import "./App.css";
import UpdateCatagory from "./Admin/UpdateCatagory.jsx";
import ItemsCatagory from "./Admin/ItemsCatagory.jsx";
import AddItemsCatagory from "./Admin/AddItemsCatagory.jsx";
import UpdateItemsCatagory from "./Admin/UpdateItemsCatagory.jsx";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  UserProfile,
  ClerkProvider,
} from "@clerk/clerk-react";
import SignInPage from "./components/Header/sign-in.jsx";
import UserProfilePage from "./components/Header/user-profile.jsx";
import TotalBill from "./pages/pay/TotalBill.jsx";
import Notification from "./pages/Noti/Notification.jsx";
import CardPayment from "./pages/pay/CardPayment.jsx";
import UploadSlip from "./pages/pay/UploadSlip.jsx";
import PaymentAdmin from "./pages/pay/PaymentAdmin.jsx";
import Eventpack from "./components/Bill/ddd.jsx";
import ArtCatorgeries from "./pages/Art/ArtCatorgeries.jsx";
import ArtHistorical from "./pages/Art/ArtHistorical.jsx";
import PaymentSuccess from "./pages/pay/Paymentsucess.jsx";
import SlipUploaded from "./pages/pay/SlipUploaded.jsx";
import Homepagee from "./pages/Hom/Homepagee.jsx";
import CarRental from "./pages/rent/CarRent.jsx";
import VanRental from "./pages/rent/VanRent.jsx";
import BusRental from "./pages/rent/BusRent.jsx";
import VehicalRental from "./pages/rent/VehicleRent.jsx";
import Cars from "./components/rental/Cars.jsx";
import AddCarForm from "./pages/rent/AddCarsForm.jsx";
import AdminCarList from "./pages/rent/AdminViewCars.jsx";
import CheckView from "./pages/rent/CheckView.jsx";
import UpdateCarForm from "./pages/rent/UpdateCarForm.jsx";
import AdminRentList from "./pages/rent/AdminViewRents.jsx";


import Virtual from "./pages/rent/Form.jsx";
import Vcloset from "./pages/rent/Closet.jsx";
import FitOn from "./pages/fit-on/FitOn.jsx";

const App = () => {
  console.disableYellowBox = true;


  axios.defaults.baseURL = `http://localhost:5012`;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepagee />} />
        <Route path="/checkout/card" element={<CardPayment />} />
        <Route path="/checkout/slip" element={<UploadSlip />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/uploaded" element={<SlipUploaded />} />
        <Route path="/home" element={<Homepagee />} />
        <Route path="/homee" element={<Homepagee />} />
        <Route path="/pay" element={<TotalBill />} />

        <Route path="/car" element={<CarRental />} />
        <Route path="/van" element={<VanRental />} />
        <Route path="/bus" element={<BusRental />} />
        <Route path="/Vform" element={<Virtual />} />
        <Route path="/closet" element={<Vcloset />} />
        <Route path="/Vehicle/:id" element={<VehicalRental />} />
        {/* <Route path="/vehicle" component={VehicalRental} /> */}

        <Route path="/car1" element={<CarRental />} />
        <Route path="/van1" element={<VanRental />} />
        <Route path="/bus1" element={<BusRental />} />
        <Route path="/car2" element={<CarRental />} />
        <Route path="/van2" element={<VanRental />} />
        <Route path="/bus2" element={<BusRental />} />
       




        <Route path="/Transport" element={<CarRental />} />
        <Route path="/add-car" element={<AddCarForm />} />
        <Route path="/update-car/:id" element={<UpdateCarForm />} />
        <Route path="/admin-view" element={<AdminCarList />} />
        <Route path="/admin-rent" element={<AdminRentList />} />
        <Route path="/check" element={<CheckView />} />


        <Route path="/upload" element={<FitOn/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
