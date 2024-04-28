import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginType, loginSchema } from "../types/login.d";
import { TextField, Typography } from "@mui/material";

export default function Login() {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<LoginType>({
        defaultValues: {
            username: "",
            password: "",
        },
        resolver: zodResolver(loginSchema),
    });

    function onSubmit(data: LoginType) {
        console.log(data);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-2">
                    <div>
                        <Controller
                            name="username"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    size="small"
                                    label="Email"
                                    error={!!errors.username}
                                    {...field}
                                />
                            )}
                        />
                        {<Typography variant="body2" component="p" color="error">{errors.username?.message}</Typography>}
                    </div>
                    <div>
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    label="Password"
                                    size="small"
                                    type="password"
                                    error={!!errors.password}
                                    {...field}
                                />
                            )}
                        />
                        {<Typography variant="body2" component="p" color="error" className="text-xs">{errors.password?.message}</Typography>}
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
