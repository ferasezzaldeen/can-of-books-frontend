import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import BestBooks from './BestBooks';



class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numOfBooks: 0,
      booksData: [],
      showbooks: false,
    }



  }

  componentDidMount = async () => {
    const { user } = this.props.auth0;

    const email = user.email;
    let bookURL = process.env.REACT_APP_SERVER;
    let url = `${bookURL}books?email=${email}`
    let book = await axios.get(url);
    console.log('this is the booksdata',this.state.booksData);
    console.log(book);
    this.setState({
      booksData: book.data,
      showbooks: true
    })
    console.log('this is the booksdata',this.state.booksData);

  }

  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <p>{this.state.booksData.name}</p>
        { this.state.showbooks && <BestBooks booksData={this.state.booksData} showbooks={this.state.showbooks} />}
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
