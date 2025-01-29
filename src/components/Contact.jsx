import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import { LangContext } from "../context/LangContext";

import  "./Contact.css";


export const Contact = () => {
  const { contactRef } = useContext(NavContext);
  const { lang } = useContext(LangContext);
  
  

  return (
    <div ref={contactRef} class="section" id="contact">
      <h3>Contact</h3>
      {/* <hr/> */}
      <div class="container">
        <div class="col-md-7 text-center mx-auto" data-aos="fade-up">
          <form action="https://formspree.io/f/xqazkbnw" method="POST">
            <div class="mb-3">
              <label class="form-label">{lang === "fr" ? "Votre email" : "Your e-mail address"}</label>
              <input class="form-control" type="email" name="email" required />
            </div>

            <div class="mb-3">
              <label class="form-label">{lang === "fr" ? "Votre message" : "Your message"}</label>
              <textarea
                class="form-control"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>

            <button class="btn btn-primary mt-3 mb-5" type="submit">
            {lang === "fr" ? "Envoyer" : "Send"}
            </button>
          </form>
          <h4>Linkedin</h4>
          <p>
            <a href="https://www.linkedin.com/in/natachapamphil/">
              linkedin/natachapamphil
            </a>
          </p>
          <h4>GitHub</h4>
          <p>
            <a href="https://github.com/natacha-phl">github/natachapamphil</a>
          </p>

          <div class="clearfix"></div>
          <div class="h-50"></div>
        </div>
      </div>
    </div>
  );
};
