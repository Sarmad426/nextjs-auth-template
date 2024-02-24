import z from 'zod'


export const loginSchema = z.object({
    email: z.string().email({ message: "invalid email" }),
    password: z.string().min(6, { message: "invalid password" })
})

export type typeLoginSchema = z.infer<typeof loginSchema>


export const registerSchema = z.object({
    name: z.string().min(2, { message: "Name of 2 characters is required" }),
    email: z.string().email({ message: "invalid email" }),
    password: z.string().min(6, { message: "Password of 6 characters is required" })
})

export type typeRegisterSchema = z.infer<typeof registerSchema>