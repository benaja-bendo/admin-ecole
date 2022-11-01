import HeaderTypo from "../components/HeaderTypo";
import React, {useState} from "react";
import {List, ListItem, Radio, Textarea, Typography} from "@mui/joy";
import {useSelector} from "react-redux";
import {EcoleModel} from "../models/EcoleModel";

export default function PublicPage() {
    const ecole = useSelector((state: any) => state.ecole as EcoleModel);
    const [selectedValue, setSelectedValue] = useState(ecole.category);

    const handleChange = (event: any) => {
        setSelectedValue(event.target.value);
    };
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
                    <Typography level="h4" component="h4" className="font-bold">Quel type d'école sommes
                        nous?</Typography>

                    {
                        ecole.type_ecole.length > 0 ?
                            <List>
                                {ecole.type_ecole.map((type, index) => <ListItem key={index}>{type.name}</ListItem>)}
                            </List> :
                            <Typography level="body1" component="p">Aucun type d'école</Typography>
                    }

                </div>
                <div className="mb-4">
                    <Typography level="h4" component="h4" className="font-bold">Notre statut</Typography>
                    <div className="flex gap-2">
                        <Radio
                            checked={selectedValue === 'private'}
                            onChange={handleChange}
                            value="private"
                            label="private"
                            name="radio-buttons"
                            componentsProps={{input: {'aria-label': 'private'}}}
                        />
                        <Radio
                            checked={selectedValue === 'public'}
                            onChange={handleChange}
                            value="public"
                            label="public"
                            name="radio-buttons"
                            componentsProps={{input: {'aria-label': 'public'}}}
                        />
                    </div>

                </div>
                <div className="mb-4">
                    <Typography level="h4" component="h4" className="font-bold">Nos cycles</Typography>
                    {
                        ecole.cycles.length > 0 ?
                            <List>
                                {ecole.cycles.map((cycle, index) => <ListItem key={index}>{cycle.name}</ListItem>)}
                            </List> :
                            <Typography level="body1" color="danger" component="p">Aucun cycle renseigner</Typography>
                    }
                </div>
                <div className="mb-4">
                    <Typography level="h4" component="h4" className="font-bold">Avantages</Typography>
                    <Typography level="body1" component="p">{ecole?.avantages}</Typography>
                </div>
                <div className="mb-4">
                    <Typography level="h4" component="h4" className="font-bold">Notre Site web</Typography>
                    <a href={ecole?.site_web} target="_blank" rel="noreferrer">{ecole?.site_web}</a>
                </div>
                <div className="mb-4">
                    <Typography level="h4" component="h4" className="font-bold">Email public de l'école</Typography>
                    <a href={`mailto:${ecole?.email}`} target="_blank" rel="noreferrer">{ecole?.email}</a>
                </div>
                <div className="mb-4">
                    <Typography level="h4" component="h4" className="font-bold">La localisation de l'école</Typography>
                    <Typography level="body1" color="danger" component="p">pas disponible</Typography>
                </div>
                <div className="mb-4">
                    <Typography level="h4" component="h4" className="font-bold">Membres de l'école</Typography>
                    <Typography level="body1" color="danger"
                                component="p">{ecole.users.length} : {ecole.users.length > 0 ? "membres" : "membre"}</Typography>
                </div>
                <div className="mb-4">
                    <Typography level="h4" component="h4" className="font-bold">Quelques images de l'écoles</Typography>
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