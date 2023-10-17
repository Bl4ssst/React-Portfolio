import {
    DiHtml5,
    DiNodejs,
    DiJsBadge,
    DiSass,
    DiMysql,
    DiReact,
  } from "react-icons/di";
  
  import "../styles/components/technologiescontainer.sass";
  
  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "node", name: "Node", icon: <DiNodejs /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "sass", name: "SASS", icon: <DiSass /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "react", name: "React", icon: <DiReact /> },
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <p>
          As Tecnologias que uso na criação dos meus websites:
        </p>
        <div className="technologies-grid">
            <div className="technology-card" id="html">
              <DiHtml5 />
              <div className="technology-info">
                <h3>HTML5</h3>
              </div>
            </div>

            <div className="technology-card" id="css">
              <DiNodejs />
              <div className="technology-info">
                <h3>Node</h3>
              </div>
            </div>

            <div className="technology-card" id="js">
              <DiJsBadge />
              <div className="technology-info">
                <h3>Javascript</h3>
              </div>
            </div>

            <div className="technology-card" id="sass">
              <DiSass />
              <div className="technology-info">
                <h3>SASS</h3>
              </div>
            </div>

            <div className="technology-card" id="mysql">
              <DiMysql />
              <div className="technology-info">
                <h3>MySQL</h3>
              </div>
            </div>

            <div className="technology-card" id="react">
              <DiReact />
              <div className="technology-info">
                <h3>React</h3>
              </div>
            </div>
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;
  