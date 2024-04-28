import axios from 'axios';

type Foo = {
    message: string;
}

export async function getFoo(): Promise<Foo> {
    const url = import.meta.env.VITE_API_URL ||  "http://localhost:42069";
    //if (!url) {
    //    throw new Error('VITE_API_URL is not defined');
    //}

    try {
        const data = await axios.get(`${url}/foo`);
        return data.data;
    } catch (error) {
        throw error;
    }
}
