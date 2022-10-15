import {Apprenant} from "../models/Apprenant";
import {useEffect, useState} from "react";
import http from "../services/http";
import Layout from "../components/Layout/Layout";

export const ApprenantsPage = () => {
    const [apprenants, setApprenants] = useState<Apprenant[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchApprenants = async () => {
            try {
                const {data} = await http.get('/users?role=apprenant');
                setApprenants(data.data);
            } catch (error: any) {
                setError(error.message);
            }
            setLoading(false);
        };
        const promise = fetchApprenants();
    }, []);

    return (
        <div className="apprenants">
            <div className="container">
                <h1>Apprenants</h1>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {apprenants.map((apprenant) => (
                    <div key={apprenant.id} className="apprenant">
                        <h2>{apprenant.name}</h2>
                        <p>{apprenant.email}</p>
                        <p>{apprenant.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
ApprenantsPage.getLayout = (page: any) => <Layout>{page}</Layout>;
export default ApprenantsPage;