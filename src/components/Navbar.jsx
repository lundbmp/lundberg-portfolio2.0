import { Divider, Drawer, List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import GradingIcon from '@mui/icons-material/Grading';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import EmailIcon from '@mui/icons-material/Email';

function Navbar() {

    return(
        <div>
            <Drawer
            anchor={'left'}
            open={true}
            variant="permanent">
                <Divider />
                <List>
                    <ListItem primary={'About Me'}>
                        <ListItemButton>
                            <PersonIcon />
                            <div>&nbsp;</div>
                            <ListItemText primary={'About Me'}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem primary={'Resume'}>
                        <ListItemButton>
                            <GradingIcon />
                            <div>&nbsp;</div>
                            <ListItemText primary={'Resume'}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem primary={'Projects'}>
                        <ListItemButton>
                            <ImportantDevicesIcon />
                            <div>&nbsp;</div>
                            <ListItemText primary={'Projects'}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem primary={'Contact Me'}>
                        <ListItemButton>
                            <EmailIcon />
                            <div>&nbsp;</div>
                            <ListItemText primary={'Contact Me'}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}

export default Navbar;