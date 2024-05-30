
const React = require('react');
const Def = require('../default');

function EditForm({ place, id }) {
  return (
    <Def>
      <main>
        <h1>Edit Place</h1>
        <form method="POST" action={`/places/${id}?_method=PUT`}>
          <div className="form-group">
            <label htmlFor="name">Place Name</label>
            <input
              className="form-control"
              id="name"
              name="name"
              value={place.name}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              className="form-control"
              id="city"
              name="city"
              value={place.city}
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              className="form-control"
              id="state"
              name="state"
              value={place.state}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Cuisines</label>
            <input
              className="form-control"
              id="cuisines"
              name="cuisines"
              value={place.cuisines}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pic">Picture URL</label>
            <input
              className="form-control"
              id="pic"
              name="pic"
              value={place.pic}
            />
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Update Place"
          />
        </form>
      </main>
    </Def>
  );
}

module.exports = EditForm;