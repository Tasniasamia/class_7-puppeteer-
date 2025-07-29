import pkg from '@prisma/client';
import { scrap } from './scrapt.mjs';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();


  console.log(await prisma.Page.count());
 
  

    await prisma.Page.create({
        data: {
          url: "https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit",
          scrapData: "",
          scraptStatus: "PENDING",
          scrapError: "",
          parseData: "",
          parseError: "",
          parseStatus: "PENDING",
          title: "",
          content: ""
        }
      }).catch((err) => {
        console.log(err.message);
      });
  
    console.log(await prisma.Page.count());

  

  while(true){
    const pendingData=await prisma.Page.findFirst({
        where:{scraptStatus:"PENDING"}
    })
    if(pendingData){
        const data=await scrap(pendingData?.url);
       await prisma.Page.update({
            where:{url:pendingData?.url},
            data:{
                scraptStatus:"DONE",
                scrapData:data
            }
        });
    }
  }



