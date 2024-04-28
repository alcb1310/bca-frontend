import { useQuery } from "@tanstack/react-query";
import { getFoo } from "../queries/foo";
import Loading from "./Loading";
import Error from "./Error";

function App() {
    const {
        data: foo,
        isLoading,
        error,
        isError,
    } = useQuery({
        queryKey: ["foo"],
        queryFn: getFoo,
    });

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <div className="text-3xl font-bold underline" data-testid="title">Hello world!</div>
            {isError ? <Error message={error.message} /> : <div>{foo?.message}</div>}
        </>
    );
}

export default App;
