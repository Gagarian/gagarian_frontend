import React from "react";
import { useNavigate } from "react-router-dom";

const ItemCard = ({
  id,
  name,
  slug,
  available,
  price,
  description,
  image1,
  image2,
  image3,
  category,
}) => {
  let navigate = useNavigate();
  let Birr = "Birr";
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={`https://gagarianrest.herokuapp.com${image1}`}
            // style={{
            // 	background:
            // 		"url( https://gagarianrest.herokuapp.com" + `${image1}` + ")",
            // 	// background: "url( https://dummyimage.com/600x400/)",
            // 	backgroundPosition: "center",
            // 	backgroundSize: "cover",
            // 	backgroundRepeat: "no-repeat",
            // }}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {name}
            </h1>
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {category.name}
            </h2>
            <br></br>
            <b>
              <hr className="font-medium"></hr>
            </b>
            <p className="leading-relaxed">{description}</p>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                {price + " " + Birr}
              </span>
              <button className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemCard;
