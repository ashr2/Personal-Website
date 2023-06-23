import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typist from 'react-typist-component';
import './Card.css'
import Lottie from 'lottie-react';
import { SiPython, SiPytorch, SiOcaml, SiTensorflow, SiBinance, SiReact, SiHtml5, SiCss3, SiFirebase, SiC} from "react-icons/si";
import { FaGithub } from 'react-icons/fa';
import ReactCardFlip from 'react-card-flip';

const HorizontalCard = (props) => {
    const [isFlipped, setFlipped] = useState(false);
    const [animationData, setAnimationData] = useState(null);

    const handleClick = () => {
        setFlipped(!isFlipped);
    };

    useEffect(() => {
        fetch(props.animationUrl)
            .then(response => response.json())
            .then(data => setAnimationData(data));
    }, []);

    const getIconByTechnology = (technology) => {
        switch (technology) {
          case "python":
            return <SiPython className="python px-3" size={70} />;
          case "pytorch":
            return <SiPytorch className="pytorch px-3" size={70} />;
          case "ocaml":
            return <SiOcaml className="ocaml px-3" size={70} />;
        case "tensorflow":
            return <SiTensorflow className="tensorflow px-3" size={70}/>;
        case "binance":
            return <SiBinance className="binance px-3" size={70}/>
        case "react":
            return <SiReact className="react px-3" size={70}/>
        case "html":
            return <SiHtml5 className="html px-3" size={70}/>
        case "css":
            return <SiCss3 className="css px-3" size={70}/>
        case "firebase":
            return <SiFirebase className="firebase px-3" size={70}/>
        case "c":
            return <SiC className="c px-3" size={70}/>
        default:
            return null;
        }
      };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" isInteractable = {true}>
            <div onClick={handleClick}
                id={props.cardId}
            >
                <div className="front card container" style={{height:600, width:1000}}>
                        <div className="row g-0">
                            <div className="col-md-5 d-flex align-items-center justify-content-center">
                                {animationData && <Lottie animationData={animationData} style={{ height: 500, width: 500 }} />}
                            </div>
                            <div className="col-sm-7">
                                <div className="card-body" style={{height:500}}>
                                <Typist typingDelay={10} cursor={<span className='cursor'>|</span>}>
                                    <h1 className="title">{props.title}</h1>
                                    <Typist.Delay ms={500} />
                                    <p className="description">
                                        {props.description}
                                    </p>
                                </Typist>
                                </div>
                                <div className="card-footer mt-3">
                                {props.technologies.map((technology, index) => (
                                    <React.Fragment key={index}>
                                    {getIconByTechnology(technology)}
                                    </React.Fragment>
                                ))}
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            <div onClick={handleClick}>
                <div className="front card container"style={{height:600, width: 1000 }}>
                    <div className="row g-0" style={{height:500, width: 1000}}>
                    <div className="d-flex align-items-center justify-content-center">
                        {props.github &&                         
                        <a
                        href={props.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4"
                        >
                        <FaGithub className="github" size={60} /> 
                        </a>}
                        {props.demo && 
                            <h1 className='demo'>{props.demo}</h1>
                        }
                    </div>
                    </div>
             </div>
            </div>

        </ReactCardFlip>
    );
}

export default HorizontalCard;