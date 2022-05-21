import React, {useRef, useState} from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'

export const UpdateProfile = () => {
     
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {currentUser, updateEmail, updatePassword} = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    
    function handleSubmit(e){

        e.preventDefault();
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Las contraseñas no coinciden')
        }

        const promises = [];
        setLoading(true)
        setError('')
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(()=> {
            history.push('/')
        }).catch(()=> {
            setError('No se ha podido actualizar la cuenta')
        }).finally(()=>{
            setLoading(false)
        })

        
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Actualizar Información</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder='Dejar en blanco si lo quiere dejar igual'/>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Confirmar Contraseña</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} placeholder='Dejar en blanco si lo quiere dejar igual'/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-3" type="submit">Actualizar</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/login" className="w-100 btn btn-danger">Cancelar</Link>
            </div>
        </>
    )
}
