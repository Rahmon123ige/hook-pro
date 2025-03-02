import React from 'react'

function filter({handleMovieFilter, handleRatingFilter}) {

    const handleTitleChange = (e) => {
        let title = e.target.value.toLowerCase()
        handleMovieFilter(title)
    }

    const handleRatingChange = (e) => {
        let rating = e.target.textContent
        handleRatingFilter(rating)
    }
  return (
    <div>
      <div className="input-group mb-3">
  <input type="text" className="form-control" aria-label="Text input with dropdown button" onChange={handleTitleChange}/>
  <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Rating</button>
  <ul className="dropdown-menu dropdown-menu-end" onClick={handleRatingChange}>
    <li><a className="dropdown-item" href="#" id='seven'>7</a></li>
    <li><a className="dropdown-item" href="#">8</a></li>
    <li><a className="dropdown-item" href="#">9</a></li>
  </ul>
</div>
    </div>
  )
}

export default filter
