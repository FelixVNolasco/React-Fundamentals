import React, {useRef, useState} from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link} from 'react-router-dom'

export const ForgotPassword = () => {
     
    const emailRef = useRef()
    const {resetPassword} = useAuth();
    const [error, setError] = useState('')
    const [messeage, setMesseage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault();

        try{
            setMesseage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMesseage('Se ha enviado el correo de recuperación exitosamente')
        } catch{
            setError('No se ha podido enviar el correo de recuperación')
        }
        setLoading(false)
        
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Recuperar Cuenta</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {messeage && <Alert variant="success">{messeage}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email"> 
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-2" type="submit">Cambiar Contraseña</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/login">Iniciar Sesión</Link>
            </div>
        </>
    )
}
