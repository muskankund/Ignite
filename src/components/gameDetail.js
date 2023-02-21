import React from 'react';
//import styled componenents & Framer Motion
import styled from 'styled-components';
import {motion} from 'framer-motion';
//import react-redux features
import {useSelector} from 'react-redux';
//import useHistory
import {useHistory} from 'react-router-dom';
//import util
import {smallImage} from '../util'
//import images
import nintendo from '../img/nintendo.svg';
import palystation from '../img/playstation.svg';
import xbox from '../img/xbox.svg';
import steam from '../img/steam.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
//import stars
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetail = ({pathId}) => {
    const {screen, gameDetail, isLoading} = useSelector((state) => state.details);
    const history = useHistory();
    //console.log(history);
    const exitDetailHandler = (e) => {
        const element = e.target;
        //console.log(element);
        if (element.classList.contains('shadow')){
            document.body.style.overflow = "auto";
            history.push('/');
        }
    }

    //Get Stars Rating Logic
    const getStars = () => {
        const stars = [];
        const rating = Math.floor(gameDetail.rating);
        for(let i = 1; i<=5; i++) {
            if(i <= rating){
                stars.push(<img alt="star" key={i} src={starFull} />);
            } else {
                stars.push(<img alt="star" key={i} src={starEmpty} />);
            };
        };
        return stars;
    };


    //Platform icons
    const getPlatform = (platform) => {
        switch (platform) {
            case "Xbox One":
                return xbox;
            case "PlayStation 4":
                return palystation;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "IOS":
                return apple;
            default:
                return gamepad;
        };

    };

    return (
        <>
        {!isLoading &&(
        <CardShadow className = "shadow" onClick={exitDetailHandler}>
            <Detail layoutId={pathId}>
                <Stats>
                    <div className="rating">
                        <motion.h3 layoutId={`title {pathId}`}>{gameDetail.name}</motion.h3>
                        <p>Rating: {gameDetail.rating}</p>
                        {getStars()}
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {gameDetail.platforms.map((data) => (
                                <img key={data.platform.id} src={getPlatform(data.platform.name)}
                                 alt={data.platform.name} />
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <motion.img layoutId={`image ${pathId}`} src={smallImage(gameDetail.background_image, 1280)} alt={gameDetail.name} />
                </Media>
                <Description>
                    <p>{gameDetail.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screen.results.map(screen => (
                        <img src={smallImage(screen.image, 1280)} alt={gameDetail.name} key={screen.id} />
                    ))}
                </div>
            </Detail>
        </CardShadow>
        )}
        </>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100%;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index:5;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track{
        background: white;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    z-index: 10;
    img{
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 1rem;
        height: 1rem;
        display: inline;
    }
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3em;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5 rem;
    img{
        width: 100%;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;
export default GameDetail;