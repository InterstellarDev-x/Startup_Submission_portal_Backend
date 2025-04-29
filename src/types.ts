import { z } from "zod";



export  const FormSchmema = z.object({
    name: z.string({ message: "Enter you name" }),
    contactEmail: z.string().email({message : "Provide a vaild email id"}),
    description: z.string({ message: "Please provide the description of startup" }),
    teamMembers :  z.array(z.object({name : z.string({message : "Team member is required "})}))
  });


 export const AdminSchema = z.object({
    email : z.string().email({message : "enter the email id "}),
    password : z.string().min(8 , {message : "Must be atleaset 8 charachter"})
})


export   type FormSchmematype = z.infer<typeof FormSchmema>

