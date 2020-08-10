import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
  return(
          <article className="teacher-item">
            <header>       
                <img src="https://avatars2.githubusercontent.com/u/53231910?s=460&u=61bc1bc19f2df89bcf7c1c977a4738fdeb8f6d58&v=4" alt="Ryan Vieira"/>
                <div>
                  <strong>Ryan Vieira</strong>
                  <span>Matemática</span>
                </div>
            </header>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br/> <br/> 
              Exercitationem, at! Magni quasi mollitia, fugit, distinctio perferendis illum repudiandae modi ab dolore excepturi voluptatum nostrum accusantium iure, aspernatur nisi commodi adipisci?
            </p>

            <footer>
              <p>
                Preço/Hora
                <strong>R$ 30,00</strong>
              </p>
              <button type="button">
                  <img src={whatsappIcon} alt="Whatsapp"/>
                  Entrar em contato
              </button>
            </footer>
        </article>
  )
}

export default TeacherItem;