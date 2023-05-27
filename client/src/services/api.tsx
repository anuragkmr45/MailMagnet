import axios, { AxiosResponse } from 'axios';

const API_URI = `http://localhost:8080`;

const API_GMAIL = async (
    serviceUrlObject: { method: string; endpoint: string },
    requestData: Record<string, any> = {},
    type: string
): Promise<AxiosResponse | undefined> => {
    const { params, urlParams, ...body } = requestData;

    try {
        const response = await axios({
            method: serviceUrlObject.method,
            url: `${API_URI}/${serviceUrlObject.endpoint}/${type}`,
            data: body
        });
        return response;
    } catch (error) {
        console.log("error in src/services/api.tsx", error)
    }
};

export default API_GMAIL;
