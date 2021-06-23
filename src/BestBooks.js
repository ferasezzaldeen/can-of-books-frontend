import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './BestBooks.css'
class BestBooks extends React.Component {

    render() {
        return (<div>
            <CardGroup >
                {this.props.booksData.map((item, idx) => {
                    return (<><div key={idx}>


                        <Card >

                            <Card.Body style={{ width: '25rem'}}   >
                                <Card.Title>  <p>{item.name}</p></Card.Title>
                                <Card.Text>
                                    <p>description: {item.description}</p>
                                </Card.Text>
                                <Card.Text> <p>state: {item.status}</p>  </Card.Text>
                                <Button className='updatebutton'  variant="primary"  onClick={()=>this.props.handleShowUpdate(idx)} >
                                    Update
                                </Button>
                                <Button className='deletebutton'  variant="primary"  onClick={()=>this.props.deletBOOK(idx)} >
                                    delete
                                </Button>
                           
                            </Card.Body>

                        </Card>

                    </div> </>)

                })}
            </CardGroup>

        </div>)
    }






}

export default withAuth0(BestBooks);
