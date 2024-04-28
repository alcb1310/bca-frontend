import { z } from "zod";

export const loginSchema = z.object({
    username: z.string().email({message: "Correo inválido"}),
    password: z.string().min(2, {message: "Contraseña inválida"}),
})

export type LoginType = z.infer<typeof loginSchema>
