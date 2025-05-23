import { Request, Response, Router } from "express";
const Submit = Router();

import client from "../db"




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
  
       const checkemail = await client.forms.findFirst({
        where : {
          contactEmail : contactEmail
        }
       })

       if(!checkemail){
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

          return res.status(200).json({
            message : "Submitted Succesfully"
           })

       }else {
        return res.status(403).json({
          message : "Email already exist"
        })
       }
  



        
    }catch(e ) {
        console.log(e);
        return res.status(500).json({
          msg: "Email already exist ",
        });
      }  

})



export default Submit
