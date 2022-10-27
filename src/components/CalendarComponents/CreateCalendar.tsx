import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import FormControl from "@mui/joy/FormControl";
import {FormHelperText, FormLabel, Input} from "@mui/joy";

export default function CreateCalendar() {
    return (
        <Card variant="outlined" sx={{width: 320}}>
            <Typography level="h2" fontSize="md" sx={{mb: 0.5}}>
                Cree un emploi du temps
            </Typography>
            <Typography level="body2">
                renseigner les informations
            </Typography>
            <FormControl>
                <FormLabel>Debut des cours</FormLabel>
                <Input placeholder="heure de debut"/>

                <FormLabel>Fin des cours</FormLabel>
                <Input placeholder="heure de fin"/>
            </FormControl>
            {/*<AspectRatio minHeight="120px" maxHeight="200px" sx={{my: 2}}>*/}
            {/*    <img*/}
            {/*        src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"*/}
            {/*        srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"*/}
            {/*        loading="lazy"*/}
            {/*        alt=""*/}
            {/*    />*/}
            {/*</AspectRatio>*/}
            <Box>
                <Button
                    variant="solid"
                    size="sm"
                    color="primary"
                    aria-label="Explore Bahamas Islands"
                    sx={{ml: 'auto', fontWeight: 600}}
                >
                    Cree
                </Button>
            </Box>
        </Card>
    );
}