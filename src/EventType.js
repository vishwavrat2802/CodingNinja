import EventNoteIcon from '@mui/icons-material/EventNote';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import CodeIcon from '@mui/icons-material/Code';
import PeopleIcon from '@mui/icons-material/People';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
export const EventsList = [
    {
        name: "All Events",
        icon: <EventNoteIcon/>,
        api: "ALL_EVENTS"
    },
    {
        name: "Webinars",
        icon: <CastForEducationIcon/>,
        api: "WEBINAR"
    },
    {
        name: "Coding Events",
        icon: <CodeIcon/>,
        api: "CODING_EVENT"
    },
    {
        name: "Bootcamp Events",
        icon: <PeopleIcon/>,
        api: "BOOTCAMP_EVENT"
    },
    {
        name: "Workshop",
        icon: <DeveloperBoardIcon/>,
        api: "WORKSHOP"
    },
];
export const sub_Events = ["Upcoming", "Archived", "All Time Favourites"];