import { acData } from "./ac";
import { tvData } from "./tv";
import { mobileData } from "./mobiles";
import { fridgeData } from "./fridge";
import { watchData } from "./watch";
import { computerData } from "./computer";
import { BeautyData } from "./beauty";
import { womanData } from "./women";
import { menData } from "./mens";

// Combine all product categories
export const allProducts = [
  ...acData,
  ...tvData,
  ...mobileData,
  ...fridgeData,
  ...watchData,
  ...computerData,
  ...BeautyData,
  ...womanData,
  ...menData
];
