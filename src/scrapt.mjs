import KeyvRedis, { createClient } from "@keyv/redis";
import Keyv from "keyv";
import puppeteer from "puppeteer";
const redis = createClient('redis://user:pass@localhost:6379');
const keyvRedis = new KeyvRedis(redis);
const keyv = new Keyv({ store: keyvRedis});

export const scrap = async (url) => {
    const existData=await keyv.get(url);
    if(existData){
        console.log("data is existing");
        return existData;
    }
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    const content = await page.content();
    keyv.set(url,content);
    return content;
};

