import React from 'react';
import { Fade } from 'react-awesome-reveal';
import emoji from 'react-easy-emoji';
import './Bienvenida.css';
import animacion from '/src/assets/animations/animacion_cata_2.mp4'
import UilGithub from '@iconscout/react-unicons/icons/uil-github'
import UilLinkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import UilEnvelopeAlt from '@iconscout/react-unicons/icons/uil-envelope-alt'


export const Bienvenida = () => {
    return (
        <div className='greeting-main main' id='greeting'>
            <div className='greeting-main'>
                <div className='greeting-text-div'>
                    <Fade cascade>
                        <h1 className='greeting-title'>
                            Hola, Soy Catalina
                            <span className="wave-emoji">{emoji("👋")}</span>
                        </h1>
                        <p className='greeting-subTitle'>
                            Full-Stack Developer Junior<span className="computer-emoji">{emoji("🚀")}</span>, tengo experiencia construyendo páginas Web y Aplicaciones con JavaScript / React.js / Node.js / Express.js / PostgreSQL.
                            <UilGithub className='icon' size="50" color="#469B9B" />
                            <UilLinkedin className='icon' size="50" color="#469B9B" />
                            <UilEnvelopeAlt className='icon' size="50" color="#469B9B" />
                        </p>


                        <div className="button-greeting-div">
                            <a href="www.google.com"> <button className='main-button' href='www.google.com' >Contáctame</button></a>

                            <a href="www.google.com"> <button className='main-button' href='www.google.com' >Sobre Mí</button></a>
                        </div>
                    </Fade>
                </div>
                <div className='vid'>
                    <video loop autoPlay muted>
                        <source src={animacion} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}
