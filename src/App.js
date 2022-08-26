import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

import React, { Component } from 'react'
import AddMovie from "./components/AddMovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

export default class App extends Component {
  state = {
    movies: [],
    searchQuery: ""
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3001/movies")
    const data = await response.json()
    this.setState({ movies: data })
  }

  delete = async (movie) => {
    await fetch(`http://localhost:3001/movies/${movie.id}`, { method: "DELETE" })

    var newMovieList = this.state.movies.filter(data =>
      data.id !== movie.id
    )

    this.setState(state => ({
      movies: newMovieList
    }))
  }

  addMovie = async (movie) => {
    await axios.post(`http://localhost:3001/movies/`,movie)
    this.setState(state=> ({
      movies:state.movies.concat([movie])
    }))
  }

  searchMovie = (event) => {
    this.setState({ searchQuery: event.target.value })
  }


  render() {
    const filterMovies = this.state.movies.filter(movie => {
      return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
    })

    return (
      <Router>
        <div className="container">
          <Routes>

            <Route path="/" element={
              <React.Fragment> 
                <SearchBar serachMovieProp={this.searchMovie}></SearchBar>
                <MovieList info={filterMovies} deleteMovieProp={this.delete}></MovieList>
              </React.Fragment>
            }/>

            <Route path="add" element={
              <AddMovie propsAddMovie ={(movie) => {this.addMovie(movie)}}> </AddMovie>
            }/>

          </Routes>
        </div>

      </Router>

    )
  }
}


