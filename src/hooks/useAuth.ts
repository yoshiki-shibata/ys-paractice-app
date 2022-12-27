import axios from "axios";
import { useCallback, useState } from "react"
import { useNavigate } from 'react-router-dom'

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "../hooks/useLoginUser";

export const useAuth = () => {
    const navigate = useNavigate();
    const { showMessage } = useMessage();
    const { setLoginUser } = useLoginUser();

    const [loading, setLoading] = useState(false)

    const login = useCallback(
      (id: number) => {
        setLoading(true);

        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
          if (res.data){
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({...res.data, isAdmin});
            showMessage({ title: "ログインしました", status: "success" });
            navigate("/userManagement");
          } else {
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
            alert("ユーザーが見つかりません");
          }
        })
        .catch(() => {
        showMessage({ title: "ログインできません", status: "error" }),
        setLoading(false);
        });

    }, []);
    return { loading, login }
}