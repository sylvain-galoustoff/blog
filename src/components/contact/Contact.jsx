import { useState } from "react";
import { IoSend } from 'react-icons/io5'
import { motion } from "framer-motion";
import { apiUrl } from "../../config";

function Contact() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '' 
    })

    const [validation, setValidation] = useState({
        name: null,
        email: null,
        message: null 
    })

    const [sendMessage, setSendMessage] = useState()

    const inputChange = (e, target) => {

        let newForm = {...form}
        newForm[target] = e.target.value

        setForm( newForm )
        validate(target, e.target.value)

    }

    const validate = (target, value) => {

        let newValidation = {...validation}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        switch (target) {

            case 'name':
                if ( value === ""  ) {
                    newValidation.name = null
                } else if ( value.length < 3 ) {
                    newValidation.name = false
                } else {
                    newValidation.name = true
                }                
            break

            case 'email':
                if ( value === ""  ) {
                    newValidation.email = null
                } else if ( !regex.test(value) ) {
                    newValidation.email = false
                } else {
                    newValidation.email = true
                } 
            break

            case 'message':
                if ( value === ""  ) {
                    newValidation.message = false
                } else {
                    newValidation.message = true
                } 
            break
        
            default:
                newValidation = {
                    name: null,
                    email: null,
                    message: null
                }
            break
        }

        setValidation(newValidation)

    }

    const validator = ( obj ) => {

        const submitedValues = Object.values(obj)

        if ( submitedValues.includes(false) || submitedValues.includes(null) ) {
            return false
        } else {
            return true
        }

    }

    const submitForm = async e => {

        e.preventDefault()
        setSendMessage('Envoi en cours...')

        if ( validator( validation ) ) {
            
            const options = {
                method: 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify( form )
            }
        
            const response = await fetch( apiUrl + 'mail', options )
            if ( !response.ok ) {
                throw new Error('Erreur de requête POST')
            }
        
            const data = await response.json()
            console.log(data);

            if ( data.mail_sent === true ) {

                console.log('envoyé');
                setSendMessage('Message envoyé ! Je réponds sous 48h.')
                setForm({
                    name: '',
                    email: '',
                    message: '' 
                })

            } else {

                setSendMessage('Une erreur est survenue :(')

            }

        }

    }

    return (
        <div className="page">

            <h1>Contact</h1>
            
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: "tween", duration: .5 }}
            >

                <form onSubmit={submitForm} >

                    <div className="form-group-inline">

                        <div className="form-group">
                            <p className="validator">{validation.name === false && '3 caractères minimum'}</p>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                placeholder="Votre nom"
                                onChange={ e => inputChange(e, 'name')  }
                                value={form.name}
                            />
                        </div>
                        
                        <div className="form-group">
                            <p className="validator">{validation.email === false && "Format d'e-mail non valide"}</p>
                            <input 
                                type="text" 
                                name="email" 
                                id="email" 
                                placeholder="Votre email"
                                onChange={ e => inputChange(e, 'email')  }
                                value={form.email}
                            />
                        </div>

                    </div>   

                    <div className="form-group">
                        <p className="validator">{validation.message === false && "Le message est vide"}</p>
                        <textarea
                            rows={10}
                            name="message" 
                            id="message" 
                            placeholder="Votre message ici"
                            onChange={ e => inputChange(e, 'message')  }
                            value={form.message}
                        />
                    </div>

                    <div className="form-group button-group">
                        { sendMessage && <p className="help">{ sendMessage }</p> }
                        <button type="submit" className="icon-before" id="submit-contact">
                            <IoSend /> Envoyer
                        </button>
                    </div>

                </form>

            </motion.div>

        </div>
    );
}

export default Contact