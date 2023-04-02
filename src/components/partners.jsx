import React from "react";
import '../styles/partners.css'


const Partners = () => {
    return(
        <section className="partners-section">
            <div className="partners">
                <h1>Trusted allies in business</h1>
                <div className="partners-logos">
                    <svg xmlns="http://www.w3.org/2000/svg" width="71" height="41" fill="none"><path fill="#fff" d="M40.83 40.596H7.753c-3.365 0-5.41-3.71-3.613-6.555L21.781 6.109c1.736-2.748 5.781-2.63 7.353.215L44.57 34.255c1.574 2.849-.486 6.34-3.74 6.34Z"/><path fill="#fff" d="M63.621 40.596H30.544c-3.365 0-5.41-3.71-3.613-6.555L44.572 6.109c1.735-2.748 5.781-2.63 7.353.215l15.436 27.931c1.574 2.849-.486 6.34-3.74 6.34Z"/><path fill="#2F2F40" fill-rule="evenodd" d="M30.544 40.58H40.83c3.254 0 5.314-3.492 3.74-6.34l-8.295-15.01-9.344 14.795c-1.797 2.845.247 6.555 3.613 6.555Z" clip-rule="evenodd"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="108" height="41" fill="none"><g fill="#fff" clip-path="url(#a)"><path d="M24.145 0 .863 40.326h11.742l11.748-20.35L36.1 40.327h11.742L24.561 0h-.416ZM83.56 0 60.28 40.326H72.02l11.746-20.35 11.748 20.35h11.742L83.979 0h-.42ZM65.81 0 54.064 20.349 42.313 0h-11.74l23.492 40.685L77.553 0H65.81Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.864 0H107.26v40.688H.864z"/></clipPath></defs></svg>
                </div>
                <p className="partners-note">Together with our partners, we're changing the game.</p>
            </div>
        </section>
    )
}

export default Partners;