import { Request, Response, Router } from "express";
const Submit = Router();

import client from "../db"
import { Schema, string, z } from "zod";

interface teammembername {
    name : string
}

import { FormSchmema } from "../types";
import { FormSchmematype } from "../types";





Submit.post("/submit-idea" , async (req: Request , res : Response) : Promise<any>=> {

    const  formsuccess = FormSchmema.safeParse(req.body)
   
     if(!formsuccess.success){
        return res.status(403).json({
            error : formsuccess.error.format()
        })
     }


    const { name , contactEmail , description , teamMembers  } : FormSchmematype = req.body 

    try {
      const response =   await client.forms.create({
        data: {
            name,
            contactEmail,
            description,
            teamMembers: {   
              create: teamMembers.map((member : {name : string})  => ({
                name: member.name,
    
              })),
            },
          }
        })

       
        return res.json({
         message : "Submitted Succesfully"
        })
        
    }catch(e ) {
        console.log(e);
        return res.status(500).json({
          msg: "Intenal server eroor ",
        });
      }  

})



export default Submit