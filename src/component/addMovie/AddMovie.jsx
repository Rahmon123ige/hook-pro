import { useRef } from "react"


const AddMovie = ({handleAddMovie}) => {

    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const posterRef = useRef(null)
    const ratingRef = useRef(null)
    const nkiriRef = useRef(null)

    const handleNewMovie = (event) => {
        event.preventDefault()
        let title = titleRef.current.value
        let description = descriptionRef.current.value
        let posterURL = posterRef.current.value
        let rating = ratingRef.current.value
        let nkiri = nkiriRef.current.value

        handleAddMovie(
            {
                title, description, posterURL, rating, nkiri
            }
        )
    }
    
  return (
    <div>
<div className="container mt-5">
    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addMovieModal">Add Movie</button>
</div>

<div className="modal fade" id="addMovieModal"  aria-labelledby="modalTitle" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="modalTitle">Add a Movie</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form id="movieForm">
                    <div className="mb-3">
                        {/* <label for="title" className="form-label">Title</label> */}
                        <input type="text" className="form-control" id="title" required placeholder='title' ref={titleRef}/>
                    </div>
                    <div className="mb-3">
                        {/* <label for="description" className="form-label">Description</label> */}
                        <textarea className="form-control" id="description" rows="3" required placeholder='description' ref={descriptionRef}></textarea>
                    </div>
                    <div className="mb-3">
                        {/* <label for="posterURL" className="form-label">Poster URL</label> */}
                        <input type="url" className="form-control" id="posterURL" required placeholder='image url' ref={posterRef}/>
                    </div>
                    <div className="mb-3">
                        {/* <label for="rating" className="form-label">Rating</label> */}
                        <input type="number" className="form-control" id="rating" min="0" max="10" step="0.1" required placeholder='rating' ref={ratingRef}/>
                    </div>
                    <div className="mb-3">
                        {/* <label for="nkiri" className="form-label">Nkiri</label> */}
                        <input type="text" className="form-control" id="nkiri" placeholder='download link' ref={nkiriRef}/>
                    </div>

                    <button type="submit" className="btn btn-success" onClick={handleNewMovie}>Add Movie</button>
                </form>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default AddMovie
