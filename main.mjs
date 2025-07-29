// fetch("https://www.mollyjogger.com/")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

import { parseData } from "./src/parse.mjs";
import { scrap } from "./src/scrapt.mjs";

const scraptData=await scrap('https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit');
const data=await parseData(scraptData);
console.log(data);