type ErrorProps = {
    message: string;
}

export default function Error({ message }: ErrorProps) {
    return <div className="text-red-500">{message}</div>;
}
