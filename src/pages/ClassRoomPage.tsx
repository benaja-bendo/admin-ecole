import React from "react";
import BasicBreadcrumbs from "../components/BasicBreadcrumbs";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import { GraphBarIcon } from "../icons/GraphBarIcon";
import { BellIcon } from "../icons/BellIcon";
import ClassRooms from "../components/RoomComponents/ClassRooms";
import WorkFlow from "../components/RoomComponents/WorkFlow";

const ListItemTab = [
  {
    label: "WorkFlow",
    icon: <GraphBarIcon />,
  },
  {
    label: "Les classes",
    icon: <BellIcon />,
  },
  {
    label: "Le planning",
    icon: <BellIcon />,
  },
] as const;

const ListTapPanel = [
  {
    value: 0,
    component: <WorkFlow />,
  },
  {
    value: 1,
    component: <ClassRooms />,
  },
  {
    value: 2,
    component: <ClassRooms />,
  },
] as const;

export default function ClassRoomPage() {
  return (
    <>
      <BasicBreadcrumbs />
      <Tabs aria-label="Basic tabs" defaultValue={0}>
        <TabList>
          {ListItemTab.map((item, index) => (
            <Tab key={index}>
              <ListItemDecorator>
                {item.icon}
                <span>{item.label}</span>
              </ListItemDecorator>
            </Tab>
          ))}
        </TabList>
        <div className="mt-2">
          {ListTapPanel.map((item, index) => (
            <TabPanel key={index} value={item.value}>
              {item.component}
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </>
  );
}
