import React, {useEffect, useState} from "react";
import {CoursModel} from "../../models/CoursModel";
import http from "../../services/http";
import {Button} from "@mui/joy";
import ItemsCours from "./ItemsCours";


export default function ListCours(){
    const [loading, setLoading] = useState(false);
    const [contents, setContents] = useState({
        datas: [] as CoursModel[],
        links: {} as any,
    });
    const getCours = async () => {
        setLoading(true);
        const response = await http.get("/cours");
        setContents({
            datas: response.data.data as CoursModel[],
            links: response.data.links
        });
        setLoading(false);
    }
    useEffect(() => {
        getCours();
        return () => {
            setContents({
                datas: [],
                links: {},
            });
        }
    }, []);
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
    return <div className="flex flex-col">
        <table className="table-auto">
            <thead>
            <tr>
                <th className="px-4 py-2">Nom</th>
                <th className="px-4 py-2">Details</th>
                <th className="px-4 py-2">Actions</th>
            </tr>
            </thead>
            <tbody>
            {loading ? <tr> </tr> : contents.datas.map((content, index) => <ItemsCours key={index}
                                                                                                     content={content}/>)}
            </tbody>
        </table>

        <div className="mt-2 hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
            <div className="flex gap-2">
                <Button disabled={contents.links?.prev === null} onClick={handlePrev}>précedent</Button>
                <Button disabled={contents.links?.next === null} onClick={handleNext}>suivant</Button>
            </div>
        </div>
    </div>
}
