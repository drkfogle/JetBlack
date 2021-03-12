import React from 'react'
import Product from './Product'
import './Home.css'


function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-img-center">
          <div id="carouselExampleSlidesOnly" class="carousel slide " data-bs-ride="carousel">
            <div class="carousel-inner img-fluid">
              <div class="carousel-item active">
                <img src="https://images.asos-media.com/products/levis-jackson-check-worker-overshirt-in-ametrine-jet-black/20848971-1-black?$XXL$&wid=513&fit=constrain" class="d-block w-100 home-image " alt="pic1" />
              </div>
              <div class="carousel-item">
                <img src="https://images.asos-media.com/products/asos-design-regular-fit-satin-shirt-in-black/20708374-1-black?$XXL$&wid=513&fit=constrain" class="d-block w-100 home-image" alt="pic2"/>
              </div>
              <div class="carousel-item">
                <img src="https://images.asos-media.com/products/collusion-fleece-shacket-in-black/22541034-1-black?$XXL$&wid=513&fit=constrain" class="d-block w-100 home-image" alt="pic3"/>
              </div>
            </div>
          </div>
        </div>
        <div className="home-row">
          <Product id="1" title="Button Down Black Shirt" price={24.99} image="https://images.asos-media.com/products/asos-design-regular-fit-short-sleeve-satin-shirt-with-revere-collar-in-black/21022796-1-black?$XXL$&wid=513&fit=constrain" rating={3} />
          <Product id="2" title="Checked Overshirt Jacket" price={35.99}  image="https://images.asos-media.com/products/pullbear-checked-overshirt-jacket-in-black/23043443-1-black?$XXL$&wid=513&fit=constrain" rating={4}/>
        </div>
        <div className="home-row">
          <Product id="3" title="Abercrombie & Fitch Jacket" price={32.99}  image="https://images.asos-media.com/products/abercrombie-fitch-shirt-jacket-in-black/22396308-1-black?$XXL$&wid=513&fit=constrain" rating={4}/>
          <Product id="4" title="Baseball Jacket" price={30.99}  image="https://images.asos-media.com/groups/asos-design-oversized-tracksuit-in-black-with-side-tape/31835-group-1?$XXL$&wid=513&fit=constrain" rating={4}/>
          <Product id="5" title="Smoky Black Button Up" price={22.99}  image="https://images.asos-media.com/products/twisted-tailor-skinny-shirt-with-faded-smoke-print-in-black/21412803-1-black?$XXL$&wid=513&fit=constrain" rating={2}/>
        </div>
        <div className="home-row">
          <Product id="6" title="Premium Paisley shirt" price={23.99}  image="https://images.asos-media.com/products/jack-jones-premium-paisley-shirt-in-black/22505739-1-tapshoe?$XXL$&wid=513&fit=constrain" rating={3}/>
          <Product id="7" title="Buffalo Plaid Shirt" price={24.99}  image="https://images.asos-media.com/products/asos-design-regular-buffalo-plaid-shirt-in-black/22426519-1-black?$XXL$&wid=513&fit=constrain" rating={4}/>
          <Product id="8" title="Long Sleeve Geo Shirt" price={26.99}  image="https://images.asos-media.com/products/river-island-long-sleeve-geo-print-shirt-in-black/22636316-1-black?$XXL$&wid=513&fit=constrain" rating={3}/>
          <Product id="9" title="Abstract Leaf Shirt" price={27.99}  image="https://images.asos-media.com/products/asos-design-regular-fit-satin-abstract-leaf-print-in-black/21837637-1-black?$XXL$&wid=513&fit=constrain" rating={4}/>
        </div>
      </div>

    </div>
  )
}

export default Home
