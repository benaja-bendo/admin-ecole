import {Box, Button, Checkbox, Chip, Divider, Sheet, Textarea, TextField, Typography} from "@mui/joy";
import CheckIcon from '@mui/icons-material/Check';
import React, {useEffect, useState} from "react";
import {CoursModel} from "../../models/CoursModel";
import {CycleModel} from "../../models/CycleModel";
import http from "../../services/http";
import {LevelModel} from "../../models/levelModel";
import {MatiereModel} from "../../models/MatiereModel";

export default function NewCours() {
    const [cours, setCours] = useState<CoursModel>({} as CoursModel);
    const handleSave = () => {
        console.log(cours);
        http.post("/cours", cours,{
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res);
        })
    }
    return (<>
        <Sheet sx={{
            p: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mr: '36px',
        }}>
            <Sheet>
                <Typography level="h3" fontWeight={700}>Nouveau cours</Typography>
            </Sheet>
            <Button onClick={handleSave}>Enregistrer</Button>
        </Sheet>
        <Divider sx={{mp: "8px"}}/>

        <div className="h-full w-full flex flex-col grid grid-cols-12">
            <div className="col-span-12 md:col-span-4 xl:col-span-4 shadow overflow-x-hidden">
                <DetailCours cours={cours} setCours={setCours}/>
            </div>
            <div className="col-span-12 md:col-span-8 xl:col-span-8 px-6 mt-8">
                <ContentCours cours={cours} setCours={setCours}/>
            </div>
        </div>
    </>);
}

const ContentCours = ({cours, setCours}: { cours: CoursModel, setCours: (b: CoursModel) => void }) => {
    const [content, setContent] = useState<string>('');
    useEffect(() => {
        setCours({
            ...cours, contents: [{content: content, type_content: 'texte'}]
        });
    }, [content])

    return (<div className="grid place-items-center">
        <Typography level="h3" fontWeight={700}>Contenu du cours</Typography>
        <Textarea
            sx={{width: '100%'}}
            minRows={4}
            variant='soft'
            placeholder="Contenu du cours"
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />
    </div>);
}

