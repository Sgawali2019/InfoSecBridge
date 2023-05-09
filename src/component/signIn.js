import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function SignIn() {
  return (
    <Form style={{ marginLeft:"40%", padding:"20px", border:"solid 1px", width:"300px", marginTop:"70px"  }} >
      <h3>SignIn Into Your PopX Account</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control style={{width:"250px"}} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control style={{width:"250px"}} type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default SignIn;