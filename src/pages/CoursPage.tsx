import HeaderTypo from "../components/HeaderTypo";
import React, {useEffect, useState} from "react";
import {Button, Modal, ModalClose, ModalDialog, Typography} from "@mui/joy";
import http from "../services/http";
import {CoursModel} from "../models/CoursModel";
import {Delete, Info} from "@mui/icons-material";
import ModalComfirmation from "../components/ModalComfirmation";
import ModalFullPage from "../components/ModalComponents/ModalFullPage";


export default function CoursPage() {
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const [openNewCourse, setOpenNewCourse] = useState<boolean>(false);
    return (<>
        <HeaderTypo title={"Gestion de cours"}>
            <div className="flex gap-1">
                <Button onClick={() => setOpenNewCourse(true)}>Nouveau cours</Button>
                <Button onClick={() => setOpenSearch(!openSearch)} color={openSearch ? "danger" : "primary"}>
                    {openSearch ? "Fermer" : "Rechercher"}
                </Button>
            </div>
        </HeaderTypo>
        {
            openSearch ?
                <SearchCours/> :
                <ListeCours/>
        }
        <ModalFullPage open={openNewCourse} onClose={setOpenNewCourse}>
            <NewCours/>
        </ModalFullPage>
    </>)
}

const NewCours = () => {
    return (<>
        <Typography level="h2" sx={{mb: 2}}>Nouveau cours</Typography>
        <div className="flex gap-1">
            <Button color="primary">Enregistrer</Button>
            <Button color="danger">Annuler</Button>
        </div>
    </>)
}

const ListeCours = () => {
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
                <th className="px-4 py-2">Detail</th>
                <th className="px-4 py-2">Actions</th>
            </tr>
            </thead>
            <tbody>
            {loading ? <tr></tr> : contents.datas.map((content, index) => <LigneCours key={index}
                                                                                      content={content}/>)}
            </tbody>
        </table>

        <div className="mt-2 hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
            <div>
                <Button disabled={contents.links?.prev === null} onClick={handlePrev}>précedent</Button>
                <Button disabled={contents.links?.next === null} onClick={handleNext}>suivant</Button>
            </div>
        </div>
    </div>
}

const LigneCours = ({content}: { content: CoursModel }) => {
    const [openInfo, setOpenInfo] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const handleDelete = async () => {
        console.log("delete");
        await http.delete(`/cours/${content.id}`);
        setOpenDelete(false);
    }
    return (<>
        <tr>
            <td className="border px-4 py-2">
                <img src={content?.path_image} alt={content.name} className="w-10 h-10 rounded"/>
                <span className="font-semibold underline"> {content.name}</span>
            </td>
            <td className="border px-4 py-2">
                <p className="mb-1">
                    <span className="font-semibold underline">Description: </span>
                    {content.description}
                </p>
                <p className="mb-1">
                    <span className="underline">Publier par: </span>
                    {content.authors.map((author, index) => <span key={index}
                                                                  className="text-blue-600">{author.name}</span>)}
                </p>
                <p className="mb-1">
                    <span className="font-semibold underline">Mise à jour: </span>
                    {new Date(content?.updated_at).toLocaleDateString()}
                </p>
            </td>
            <td className="border px-4 py-2 flex flex-wrap h-full w-full gap-1">
                <Button onClick={() => setOpenUpdate(true)} startDecorator={<Delete/>}
                        variant="outlined">Modifier</Button>
                <Button onClick={() => setOpenDelete(true)} startDecorator={<Delete/>} variant="outlined"
                        color="danger">Supprimer</Button>
                <Button onClick={() => setOpenInfo(true)} aria-label={`info`} startDecorator={<Info/>}
                        variant="outlined"
                        color="info">info</Button>
            </td>
        </tr>
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={openInfo}
            onClose={() => setOpenInfo(false)}>
            <ModalDialog
                aria-labelledby="layout-modal-title"
                aria-describedby="layout-modal-description"
                layout="fullscreen"
            >
                <ModalClose/>
                <DetailCours content={content}/>
            </ModalDialog>
        </Modal>
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={openUpdate}
            onClose={() => setOpenUpdate(false)}
        >
            <ModalDialog
                aria-labelledby="layout-modal-title"
                aria-describedby="layout-modal-description"
                layout="fullscreen">
                <ModalClose/>
                <EditCours content={content}/>
            </ModalDialog>
        </Modal>
        <ModalComfirmation open={openDelete} handleClose={setOpenDelete} handleConfirm={handleDelete}/>
    </>)
}
const DetailCours = ({content}: { content: CoursModel }) => {
    return (<div className="h-full w-full flex">
        <div>
            <img src={content?.path_image} alt={content.name} className="w-10 h-10 rounded"/>
        </div>
        <div className="flex flex-col">
            <Typography level="h1">{content.name}</Typography>
        </div>
    </div>)
}
const EditCours = ({content}: { content: CoursModel }) => {
    const handleUpdate = async () => {
        console.log("update");
    }
    return (<div className="h-full w-full flex">
        <div>
            <img src={content?.path_image} alt={content.name} className="w-10 h-10 rounded"/>
            <Button>Modifier l'image</Button>
        </div>
        <div className="flex flex-col">
            <Typography level="h1">{content.name}</Typography>
        </div>
    </div>)
}

const SearchCours = () => {
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
                {loading ? <tr></tr> : contents.datas.map((content, index) => <LigneCours key={index}
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