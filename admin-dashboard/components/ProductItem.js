import React, { useEffect } from "react";
import Image from "next/image";
import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "../firebase/firebase";


export const ProductItem = () => {

  //FIXME: 
  // CHANGE THE BEHEAVIOR OF USE EFFECT 


  useEffect(() => {
    const addNewProduct = async () => {
      try {
        const docRef = await addDoc(collection(db, "products"), {
          name: "Tenis Nike",
          img: "",
          stock: true,
          price: 120,
        });
        console.log("Document written with ID: ", docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };
    // addNewProduct();
  }, []);
  

  
  
  return (
    <>
      <div className="flex flex-row justify-between p-4 items-center h-20">
        <span className="font-semibold text-lg">1</span>
        <div className="flex flex-row items-center">
          <Image src="/walking.svg" alt="Walking Logo" width={32} height={32} />
          <span className="font-semibold text-lg ml-2">Tenis Nike</span>
        </div>
        <span className="font-semibold text-lg">true</span>
        <span className="font-semibold text-lg">$120.00</span>
        <div className="flex flex-row items-center h-full">
          <span className="pt-1 pb-1 pl-3 pr-3 bg-green-400 rounded-lg mr-2">
            Edit
          </span>
          <Image
            src="/trashbin.svg"
            alt="Trashbin Logo"
            width={32}
            height={32}
          />
        </div>
      </div>
    </>
  );
};
