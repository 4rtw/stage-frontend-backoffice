import React from 'react';
import style from './mystyle.module.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Nav() {
  return (
    <nav>
        <h3>Mon projet</h3>
          <ul className={style.navlinks}>
              <Link to ='/Home' >Home</Link>
              <Link to ='/EtudiantsPages' >Etudiant</Link>
              <Link to ='/EnseignantsPages' >Enseignants</Link>
          </ul>
    </nav>
  );
}

export default Nav;

// ato le zavatra rehetra ao anaty nav 