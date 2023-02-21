import React from 'react';
//import styled componenents & Framer Motion
import styled from 'styled-components';
import {motion} from 'framer-motion';
//import loadDetail
import {loadDetails} from '../actions/gameDetailAction';
//import useDispatch
import {useDispatch} from 'react-redux';
//import Link
import {Link} from 'react-router-dom';
//import util
import {smallImage} from '../util';


const Game = ({name, released, id, image}) => {
    const stringPathId = id.toString();
    //Load Details
    const dispatch = useDispatch();
    const detailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetails(id));
        //console.log(typeof stringPathId);
    };
    return (
        <SyledGame layoutId={stringPathId} onClick={detailHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title {stringPathId}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image,640)} alt={name} />
            </Link>
        </SyledGame>
    );
};

const SyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;
export default Game;