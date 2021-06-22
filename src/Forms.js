import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class Forms extends React.Component {
  render() {
    return(
      <Modal show={this.props.show} onHide={this.props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>book adding</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e)=>this.props.addBook(e)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>book name</Form.Label>
            <Form.Control type="text" placeholder="book name" name='name' />
            <Form.Label>book description</Form.Label>
            <Form.Control type="text" placeholder="book description" name='description' />
            <Form.Label>book status</Form.Label>
            <Form.Control type="text" placeholder="book status"  name='status'/>
            <Button variant="primary" type="submit" onClick={this.props.handleClose} >
              Submit
            </Button>
            {/* <Form.Select >
              <option>choose status</option>
              <option value="1">LIFE-CHANGING</option>
              <option value="2">RECOMMENDED TO ME</option>
              <option value="3">HISTORICAL</option>
            </Form.Select> */}
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.handleClose}>
          Close
        </Button>
     
      </Modal.Footer>
    </Modal>
    )
  }
}

export default withAuth0(Forms);
