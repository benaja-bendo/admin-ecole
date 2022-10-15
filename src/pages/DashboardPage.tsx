import Layout from "../components/Layout/Layout";
import {useDispatch} from "react-redux";
import {storeUser} from "../features/user/userSlice";

const DashboardPage = () => {
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add
            </button>
            <h1> Bienvenue sur le Dashboard</h1>
        </div>
    );
}
export default DashboardPage;