const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name}</h1>
            <img src={data.place.pic} alt={`${data.place.name} pic`} 
            style={{width: '300px', height: `auto`}}
            />
            <section>
              <h2>Rating</h2>
              <p>Currently unrated</p>
            </section>
            <section>
            <h2>description</h2>
            <p>Located in Phoenix, AZ and serving coffee, bakery</p>  
            </section>
            <section>
              <h2>Comments</h2>
              <p>No comments yet!</p>
            </section>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>      
<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form> 
          </main>

        </Def>
    )
}

module.exports = show

