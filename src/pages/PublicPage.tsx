import HeaderTypo from "../components/HeaderTypo";
import React, {useState} from "react";
import {IconButton, Input, List, ListItem, Radio, Textarea, Typography} from "@mui/joy";
import {useSelector} from "react-redux";
import {EcoleModel} from "../models/EcoleModel";
import parse from 'html-react-parser';
import {Check, Edit} from "@mui/icons-material";

export default function PublicPage() {
    const ecole = useSelector((state: any) => state.ecole as EcoleModel);
    const [selectedValue, setSelectedValue] = useState(ecole.category);

    const handleChange = (event: any) => {
        setSelectedValue(event.target.value);
    };
    return (<>
        <HeaderTypo title="Gestion de votre page public"/>
        <div className="flex flex-col">
            <HeardeEcole ecole={ecole}/>
            <div className="w-10/12 mx-auto flex flex-col gap-2 bg-white rounded-md p-4 shadow-md">
                <DescriptionEcole ecole={ecole}/>

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

                <CycleEcole ecole={ecole}/>
                <AvantagesEcole ecole={ecole}/>
                <WebsiteEcole ecole={ecole}/>
                <EmailEcole ecole={ecole}/>
                <LocalisationEcole ecole={ecole}/>
                <CountMembreEcole ecole={ecole}/>
                <ImagesEcole ecole={ecole}/>
            </div>
        </div>
    </>);
}

const TitleEcole = ({ecole}: { ecole: EcoleModel }) => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(ecole.name);

    const handleChanges = (event: any) => {
        setName(event.target.value);
    }
    return (<div className="flex justify-center items-center gap-1 text-white text-4xl font-bold px-4 mb-2">
        {open ? <Input value={name} onChange={handleChanges} className="text-white text-4xl font-bold px-4 mb-2"/> :
            <h1>{ecole?.name}</h1>}
        {
            open ?
                <IconButton onClick={() => setOpen(false)} className="">
                    <Check/>
                </IconButton>
                :
                <IconButton onClick={() => setOpen(!open)} className="">
                    <Edit/>
                </IconButton>
        }
    </div>)
}

const HeardeEcole = ({ecole}: { ecole: EcoleModel }) => {
    return (<div className="relative h-80 w-full flex justify-between items-end border" style={{
        backgroundImage: `linear-gradient(rgba(135, 80, 156, 0.9), rgba(135, 80, 156, 0.9)),url(${ecole?.path_baniere})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
        <IconButton style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
        }}>
            <Edit/>
        </IconButton>
        <TitleEcole ecole={ecole}/>
        <LogoEcole ecole={ecole}/>
    </div>);
}

const LogoEcole = ({ecole}: { ecole: EcoleModel }) => {
    return (<div className="relative h-20 w-20 mr-4 mb-2">
        <img src={ecole?.path_logo} alt="" className="h-full w-full rounded-full"/>
        <IconButton sx={{
            position: 'absolute',
            top: '50%',
            left: '0',
            transform: 'translate(50%, -50%)',
        }}>
            <Edit/>
        </IconButton>
    </div>);
}

const DescriptionEcole = ({ecole}: { ecole: EcoleModel }) => {
    return (<div className="mb-4">
        <Typography level="h4" component="h4" className="font-bold">Description</Typography>
        <Typography level="body1" component="p">{ecole?.description}</Typography>
    </div>);
}

const CycleEcole = ({ecole}: { ecole: EcoleModel }) => {
    return (<div className="mb-4">
        <Typography level="h4" component="h4" className="font-bold">Nos cycles</Typography>
        {
            ecole.cycles.length > 0 ?
                <List>
                    {ecole.cycles.map((cycle, index) => <ListItem key={index}>{cycle.name}</ListItem>)}
                </List> :
                <Typography level="body1" color="danger" component="p">Aucun cycle renseigner</Typography>
        }
    </div>);
}

const WebsiteEcole = ({ecole}: { ecole: EcoleModel }) => {
    return (<div className="mb-4">
        <Typography level="h4" component="h4" className="font-bold">Notre Site web</Typography>
        <a href={ecole?.site_web} target="_blank" rel="noreferrer">{ecole?.site_web}</a>
    </div>);
}

const EmailEcole = ({ecole}: { ecole: EcoleModel }) => {
    return (<div className="mb-4">
        <Typography level="h4" component="h4" className="font-bold">Email public de l'école</Typography>
        <a href={`mailto:${ecole?.email}`} target="_blank" rel="noreferrer">{ecole?.email}</a>
    </div>);
}

const LocalisationEcole = ({ecole}: { ecole: EcoleModel }) => {
    return (<div className="mb-4">
        <Typography level="h4" component="h4" className="font-bold">La localisation de l'école</Typography>
        <Typography level="body1" color="danger" component="p">pas disponible</Typography>
    </div>);
}

const CountMembreEcole = ({ecole}: { ecole: EcoleModel }) => {
    return (<div className="mb-4">
        <Typography level="h4" component="h4" className="font-bold">Membres de l'école</Typography>
        <Typography level="body1" color="danger"
                    component="p">{ecole.users.length} : {ecole.users.length > 0 ? "membres" : "membre"}</Typography>
    </div>);
}

const ImagesEcole = ({ecole}: { ecole: EcoleModel }) => {
    return (<div className="mb-4">
        <Typography level="h4" component="h4" className="font-bold">Quelques images de l'écoles</Typography>
        <div className="flex flex-wrap">
            {
                ecole?.images_ecole?.map((image, index) => (
                    <img src={image.path_image} alt="image" key={index} className="w-1/4 h-1/4"/>
                ))
            }
        </div>
    </div>);
}

const AvantagesEcole = ({ecole}: { ecole: EcoleModel }) => {
    return (<div className="mb-4">
        <Typography level="h4" component="h4" className="font-bold">Avantages</Typography>
        <Typography level="body1" component="p">{parse(ecole?.avantages)}</Typography>
    </div>);
}