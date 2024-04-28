import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import "../index.css";
import theme from "../theme";

type WrapperProps = {
    children: React.ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={ theme }>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    );
}
