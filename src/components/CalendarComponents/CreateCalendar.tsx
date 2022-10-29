import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import FormControl from "@mui/joy/FormControl";
import { FormHelperText, FormLabel, Input, Sheet } from "@mui/joy";
import TextField from "@mui/joy/TextField";
import { useState } from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import http from "../../services/http";
import { useNavigate } from "react-router-dom";

export default function CreateCalendar() {
  let idEcole = 1;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [calendarCreated, setCalendarCreated] = useState({
    ecole_id: idEcole,
    t_start: "07:00",
    t_end: "17:00",
    t_interval: "+1 hour",
    t_pause: ["12:00"],
  });
  const handleSulmit = async (e: any) => {
    e.preventDefault();
    console.log(calendarCreated);
    setLoading(true);
    await http
      .post("/calendar", calendarCreated)
      .then((response) => {
        setLoading(false);
        window.location.reload();
        console.log(response);
        // navigate('/calendar');
      })
      .catch((e: any) => {
        setLoading(false);
        console.error(e);
      });
  };
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <Typography
        level="h2"
        fontSize="xl"
        sx={{ mb: 0.5, textAlign: "center" }}
      >
        Cree un emploi du temps
      </Typography>
      <Typography level="body2" sx={{ mb: 1, textAlign: "center" }}>
        renseigner les informations
      </Typography>
      <form onSubmit={handleSulmit}>
        <TextField
          label="Debut des cours"
          placeholder="Debut des cours"
          variant="soft"
          type="time"
          onChange={(e) => {
            setCalendarCreated({
              ...calendarCreated,
              t_start: e.target.value,
            });
          }}
        />
        <TextField
          label="Fin des cours"
          placeholder="Fin des cours"
          variant="soft"
          type="time"
          onChange={(e) => {
            setCalendarCreated({
              ...calendarCreated,
              t_end: e.target.value,
            });
          }}
        />
        <TextField
          label="heure de pause"
          placeholder="heure de pause"
          variant="soft"
          type="time"
          onChange={(e) => {
            setCalendarCreated({
              ...calendarCreated,
              t_pause: [e.target.value],
            });
          }}
        />
        <Sheet sx={{ my: 1 }}>
          <Select
            placeholder="Selectionner l'intervalle"
            value={calendarCreated.t_interval}
            onChange={(e: any) => {
              // setCalendarCreated({
              //     ...calendarCreated,
              //     t_interval: e.target.value,
              // });
            }}
          >
            <Option value="+1 hour">+1 hour</Option>
            <Option value="+2 hour">+2 hour</Option>
            <Option value="+3 hour">+3 hour</Option>
            <Option value="+4 hour">+4 hour</Option>
          </Select>
        </Sheet>
        <Button
          loading={loading}
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: "auto", mt: 1, fontWeight: 600, width: "100%" }}
          type="submit"
        >
          Cree
        </Button>
      </form>
    </Card>
  );
}
