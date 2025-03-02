import React from 'react'

function Moviecard({title, description, posterURL,rating, nkiri}) {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
<img src={posterURL} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Rating: {rating}</li>
  </ul>
  <div className="card-body">
  <a href={nkiri} className="btn btn-primary">Download</a>
  </div>
</div>

    </div>
  )
}

export default Moviecard
