import React from 'react';
import '../styles/components/Projetos.sass';

const ProjectContainer = () => {
    return (
        <section id='projetos-container'>
            <h2>Projetos</h2>
            <p>
                Confira aqui alguns projetos de minha autoria:
            </p>
            <div className='card-grid'>
                <div className='card'>
                    <div className='icon'>
                        <img className='projeto1' src="/projeto1.png" alt="" />
                    </div>
                    <div className='content'>
                        <h3>Projeto 1</h3>
                        <p>
                           Formulário responsivo com modo dark e light, slideshow e fundo animado. Feito com HTML, CSS, e JS.
                        </p>
                    </div>

                    <a href='https://bl4ssst.github.io/Formulario-Responsivo-Light-Dark/'><button id='ler-botao'>Veja!</button></a>
                </div>

                <div className='card'>
                    <div className='icon'>
                        <img src="undraw_no_data_re_kwbl.svg" alt="" />
                    </div>
                    <div className='content'>
                        <h3>Projeto 2</h3>
                        <p>
                            Em breve...
                        </p>
                    </div>

                    <a href='#'><button id='ler-botao'>Veja!</button></a>
                </div>

                <div className='card'>
                    <div className='icon'>
                        <img src="undraw_no_data_re_kwbl.svg" alt="" />
                    </div>
                    <div className='content'>
                        <h3>Projeto 3</h3>
                        <p>
                            Em breve...
                        </p>
                    </div>

                    <a href='#'><button id='ler-botao'>Veja!</button></a>
                </div>

                <div className='card'>
                    <div className='icon'>
                        <img src="undraw_no_data_re_kwbl.svg" alt="" />
                    </div>
                    <div className='content'>
                        <h3>Projeto 4</h3>
                        <p>
                            Em breve...
                        </p>
                    </div>

                    <a href='#'><button id='ler-botao'>Veja!</button></a>
                </div>
            </div>
        </section>
    );
};

export default ProjectContainer
