import { useState, useEffect } from "react";
import Header from "./Header";
import SlideBar from "./SlideBar";
import BasicBreadcrumbs from "../BasicBreadcrumbs";
import MyModal from "./../MyModal";
import { Typography } from "@mui/joy";
import Button from "@mui/joy/Button";
import { useSelector, useDispatch } from "react-redux";
import { toogleHasEcole } from "../../features/ecole/hasEcoleSlice";
import { storeEcole } from "../../features/ecole/ecoleSlice";
import http from "../../services/http";

export default function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const open = useSelector((state: any) => state.hasEcole);
  const handleToogle = (e: any) => {
    dispatch(toogleHasEcole());
  };
  return (
    <>
      <div className="min-h-screen w-full flex flex-col">
        <Header />
        <div className="h-full flex-1 grid grid-cols-12">
          <div className="col-span-12 md:col-span-3 xl:col-span-2 shadow">
            <SlideBar />
          </div>
          <div className="col-span-12 md:col-span-9 xl:col-span-10 px-6 mt-8">
            {children}
          </div>
        </div>
      </div>
      <MyModal
        open={open}
        onClose={handleToogle}
        title="Selectionner votre école"
      >
        <ListEcole />
      </MyModal>
    </>
  );
}

const ListEcole = () => {
  const { ecoles } = useSelector((state: any) => state.user);
  return (
    <ul>
      {ecoles.map((ecole: any, index: number) => (
        <ItemEcole key={index} idEcole={ecole.id} />
      ))}
    </ul>
  );
};

const ItemEcole = ({ idEcole }: { idEcole: number }) => {
  const [load, setLoad] = useState(false);
  const [ecole, setEcole] = useState<any>(null);
  const dispatch = useDispatch();

  const getShowEcole = async () => {
    setLoad(true);
    http.get(`/ecoles/${idEcole}`).then((response) => {
      setEcole(response.data.data);
      setLoad(false);
    });
  };

  const handleSelectEcole = () => {
    dispatch(storeEcole(ecole));
    dispatch(toogleHasEcole());
  };

  useEffect(() => {
    getShowEcole();
    return () => {};
  }, []);

  if (load) {
    return <li>Chargement...</li>;
  } else {
    return (
      <li
        onClick={handleSelectEcole}
        className="cursor-pointer p-2 bg-slate-400"
      >
        {ecole?.name}
      </li>
    );
  }
};
