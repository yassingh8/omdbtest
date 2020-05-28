import React from 'react';
// import {Route, Switch } from 'react-router-dom';
// import {connect} from 'react-redux';
import { listAction } from '../actions/addToList';
import {
  Card,
  Button,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

// class Movie extends React.Component {
const Movie = (props) => {
  // constructor(props) {
    //   super(props);
    //   // data = {};
    // }
    const favourite = useSelector(state => state.favourite);
    const dispatch = useDispatch();

    // const getData = () => {
    //   return axios
    //   .get(
    //       'https://www.omdbapi.com/?apikey=d0ecb0ed&i='+favourite.movieID+'&plot=full')
    //   .then(res => {
    //       data = res.data;
    //       console.log(data);
    //   });
    // }
    
    const handleClick = () => {
      const i = props.data
      var l = favourite.myList
      const j = favourite.myList.includes(i);
      if (!j) {
        if (l.length<10) {
          console.log("add clicked! "+ i)
          if (l.indexOf(i)<0) {
            l = l.concat([i])
            dispatch(listAction(l));
          }
        }
        else alert("List full...delete some items")
      }
      else {
        console.log("delete clicked!")
        l.splice(l.indexOf(i),1)
        dispatch(listAction(l));
      }   
    }
  
    // componentWillMount() {
    //   console.log('card didmount!');
    //   axios
    //   .get(
    //       'https://www.omdbapi.com/?apikey=d0ecb0ed&i='+favourite.movieID+'&plot=full')
    //   .then(res => {
    //       data = res.data;
    //       console.log(data);
    //   });
    // }
  
    // render() {
      console.log('card render');
      
      const {
        Title,
        Poster,
        Year
      } = props.data;
      // } = getData();
      
    console.log(favourite.data + ' data');

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
                    <Button size="sm" onClick={handleClick}>
                        {favourite.myList.includes(props.data) ? "Delete" : "Add"}
                    </Button>
                </Card.Footer>     
            </Card>
      );
    // }
}

// const mapStateToProps = state => ({
//   searchTerm: state.favourite.searchTerm,
//   myList: state.favourite.myList,
//   movieList: state.favourite.movieList
// })

// export default connect(mapStateToProps, { listAction, showList })(Movie);
export default Movie;