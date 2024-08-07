const { z } =require("zod")


const LoginSchema = z.object({
    email : z
    .string({required_error:"email is required"})
    .trim()
    .email({message : "Invalid email address"})
    .min(10,{message:"email must be more than 10 characters"})
    .max(30,{message:"email must be less than 30 characters"}),
    password: z
    .string({required_error:"password is required"})
    .min(6,{message:"password must be atleast 6 characters"})
    .max(255,{message:"password should not be more than 255 characters"}),
})

module.exports=LoginSchema;