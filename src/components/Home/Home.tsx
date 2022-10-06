import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar'
import { Link } from 'react-router-dom';

interface Props {
    title: string;
}

const useStyles = makeStyles({
    background: {
        backgroundImage: `linear-gradient(340deg, #21D4FD 15%, #9b59b6 60%)`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },
    button_text: {
        color: '#9B59B6',
        textDecoration: 'none',
        margin: '8px',
    },
});

export const Home = (props: Props) => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h3>{props.title}</h3>
                <br/>
                <button>
                    <Link to='/Library' className={classes.button_text}>View Our Library</Link>
                </button>
            </div>
            </div>
        </>
    )
}
