import {Outlet, useMatches, useNavigate} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout/Layout";
import {BubbleLoading} from "./icons/BubbleLoading";
import useIsconnect from "./hooks/useIsconnect";


function App() {
    const [isConnect] = useIsconnect();
    if (isConnect === null) {
        return <div className="h-screen w-full grid place-items-center">
            <BubbleLoading className="h-14 w-14"/>
        </div>;
    }
    return (isConnect ?
        <Layout>
            <Outlet/>
        </Layout>
        :
        <LoginPage/>);

}

export default App
