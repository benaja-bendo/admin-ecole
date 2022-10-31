import HeaderTypo from "../components/HeaderTypo";
import React from "react";
import {Textarea, Typography} from "@mui/joy";
import {useSelector} from "react-redux";
import {EcoleModel} from "../models/EcoleModel";

export default function PublicPage() {
    const ecole = useSelector((state: any) => state.ecole as EcoleModel);
    return (<>
        <HeaderTypo title="Gestion de votre page public"/>
        <div className="flex flex-col">
            <div className="h-80 w-full flex justify-between items-end border" style={{
                backgroundImage: `linear-gradient(rgba(135, 80, 156, 0.9), rgba(135, 80, 156, 0.9)),url(${ecole?.path_baniere})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <h1 className="text-white text-4xl font-bold px-4 mb-2">{ecole?.name}</h1>
                <img src={ecole?.path_logo} alt="" className="h-20 w-20 rounded-full mr-4 mb-2"/>
            </div>
            <div className="w-10/12 mx-auto flex flex-col gap-2 bg-white rounded-md p-4 shadow-md">
                <div className="mb-4">
                    <Typography level="h4" component="h4" className="font-bold">Description</Typography>
                    <Typography level="body1" component="p">{ecole?.description}</Typography>
                </div>
                <div className="mb-4">
                    <Typography level="h4" component="h4" className="font-bold">Avantages</Typography>
                    <Typography level="body1" component="p">{ecole?.avantages}</Typography>
                </div>
                <div className="mb-4">
                    <Typography level="h4" component="h4" className="font-bold">Les Images de votre écoles</Typography>
                    <div className="flex flex-wrap">
                        {
                            ecole?.images_ecole?.map((image, index) => (
                                <img src={image.path_image} alt="image" key={index} className="w-1/4 h-1/4"/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </>);
}