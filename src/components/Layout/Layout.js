import React from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import classes from './Layout.module.css';

const layout = (props) => (
    <Auxiliary>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;