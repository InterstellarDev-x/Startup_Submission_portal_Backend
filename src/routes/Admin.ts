import { Request, Response, Router } from "express";
import { z } from "zod";
const Admin = Router();
import client from "../db";
import Jwt from "jsonwebtoken";
import AdminMiddlware from "../Middleware";
import { AdminSchema, FormSchmematype } from "../types";
const JWT_SECRET: string = "made-with-love";

type AdimnSchemaType = z.infer<typeof AdminSchema>;

interface FormSchmemaUpdate extends FormSchmematype {
    status : string
}


Admin.post("/login", async (req: Request, res: Response): Promise<any> => {
    const AdminSchemsScucess = AdminSchema.safeParse(req.body);

    if (!AdminSchemsScucess.success) {
        return res.status(403).json({
            error: AdminSchemsScucess.error.format(),
        });
    }

    const { email, password }: AdimnSchemaType = req.body;

    try {
        const response = await client.admin.findFirst({
            where: {
                email: email,
                password: password,
            },
        });

        if (!response) {
            return res.status(401).json({
                message: "INVALID CREDENTIALS",
            });
        }

        const token = Jwt.sign({ id: response.email }, JWT_SECRET, {
            algorithm: "HS256",
        });

        return res.status(200).json({
            msg: "you are signed in ",
            token: token,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            msg: "Intenal server eroor ",
        });
    }
});



Admin.use(AdminMiddlware);

Admin.get("/submissions", async (req: Request, res: Response): Promise<any> => {
    try {
        const response = await client.forms.findMany({
            include: {
                teamMembers: {
                    select: {
                        name: true,
                    },
                },
            },
        });

        return res.status(200).json({
            response,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "INTERNAL SERVER ERROR",
        });
    }
});

Admin.get(
    "/submissions/:id",
    async (req: Request, res: Response): Promise<any> => {
        const id: number = parseInt(req.params.id);

        try {
            const response = await client.forms.findFirst({
                where: {
                    Teamid: id,
                },
                include: {
                    teamMembers: {
                        select: {
                            name: true,
                        },
                    },
                },
            });


            res.status(200).json({
                response,
            });
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: "INTERNAL SERVER ERROR",
            });
        }
    }
);

Admin.put(
    "/submissions/:id",
    async (req: Request, res: Response): Promise<any> => {
        const id: number = parseInt(req.params.id);
        const { name , contactEmail , description , teamMembers  , status  } : FormSchmemaUpdate = req?.body 


          try {
            const   response  =   await client.forms.update({
                where : {
                    Teamid : id
                },
                data : {
                    name : name ,
                    contactEmail : contactEmail,
                    description : description,
                    status : status
                }
            })

           if(!response){
            return res.status(500).json({
                message : "can not update now "
            })
           }
    
           return  res.status(200).json({
                message : "Updated Successfully"
            })
          }catch (e) {
            console.log(e);
            return res.status(500).json({
                message: "INTERNAL SERVER ERROR",
            });
        }
     


    }
);

Admin.delete("/submissions/:id", async (req: Request, res: Response)  : Promise<any>=> {
    const id: number = parseInt(req.params.id);

    try {
      const resposne =   await client.forms.delete({
            where :{
                Teamid : id
            }
        })
console.log(resposne)

  if(!resposne){
     return res.status(500).json({
        message : "could not delete now "
     })
  }
        return res.status(200).json({
            message : "Delted "
        })


    }catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "INTERNAL SERVER ERROR",
        });
    }

    
});

export default Admin;
