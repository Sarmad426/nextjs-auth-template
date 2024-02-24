import z from 'zod'


export const loginSchema = z.object({
    email: z.string().email({ message: "invalid email" }),
    password: z.string().min(6, { message: "invalid password" })
})

export type typeLoginSchema = z.infer<typeof loginSchema>