import React, { useEffect } from "react";
import Main from "../../Layouts/Main";
import ItemCard from "../../Components/ItemCard";
import { useSelector, useDispatch } from "react-redux";
import { retrievecatagories } from "../../Services/Slices/catagoriesSlice";

const Item = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrievecatagories());
    // console.log(x);
  }, [dispatch]);
  return (
    <div>
      <Main>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
              <ItemCard />
            </div>
          </div>
        </section>
      </Main>
    </div>
  );
};

export default Item;
