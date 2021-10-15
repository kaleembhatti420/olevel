"use strict";
// Importing
import { data } from "./homeData.js";

/////////////////////////////////////////////
// Changing 1 cambridge image
const loadCamImg = async function () {
  const cambridgeImage = document.querySelector(".info-image-container");

  const img = await document.createElement("img");
  img.setAttribute("scr", "./images/transition.jpg");

  cambridgeImage.style.backgroundImage = "url('./images/transition.jpg')";
  cambridgeImage.style.filter = "blur(0)";
};

loadCamImg();

/////////////////////////////////////////////
// Loading all 8 other images
const itemContainer = document.querySelector(".item-hidding");

const allItemsRN = document.querySelectorAll(".item");

const finalFunc = async function () {
  data.forEach((ele, i) => {
    //   console.log(ele);
    //   console.log(allItemsRN);

    allItemsRN.forEach((item, index) => {
      if (item.className == `item item-${ele.itemNum}`) {
        const imgNew = document.createElement("img");
        imgNew.setAttribute("scr", ele.imgPath);

        //   item.style.background = `url(${ele.imgPath});`;

        item.style.backgroundImage = `url(${ele.imgPath})`;
      } else {
        // console.log(`Problem`);
      }
    });
  });
};


finalFunc();