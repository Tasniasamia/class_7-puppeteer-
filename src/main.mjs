import pkg from '@prisma/client';
import { scrap } from './scrapt.mjs';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();


  console.log(await prisma.Page.count());

  await prisma.page.create({
    data: {
      url: 'https://www.mollyjogger.com/collections/inventory/products/scrimshaw-heirloom-knife-kit',
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
    const pendingData=await prisma.page.findFirst({
        where:{parseStatus:'PENDING'}
    })
    if(pendingData){
        const datas=await scrap(pendingData?.url);
        await prisma.Page.update({
            where:{id:pendingData?.id},
            data:{
               scraptStatus:"DONE",
               scrapData:datas
             }
            
        })
    }
    await new Promise((resolve,reject)=>{setTimeout(resolve,3000)})
  }



