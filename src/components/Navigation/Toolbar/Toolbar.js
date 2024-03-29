import { React } from "react";
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from "../../Logo/Logo";
import classes from './Toolbar.module.css';
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.opened}/>
        <Logo style={{height:'80%'}} />
        <nav  className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;