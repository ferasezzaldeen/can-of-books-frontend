import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class Update extends React.Component {
  render() {
    return(
      <Modal show={this.props.showUpdate} onHide={this.props.handleCloseUpdate}>
      <Modal.Header closeButton>
        <Modal.Title>book Updating</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e)=>this.props.updateBook(e)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>book name</Form.Label>
            <Form.Control type="text" placeholder="book name" name='name' onChange={(e)=>this.props.changeName(e)} value={this.props.name}/>
            <Form.Label>book description</Form.Label>
            <Form.Control type="text" placeholder="book description" name='description' onChange={(e)=>this.props.changeDescription(e)} value={this.props.description} />
            <Form.Label>book status</Form.Label>
            <Form.Control type="text" placeholder="book status"  name='status' onChange={(e)=>this.props.changeStatus(e)}  value={this.props.status}/>
            <Button variant="primary" type="submit" onClick={this.props.handleCloseUpdate} >
              Submit
            </Button>
        
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.handleCloseUpdate}>
          Close
        </Button>
     
      </Modal.Footer>
    </Modal>
    )
  }
}

export default withAuth0(Update);
