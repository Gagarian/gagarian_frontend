import React, { useEffect } from "react";
import Main from "../../Layouts/Main";
import ItemCard from "../../Components/ItemCard";
import RelatedProduct from "../../Components/RelatedProduct";
import { useSelector, useDispatch } from "react-redux";
import { retrievecatagories } from "../../Services/Slices/catagoriesSlice";
import {
  getProducts,
  clearState,
  productSelector,
} from "../../Services/Slices/productSlice";
import { Link } from "react-router-dom";

const Item = () => {
  const dispatch = useDispatch();
  const { result } = useSelector(productSelector);
  useEffect(() => {
    dispatch(getProducts());
    console.log(result);
  }, [dispatch]);

  return (
    <div>
      <Main>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <ItemCard />
              <div className="flex flex-wrap -m-4">
                {result !== null
                  ? result.map((item, index) => (
                      <RelatedProduct key={index} item={item} />
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </section>
      </Main>
    </div>
  );
};

export default Item;
