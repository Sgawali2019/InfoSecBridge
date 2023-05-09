
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

function SignUp() {
  return (
    <div>
      

      <Form style={{ marginLeft:"40%", padding:"20px", border:"solid 1px", width:"300px", marginTop:"50px" }} >
      <h4>Create Your PopX Account</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Full Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Phone Number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Email Address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="number" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="text" placeholder="Company Name " />
        </Form.Group>

        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Label>Are You an Ageny?</Form.Label><br></br>
            <Form.Check
              inline
              label="Yes"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="No"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}

        <Button variant="primary" type="submit">
          Create Account
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;