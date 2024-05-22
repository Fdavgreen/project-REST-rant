const React = require('react');
const Def = require('./default');

function Home() {
    return (
      <Def>
          <main>
          <h1>HOME</h1>
    <div>
      <img src="/images/chia-fruit-drink.jpg" className='chia-fruit-drink' alt="Chia Fruit Shake"/>
      <div>
        Photo by <a href="AUTHOR_LINK">Mathilda Khoo</a> on <a href="https://unsplash.com/photos/clear-drinking-glass-with-brown-liquid-and-sliced-orange-fruit-jiaL5L-8lwc">Unsplash</a>
      </div>
    </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
                </a> 
          </main>
      </Def>
    )
  }

  


  


module.exports = Home; 


