import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Quiz">Quiz</Link>
            </li>
            <li>
              <Link to="/Input">Input</Link>
            </li>
            <li>
              <Link to="/Cars">Cars</Link>
            </li>
            <li>
              <Link to="/GeoQuiz">GeoQuiz</Link>
            </li>
            <li>
              <Link to="/todo">Todolist</Link>
            </li>
            <li>
              <Link to="/harmonia">Harmonia</Link>
            </li>
          </ul>

        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;