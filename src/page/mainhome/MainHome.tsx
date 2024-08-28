import GeradorSenha from '../geradorSenha/GeradorSenha'
import './HomeMain.css'

function MainHome() {
  return (
    <>
        <img src="../../public/fotoJaeder.png" alt="foto de Jaeder" />
        <header>
          <h1>Jaeder de Carvalho Azevedo</h1>
          <p>Formação: Analista e Desenvolvedor Sistema</p>
          <p>Curso de especialização: Trybe</p>
          <p>Develop: FrontEnd, BackEnd and mid data science</p>
          <p>Buscando: Primeiro emprego na área</p>
        </header>
        <section>
          <div>
            <h3>2018 a 2021</h3>
            <h2>Analise e Desenvolvimento de Sistemas</h2>
            <h4>Faculdade Estácio Fib Sá Campus Gilberto Gil</h4>
            <h3>Formação graduação superior tecnólogo 'Concluído'</h3>
            <p>
            Em 2018, comecei minha jornada de aprendizado no mundo da programação. Ao longo desse tempo, explorei teorias e fundamentos de estrutura de dados, lógica de programação I e II, desenvolvimento de websites, gestão e empreendedorismo, redes de computadores, além de ter concluído o projeto final. Participei também de uma oficina de manutenção de computadores, ministrada pelo coordenador do curso, como banco de horas. 
            </p>
          </div>
          <div>
            <h3>2021</h3>
            <h2>Data Science</h2>
            <h4>Faculdade Multivix</h4>
            <h3>Pós-graduação 'Tracado'</h3>
            <p>Em 2021, iniciei a pós em Data Science. Durante esse período, explorei técnicas de análise de dados, machine learning e visão computacional, ruídos dados... pausei o curso por falta de fundos de investimentos.
            </p>
          </div>
          <div>
            <h3>2022 a 2023</h3>
            <h2>Desenvolvedor Web Full-Stack</h2>
            <h4>Trybe</h4>
            <h3>Curso de especialização 'Concluido'</h3>
            <p>Em 2022, ainda não tinha conquistado meu primeiro emprego e senti que não conhecia o suficiente então começei a especialização em desenvolvimento web full-stack e data science. Durante esse período, explorei tecnologias como React, Node.js, TypeScript, PostgreSQL, MySQL, Python, Docker além das softskills. Aprendi muito na Trybe, devo o conhecimento que tenho. Atualmente, estou estudando e aprimorando minhas habilidades em desenvolvimento web.</p>
          </div>
        </section>
        <h2>PROJETOS:</h2>
        <h3>seção de alguns projetos e exercicios feito por minha pessoa:</h3>
        <section className='geradorDeSenha'>
          <GeradorSenha />
        </section>
        <footer>
          <p>links das redes sociais imagens redondas com logo redirecionando ao meu perfil</p>
        </footer>
    </>
  )
}

export default MainHome