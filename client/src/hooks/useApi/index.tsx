import { useState } from "react";
import API from '../../services/api';

const useApi = (urlObject: any) => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const call = async (payload: any, type = "") => {
        setResponse(null);
        setIsLoading(true);
        setError("");

        try {
            let res = await API(urlObject, payload, type);
            setResponse(res?.data);
        } catch (error) {
            setError(`${error}`);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        call,
        response,
        isLoading,
        error
    }
}

export default useApi;


