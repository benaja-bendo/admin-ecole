import {redirect, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import Login from "./pages/Login";
import {User} from "./models/User";
import http from "./services/http";
import Layout from "./components/Layout/Layout";


function App() {
    const [user, setUser] = useState(null as User | null);
    useEffect(() => {
        redirect("/dashboard");
        // http.get<User>("/auth/me").then((response) => {
        //     setUser(response.data as User);
        // }).catch(() => {
        //     setUser(false);
        // });
        async function checkUser() {
            const {data} = await http.get("/me");
            setUser(data.data.user as User);
        }

        checkUser();
        return () => {
            setUser(null);
        }
    }, []);


    return (
        user ? (
            <Layout>
                <Outlet/>
            </Layout>
        ) : (
            <Login setUser={setUser}/>
        )
    );
}

export default App
