import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../App.css"

function Account() {
  return (
    <div className='App' >
        <Card style={{ width: '20rem', marginLeft:"40%", marginTop:"120px"}}>
        <h3 style={{borderBottom:"solid 1px", padding:"10px"}}>Account Setting</h3>
          <Card.Img variant="top" src="https://tse4.mm.bing.net/th?id=OIP.bpJTixcJ9eRwEFjKsApJ8QHaEo&pid=Api&P=0" style={{borderRadius:"50%",  width:"150px", height:"150px", padding:"5%"}} />
          <h4 style={{marginTop:"-40%", marginLeft:"100px"}}>AMrj Jui</h4>
          <p style={{ marginLeft:"135px"}}>Synui@gmail.com</p><br></br>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  
  );
}

export default Account;