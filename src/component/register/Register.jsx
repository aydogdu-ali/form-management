import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import RegisterStyle from "./Register.module.css"


const Register = () => {
  return (
        <Container   className={RegisterStyle["register"]}> 
           <Form>
           <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={RegisterStyle["info"]}>Adınız:</Form.Label>
        <Form.Control type="text" placeholder="Adınız" required />
        
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Soy Adınız:</Form.Label>
        <Form.Control type="text" placeholder="Soy Adınız"  required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Telefon Numaranız:</Form.Label>
        <Form.Control type="tel" placeholder="Telefon Numaranız 505-123-11-11 formatında" 
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Yaşadığınız Şehir:</Form.Label>
        <Form.Control type="text" placeholder="Yaşadığınız Şehir" required/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter email"required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" required/>
      </Form.Group>
      
      
      <Button variant="info"  className="w-100 mt-3 mb-3"  type="submit">
        Onay
      </Button>
    </Form>
    </Container>

    
      );
    }
    
 
  


export default Register