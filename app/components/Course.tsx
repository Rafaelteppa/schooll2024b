export default function Course(){
    return(
        <div>

        <div className="font-bold">
      <h3>Conheça Nossos <span className="text-[#00e77f]">Cursos</span></h3>
    </div>

    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-[#4d4d4d] rounded-lg">
        <a href="http://wwww.html">
          <img src="/img/html.svg" alt="" />
          <div className="courses-description">
            <h4>CURSO DE HTML</h4>
            <p>O Curso De HTML é ....</p>
          </div>
        </a>
      </div>
      <div className="bg-[#4d4d4d] rounded-lg">
        <a href="http://wwww.html">
          <img src="/img/css.svg" alt="" />
          <div className="courses-description">
            <h4>CURSO CSS</h4>
            <p>O Curso De Css é ....</p>
          </div>
        </a>
      </div>

      <div className="bg-[#4d4d4d] rounded-lg">
        <a href="http://wwww.html">
          <img src="/img/js.svg" alt="" />
          <div className="courses-description">
            <h4>CURSO JAVA</h4>
            <p>O Curso De Java é ....</p>
          </div>
        </a>
      </div>
      <div className="bg-[#4d4d4d] rounded-lg">
        <a href="http://wwww.html">
          <img src="/img/games.svg" alt="" />
          <div className="courses-description">
            <h4>CURSO GAMES</h4>
            <p>O Curso De Games é ....</p>
          </div>
        </a>
      </div>
      <div className="bg-[#4d4d4d] rounded-lg">
        <a href="http://wwww.html">
          <img src="/img/design.svg" alt="" />
          <div className="courses-description">
            <h4>CURSO DESIGNER</h4>
            <p>O Curso De Design é ....</p>
          </div>
        </a>
      </div>
      <div className="bg-[#4d4d4d] rounded-lg">
        <a href="http://wwww.html">
          <img src="/img/robot.svg" alt="" />
          <div className="courses-description">
            <h4>CURSO ROBÓTICA</h4>
            <p>O Curso De Robótica é ....</p>
          </div>
        </a>
      </div>
    </div>
    </div>
    );
}
