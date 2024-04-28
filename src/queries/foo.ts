import axios from 'axios';

type Foo = {
    message: string;
}

export async function getFoo(): Promise<Foo> {
    const url = import.meta.env.VITE_API_URL || undefined;
    if (!url) {
        throw new Error('VITE_API_URL is not defined');
    }

    const data = await axios.get(`${url}/foo`);

    return data.data;
}
