'use server'

import bcrypt from 'bcryptjs'


import { getUserByEmail } from "@/lib/users"
import { typeRegisterSchema, registerSchema } from "@/schema"

export const register = async (data: typeRegisterSchema) => {
    const validatedData = registerSchema.safeParse(data)

    if (!validatedData.success) {
        return { error: "Something went wrong!" }
    }

    const { name, email, password } = data


    const existingUser = await getUserByEmail(email)

    if (existingUser) {
        return { error: "User already exists!" }
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await prisma?.user.create({ data: { name, email, password: hashedPassword } })

    return { success: "Email Sent" }
}