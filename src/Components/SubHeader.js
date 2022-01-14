import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
const SubHeader = ({ toggle, handleTG }) => {
  let navigate = useNavigate();
  const handleToggle = (index) => {
    handleTG(index);
  };

  return (
    <div>
      <div className=" flex items-center justify-center py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden">
        <div className="tabs">
          <a
            onClick={() => {
              handleToggle(0);
              // navigate(`/`);
            }}
            className={`${
              toggle === 0 ? "tab-active" : " "
            } tab  tab-lg tab-lifted`}
          >
            All
          </a>
          <a
            onClick={() => {
              handleToggle(1);
            }}
            className={`${
              toggle === 1 ? "tab-active" : " "
            } tab  tab-lg tab-lifted`}
          >
            እንጀራ Injera
          </a>
          <a
            onClick={() => {
              handleToggle(2);
            }}
            className={`${
              toggle === 2 ? "tab-active" : " "
            } tab  tab-lg tab-lifted`}
          >
            ዳቦ Bread
          </a>
          <a
            onClick={() => {
              handleToggle(3);
            }}
            className={`${
              toggle === 3 ? "tab-active" : " "
            } tab  tab-lg tab-lifted`}
          >
            ጠላ Tela
          </a>
          <a
            onClick={() => {
              handleToggle(4);
            }}
            className={`${
              toggle === 4 ? "tab-active" : " "
            } tab  tab-lg tab-lifted`}
          >
            Other
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