const DetailCours = ({cours, setCours}: { cours: CoursModel, setCours: (b: CoursModel) => void }) => {
    const [cycles, setCycles] = useState<CycleModel[]>([] as CycleModel[]);
    const [selectedCycle, setSelectedCycle] = useState<CycleModel[]>([] as CycleModel[]);
    const [levels, setLevels] = useState<LevelModel[]>([] as LevelModel[]);
    const [selectedLevels, setSelectedLevels] = useState<LevelModel[]>([] as LevelModel[]);
    const [matieres, setMatieres] = useState<MatiereModel[]>([] as MatiereModel[]);
    const [selectedMatieres, setSelectedMatieres] = useState<MatiereModel[]>([] as MatiereModel[]);
    const [urlImage, setUrlImage] = useState<string>("");
    const getCycles = async () => {
        const response = await http.get("/cycles");
        setCycles(response.data.data as CycleModel[]);
    }
    const getLevels = async () => {
        const response = await http.get("/levels");
        setLevels(response.data.data as LevelModel[]);
    }
    const getMatieres = async () => {
        const response = await http.get("/matieres");
        setMatieres(response.data.data as MatiereModel[]);
    }
    useEffect(() => {
        getCycles();
        getLevels();
        getMatieres();
        return () => {
            setCours({} as CoursModel);
            setCycles([] as CycleModel[]);
            setLevels([] as LevelModel[]);
            setMatieres([] as MatiereModel[]);
        }
    }, []);
    return (<div className="flex flex-col p-2">
        <div className="mb-1">
            <img src={urlImage} alt={''} className="w-full h-64 object-cover"/>
            <input type={"file"} onChange={(e) => {
                const file = e.target.files?.item(0);
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        if (e.target) {
                            setUrlImage(e.target.result as string);
                            setCours({...cours, path_image: e.target.result as string});
                        }
                    }
                    reader.readAsDataURL(file);
                }
            }}/>
        </div>
        <div className="mb-1">
            <TextField
                onChange={(e) => setCours({...cours, name: e.target.value})}
                label="Nom du cours"
                placeholder="Nom du cours"
                variant="soft"/>
        </div>
        <div className="mb-2">
            <span className="text-gray-700">Description</span>
            <Textarea
                variant="soft"
                placeholder={"Description du cours"}
                minRows={3}
                onChange={(e) => setCours({...cours, description: e.target.value})}
            />
        </div>
        <div className="mb-2">
            <div className="text-gray-700 py-1 bg-gray-100 mb-2">Cycles</div>
            <div className="flex flex-wrap gap-1">
                {cycles.map((cycle, index) => {
                    const checked = selectedCycle.some((c) => c?.id === cycle?.id) || false;
                    return (
                        <Chip
                            key={index}
                            variant={checked ? 'soft' : 'plain'}
                            color={checked ? 'primary' : 'neutral'}
                            startDecorator={
                                checked && <CheckIcon sx={{zIndex: 1, pointerEvents: 'none'}}/>
                            }
                        >
                            <Checkbox
                                variant="outlined"
                                color={checked ? 'primary' : 'neutral'}
                                disableIcon
                                overlay
                                label={cycle.name}
                                checked={checked}
                                onChange={(event) => {
                                    if (!event.target.checked) {
                                        setSelectedCycle(selectedCycle.filter((n) => n.id !== cycle.id));
                                    } else {
                                        setSelectedCycle([...selectedCycle, cycle]);
                                    }
                                }}
                            />
                        </Chip>
                    );
                })}
            </div>
        </div>
        <div className="mb-2">
            <div className="text-gray-700 py-1 bg-gray-100 mb-2">Niveau</div>
            <div className="flex flex-wrap gap-1">
                {levels.map((level, index) => {
                    const checked = selectedLevels.some((c) => c?.id === level?.id) || false;
                    return (
                        <Chip
                            key={index}
                            variant={checked ? 'soft' : 'plain'}
                            color={checked ? 'primary' : 'neutral'}
                            startDecorator={
                                checked && <CheckIcon sx={{zIndex: 1, pointerEvents: 'none'}}/>
                            }
                        >
                            <Checkbox
                                variant="outlined"
                                color={checked ? 'primary' : 'neutral'}
                                disableIcon
                                overlay
                                label={level.name}
                                checked={checked}
                                onChange={(event) => {
                                    if (!event.target.checked) {
                                        setSelectedLevels(selectedLevels.filter((n) => n.id !== level.id));
                                    } else {
                                        setSelectedLevels([...selectedLevels, level]);
                                    }
                                }}
                            />
                        </Chip>
                    );
                })}
            </div>
        </div>
        <div className="mb-1">
            <div className="text-gray-700 py-1 bg-gray-100 mb-2">Matieres</div>
            <div className="flex flex-wrap gap-1">
                {matieres.map((matiere, index) => {
                    const checked = selectedMatieres.some((c) => c?.id === matiere?.id) || false;
                    return (
                        <Chip
                            key={index}
                            variant={checked ? 'soft' : 'plain'}
                            color={checked ? 'primary' : 'neutral'}
                            startDecorator={
                                checked && <CheckIcon sx={{zIndex: 1, pointerEvents: 'none'}}/>
                            }
                        >
                            <Checkbox
                                variant="outlined"
                                color={checked ? 'primary' : 'neutral'}
                                disableIcon
                                overlay
                                label={matiere.name}
                                checked={checked}
                                onChange={(event) => {
                                    if (!event.target.checked) {
                                        setSelectedMatieres(selectedMatieres.filter((n) => n.id !== matiere.id));
                                    } else {
                                        setSelectedMatieres([...selectedMatieres, matiere]);
                                    }
                                }}
                            />
                        </Chip>
                    );
                })}
            </div>
        </div>
    </div>);
}
