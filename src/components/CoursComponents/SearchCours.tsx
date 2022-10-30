import React, {useState} from "react";
import {CoursModel} from "../../models/CoursModel";
import http from "../../services/http";
import {Button} from "@mui/joy";
import ItemsCours from "./ItemsCours";


export default function SearchCours(){
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [contents, setContents] = useState({
        datas: [] as CoursModel[],
        links: {} as any,
    });
    const getSearch = async (e: any) => {
        e.preventDefault();
        if (search === "") return;
        setLoading(true);
        const response = await http.get(`/cours?q=${search}`);
        setContents({
            datas: response.data.data,
            links: response.data.links
        });
        setLoading(false);

    }

    const handleNext = async () => {
        setLoading(true);
        const response = await http.get(contents.links?.next);
        setContents({
            datas: response.data.data as CoursModel[],
            links: response.data.links
        });
        setLoading(false);
    }
    const handlePrev = async () => {
        setLoading(true);
        const response = await http.get(contents.links?.prev);
        setContents({
            datas: response.data.data as CoursModel[],
            links: response.data.links
        });
        setLoading(false);
    }
    // useEffect(() => {
    //     getSearch();
    //     // return () => {
    //     //     return setSearch("");
    //     // }
    // }, [search])
    return (<div className="flex flex-col">
        <form className="p-2 mb-1" onSubmit={getSearch}>
            <div className="container mx-auto">
                <input
                    className="w-full h-16 px-3 rounded mb-2 focus:outline-none focus:shadow-outline text-sm shadow-lg border-2 border-gray-300"
                    value={search} onChange={(e) => setSearch(e.target.value)}
                    type="search" placeholder="Search..."/>
                <nav className="flex">
                </nav>
            </div>
        </form>
        <div className="flex flex-col">
            <table className="table-auto">
                <thead>
                <tr>
                    <th className="px-4 py-2">Nom</th>
                    <th className="px-4 py-2">Detail</th>
                    <th className="px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {loading ? <tr></tr> : contents.datas.map((content, index) => <ItemsCours key={index}
                                                                                          content={content}/>)}
                </tbody>
            </table>

            <div className="mt-2 hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
                <div>
                    <Button
                        disabled={contents.links?.prev === null}
                        onClick={handlePrev}>précedent</Button>
                    <Button
                        disabled={contents.links?.next === null}
                        onClick={handleNext}>suivant</Button>
                </div>
            </div>
        </div>
    </div>)
}