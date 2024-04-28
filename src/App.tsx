import { useQuery } from "@tanstack/react-query";
import { getFoo } from "./queries/foo";
import Loading from "./components/Loading";
import Error from "./components/Error";

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

    if (isError) {
        return <Error message={error.message} />;
    }

    return (
        <>
            <div className="text-3xl font-bold underline">Hello world!</div>
            <div>{foo?.message}</div>
        </>
    );
}

export default App;
