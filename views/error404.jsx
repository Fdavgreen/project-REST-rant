const React = require('react');
const Def = require('./default');

function Error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
               <img src="/images/sadcat.jpg" className='sadcat' alt="404cat"/>
              <div>
               Photo by <a href="AUTHOR_LINK">傅甬 华</a> on <a href="https://unsplash.com/photos/brown-and-white-cat-in-shallow-focus-shot-tEMU4lzAL0w">Unsplash</a>
              </div>
             </div>
          </main>
      </Def>
    )
  }
  

module.exports = Error404;
