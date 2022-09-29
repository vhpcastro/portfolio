import React from 'react';

import './Contact.css';

function Contact() {

    return (
        <>

            <div className="contact-container">

                <div className="contact-content">

                    <div className="contact-box01">

                        <h2>CONTACT ME</h2>

                        <div className="contact-item">

                            <div className="contact-icons">
                                <img className='icon' src="https://cdn.discordapp.com/attachments/710276943592816720/1025135224201433088/icons8-telefone-100.png" alt="" />
                            </div>

                            <p>+55 (11) 9 1002-1502</p>

                        </div>

                        <div className="contact-item">

                            <div className="contact-icons">
                                <img className='icon' src="https://cdn.discordapp.com/attachments/710276943592816720/1025135222645342269/icons8-nova-mensagem-90.png" alt="" />
                            </div>

                            <p>vhpcastro0811@gmail.com</p>

                        </div>

                        <div className="contact-item">

                            <div className="contact-icons">
                                <img className='icon' src="https://cdn.discordapp.com/attachments/710276943592816720/1025135225069645834/icons8-marcador-100.png" alt="" />
                            </div>

                            <p>R. César Dacorso Filho, 7 - Parque Boturussu -  São Paulo, SP</p>

                        </div>

                    </div>

                    <div className="contact-box02">

                        <form action="https://formsubmit.co/vhpcastro0811@gmail.com" method="POST">

                            <input id='input01' type="text" name="name" placeholder='Your name' required />
                            <input id='input02' type="email" name="email" placeholder='Your e-mail' required />
                            <textarea id='txtarea' name="message" placeholder='Your message'></textarea>
                            <button type='submit'> SEND ME</button>

                        </form>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Contact;