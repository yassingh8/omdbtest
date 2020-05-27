import React from 'react';
import axios from 'axios';
//import {Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import { listAction, showList } from '../actions/addToList';
import {
  Card,
  Button,
} from 'react-bootstrap';

class Movie extends React.Component {
    constructor(props) {
      super(props);
      // this.data = {};
    }

    getData = () => {
      return axios
      .get(
          'https://www.omdbapi.com/?apikey=d0ecb0ed&i='+this.props.movieID+'&plot=full')
      .then(res => {
          this.data = res.data;
          console.log(this.data);
      });
    }
    
    handleClick(i) {
      var l = this.props.myList
      const j = this.props.myList.includes(i);
      if (!j) {
        if (l.length<10) {
          console.log("add clicked! "+ i)
          if (l.indexOf(i)<0) {
            l = l.concat([i])
            this.props.listAction(l);
          }
        }
        else alert("List full...delete some items")
      }
      else {
        console.log("delete clicked!")
        l.splice(l.indexOf(i),1)
        this.props.listAction(l);
      }   
    }
  
    // componentWillMount() {
    //   console.log('card didmount!');
    //   axios
    //   .get(
    //       'https://www.omdbapi.com/?apikey=d0ecb0ed&i='+this.props.movieID+'&plot=full')
    //   .then(res => {
    //       this.data = res.data;
    //       console.log(this.data);
    //   });
    // }
  
    render() {
      console.log('card render');
      
      const {
        Title,
        Poster,
        Year
      } = this.props.data;
      // } = this.getData();
      
    console.log(this.props.data + ' data');

    if (!Poster || Poster === 'N/A') {
        return null;
    }
      return(
            <Card style={{ width: "15rem"}} border="dark">
                <Card.Img variant="top" src={Poster}/>
                <Card.Body>      
                <Card.Title>{Title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Year</Card.Subtitle>
                    <Card.Text>{Year}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button size="sm" onClick={()=>{return this.handleClick(this.props.data)}}>
                        {this.props.myList.includes(this.props.data) ? "Delete" : "Add"}
                    </Button>
                </Card.Footer>     
            </Card>
      );
    }
}

const mapStateToProps = state => ({
  searchTerm: state.favourite.searchTerm,
  myList: state.favourite.myList,
  movieList: state.favourite.movieList
})

export default connect(mapStateToProps, { listAction, showList })(Movie);