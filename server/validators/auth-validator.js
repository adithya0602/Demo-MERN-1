const { z } =require("zod")

const SignupSchema = z.object({
    username : z
    .string({required_error:"name is required"})
    .trim()
    .min(3,{message:"name must be more than 3 characters"})
    .max(255,{message:"name should not be more than 255 characters"}),
    email : z
    .string({required_error:"email is required"})
    .trim()
    .email({message : "Invalid email address"})
    .min(10,{message:"email must be more than 10 characters"})
    .max(30,{message:"email must be less than 30 characters"}),
    phone : z
    .string({required_error:"phone number is required"})
    .trim()
    .min(10,{message:"phone must be atleast 10 characters"})
    .max(20,{message:"name should not be more than 20 characters"}),
    password : z
    .string({required_error:"password is required"})
    .min(6,{message:"password must be atleast 6 characters"})
    .max(255,{message:"password should not be more than 255 characters"}),
})

module.exports=SignupSchema;