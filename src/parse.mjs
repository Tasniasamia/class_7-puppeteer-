import { JSDOM } from "jsdom";

export const parseData = async (html) => {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const title = document.querySelector('[itemprop="name"]')?.textContent;
  const price = document.querySelector('[itemprop="price"]')?.textContent;

  return { title,price };
};
