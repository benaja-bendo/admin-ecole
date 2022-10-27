import {
    Avatar,
    List,
    ListDivider,
    ListItem,
    ListItemButton,
    ListItemContent,
    ListItemDecorator,
    Typography
} from "@mui/joy";
import {KeyboardArrowRight} from "@mui/icons-material";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import EmptyContent from "./EmptyContent";

export default function NotificationsComponent() {
    return (<ListNotification listNotification={[]}/>);
}

const ListNotification = ({listNotification}: { listNotification: [] }) => {
    if (listNotification.length > 0) {
        return (<List>
            {listNotification.map((item, index) => (
                <ItemListNotification key={index}/>
            ))}
        </List>);
    } else {
        return (<EmptyContent>
            <Typography textColor="text.tertiary" fontWeight="bold">
                Aucune notification
            </Typography>
        </EmptyContent>)
    }
}

export const ItemListNotification = () => {
    return (<div className="shadow mb-2">
        <ListItem>
            <ListItemDecorator>
                <Avatar size="lg" sx={{'--Avatar-size': '60px'}}>
                </Avatar>
            </ListItemDecorator>
            <div>
                <Typography fontSize="xl">titre de la notification</Typography>
                <Typography fontSize="xs">
                    tout le contenu de la notification.
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget
                    tincidunt.
                </Typography>
            </div>
        </ListItem>
        <ListDivider inset="startContent"/>
        <ListItem>
            <ListItemButton>
                <ListItemContent>Marquer comme lu</ListItemContent>
                <DoneAllIcon/>
            </ListItemButton>
        </ListItem>
    </div>);
}

