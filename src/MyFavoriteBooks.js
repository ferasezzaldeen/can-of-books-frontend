import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import BestBooks from './BestBooks';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Forms from './Forms';




class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numOfBooks: 0,
      booksData: [],
      showbooks: false,
      show: false,
    }



  }

  componentDidMount = async () => {
    const { user } = this.props.auth0;

    const email = user.email;
    let bookURL = process.env.REACT_APP_SERVER;
    let url = `${bookURL}books?email=${email}`
    let book = await axios.get(url);
    console.log('this is the booksdata', this.state.booksData);
    console.log(book);
    this.setState({
      booksData: book.data,
      showbooks: true
    })
    console.log('this is the booksdata', this.state.booksData);
  }


  addBook= async (event)=>{
    const { user } = this.props.auth0;
    event.preventDefault();
    const bookInfo={
      name:event.target.name.value,
      description:event.target.description.value,
      status:event.target.status.value,
      email:user.email,
    };
    console.log('add book function is working')
    let bookURL = process.env.REACT_APP_SERVER;
    let url = `${bookURL}addBooks`
    console.log('url function is working')
    console.log( `${bookURL}addBooks?${this.props.auth0.user.email}`)
    let newBook=await axios.post(url,bookInfo);
    console.log('axios function is working')

    this.setState({
      booksData: newBook.data,
      showbooks:true,
    })

  }

  deletBOOK= async(idx)=>{
    const email=this.props.auth0.user.email;
    const bookInfo={
      email:email,
      index:idx,
    };
    console.log(email);
    console.log(bookInfo);
    let bookURL = process.env.REACT_APP_SERVER;
    let url = `${bookURL}delBooks`
    let newBook=await axios.delete(url,{params:bookInfo});

    this.setState({
      booksData: newBook.data,
      showbooks:true,
    })

  }



  handleShow = () => {
    this.setState({
      show: true
    })
  }
  handleClose = () => {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <Button variant="primary" onClick={this.handleShow}>
          Add a book
        </Button>
        <Forms handleClose={this.handleClose} addBook={this.addBook} show={this.state.show}  />
        <p>
          This is a collection of my favorite books
        </p>

        <p>{this.state.booksData.name}</p>
        {this.state.showbooks && <BestBooks booksData={this.state.booksData} deletBOOK={this.deletBOOK} showbooks={this.state.showbooks} />}
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
