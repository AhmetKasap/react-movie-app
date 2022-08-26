import React, { Component } from 'react'

export default class SearchBar extends Component {



  handleFormSubmit = (event) => {
    event.preventDefault()
  }
  render() {
    return (
      <div className='row mt-2 mx-auto w-100'>
        <div className='col-10'>
          <nav class="navbar bg-light ">
            <form class="me-5 w-100 " role="search" onSubmit={this.handleFormSubmit}>
              <input onChange={this.props.serachMovieProp}
                class="form-control me-2" type="search"
                placeholder="Search Movie" aria-label="Search" />
            </form>
          </nav>

        </div>
        <div className='col-2'>
          <a className='btn btn-outline-danger mt-2' href='/add'>Add Movie</a>

        </div>



      </div>



    )
  }
}
//*