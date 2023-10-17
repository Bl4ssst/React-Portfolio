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
                        <img className='projeto1' src="/public/projeto1.png" alt="" />
                    </div>
                    <div className='content'>
                        <h3>Projeto 1: Top Filmes</h3>
                        <p>
                            App para quem gosta de filmes feito em React.js consumindo a API do TMDB. Saiba detalhes sobre seu filme favorito como nota, bilheteria, sinópse, data de lançamento e mais.                        
                        </p>
                    </div>

                    <a href='https://jazzy-torte-16b062.netlify.app'><button id='ler-botao'>Veja!</button></a>
                </div>

                <div className='card'>
                    <div className='icon'>
                        <img className='projeto' src="/public/projeto2.png" alt="" />
                    </div>
                    <div className='content'>
                        <h3>Projeto 2: Weather Report</h3>
                        <p>
                            Site utilizando uma API de meteorologia onde o usuário pode conferir a temperatura e outras condições climáticas de qualquer cidade do mundo em tempo real.
                        </p>
                    </div>

                    <a href='https://bl4ssst.github.io/Weather-Report/'><button id='ler-botao'>Veja!</button></a>
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
