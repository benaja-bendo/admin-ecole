import {useEffect, useState} from "react";
import http from "../services/http";

export function useFetch(url: string) {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    useEffect(() => {
        async function fetchData() {
            const response = await http.get(url);
            setState({
                data: response.data.data,
                loading: false
            } as any);
        }

        fetchData();
    }, [url]);

    return [state.data, state.loading];
}