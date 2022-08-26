
function MovieList(props) {
    return (
        <div className='row'>
            {
                props.info.map(movie => {
                    return (
                        <div className='col-lg-4' key={movie.id}>
                            <div className='card mb-4 shadow-sm'>
                                <img src={movie.imageUrl} className='card-img-top' alt='...'></img>
                                <div className='card-body'>
                                    <h5 className='card-title'> {movie.name} </h5>
                                    <p className='card-text'> {movie.overview}</p>
                                    <div className='d-flex justify-content-between align-item-center'>
                                        <button className='btn btn-md btn-outline-danger' onClick= {(event) => props.deleteMovieProp(movie)}>Delete</button>
                                        <h2><span className='badge badge-info bg-primary'>{movie.rating}</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default MovieList;




