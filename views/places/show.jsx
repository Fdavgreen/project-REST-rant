const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
          </main>
          <h2>currerently unrated</h2>
        </Def>
    )
}

module.exports = show

