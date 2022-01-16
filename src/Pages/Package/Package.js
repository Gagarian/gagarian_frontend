import React, { useEffect } from "react";
import Main from "../../Layouts/Main";
import PackageCard from "../../Components/PackageCard";
import RelatedProduct from "../../Components/RelatedProduct";
import { useSelector, useDispatch } from "react-redux";
import { retrievecatagories } from "../../Services/Slices/catagoriesSlice";
import {
  getProducts,
  clearState,
  productSelector,
} from "../../Services/Slices/productSlice";
import { Link } from "react-router-dom";

const Package = () => {
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
              <div>
                <section
                  class="
   bg-white
   pt-20
   lg:pt-[120px]
   pb-12
   lg:pb-[90px]
   relative
   z-20
   overflow-hidden
   "
                >
                  <div class="container">
                    <div class="flex flex-wrap -mx-4">
                      <div class="w-full px-4">
                        <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                          <span class="font-semibold text-lg text-primary mb-2 block"></span>
                          <h2
                            class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                          >
                            Package Plan
                          </h2>
                          <p class="text-base text-body-color">
                            Gagarian presents easy and attractive packages.
                            Choose based on your preference for additinal
                            package navigate to contact us on bottom of this
                            page.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-wrap justify-center -mx-4">
                      {/* component here */}
                      <PackageCard />
                      <PackageCard />
                      <PackageCard />
                      <PackageCard />
                      <PackageCard />
                    </div>
                  </div>
                </section>
              </div>
              <div className="flex flex-wrap -m-4 justify-between">
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

export default Package;
