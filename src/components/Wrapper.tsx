import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

type WrapperProps = {
    children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
    const queryClient = new QueryClient();
    
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
