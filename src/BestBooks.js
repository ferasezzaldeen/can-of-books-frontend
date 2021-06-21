import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import MyFavoriteBooks from './MyFavoriteBooks';
class BestBooks extends React.Component {

    render() {
        return (<div>
            {this.props.booksData.map(item => {
                return (<><div>

                    <p>name of the book : {item.name}</p>
                    <p>description of the book : {item.description}</p>
                    <p>state of the book : {item.status}</p>

                </div> </>)

            })}


        </div>)
    }






}

export default withAuth0(BestBooks);
