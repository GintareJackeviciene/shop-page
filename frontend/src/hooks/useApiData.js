import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../store/AuthCtxProvider";
import toast from "react-hot-toast";

export default function useApiData(apiUrl, initValue = [], redirectUrl = '') {
    const [dataArr, setDataArr] = useState(initValue);
    const [apiErr, setApiErr] = useState({});
    const {token} = useAuthContext();

    const navigate = useNavigate();

    let configs = {};
    if (token !== '') {
        configs = {
            headers: {'Authorization': token}
        }
    }

    useEffect(() => {
        axios
            .get(apiUrl, configs)
            .then((response) => {
                const commFromAPI = response.data;
                setDataArr(commFromAPI);
            })
            .catch((error) => {
                setApiErr(error);
                if (redirectUrl) {
                    navigate(redirectUrl);
                }
                toast.error(error.response.data.error);
            });
    }, [apiUrl]);

    return [dataArr, setDataArr, apiErr];
}