export default function Header(){
    return(
        <div className="md:flex justify-between lg:pt-8 font-bold">

<h3>🏫Escola Tecnológica🎒</h3>
      <nav className="space-x-3">
        <a href="">Home</a>
        <a href="">Cursos</a>
        <a href="">Contato</a>
        <a href="/admin">Login</a>
      </nav>
      </div>
    );
}