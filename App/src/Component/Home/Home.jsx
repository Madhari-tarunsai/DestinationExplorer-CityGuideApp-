// import React from 'react';
// import './Home.css';

// const Home = () => {
//   return (
//     <div className="home">
//       <div className="home-info">
//         <p className="tagline">Travel Website</p>
//         <h1>NEVER STOP</h1>
//         <h1>EXPLORING THE</h1>
//         <h1>WORLD.</h1>
//         <p className="description">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nihil voluptatum unde obcaecati labore mollitia inventore eligendi distinctio quas in nisi, aut beatae dicta quo libero asperiores sapiente. Minima, quod.
//         </p>
//         <button className="explore-btn">Explore Places</button>
//       </div>

//       <div className="home-images">
//         <div className="img-box">
//           <img src="https://thumbs.dreamstime.com/b/running-sunset-friends-beach-vacation-break-holiday-together-island-freedom-energy-group-people-ocean-376995489.jpg" alt="beach" />
//           <div className="img-label">Beach</div>
//         </div>
//         <div className="img-box">
//           <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/592383936.jpg?k=f47b224ceb145e1bce21a5f94833254a95485c6c0acb54dc1d577ebc8e2bceed&o=&hp=1" alt="nature" />
//           <div className="img-label">Nature</div>
//         </div>
//         <div className="img-box">
//           <img src="https://images.trvl-media.com/lodging/100000000/99440000/99430200/99430177/b36d950d.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill" alt="hotel" />
//           <div className="img-label">Hotel</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <p className="tagline">Travel Website</p>
          <h1>NEVER STOP</h1>
          <h1>EXPLORING THE</h1>
          <h1>WORLD.</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nihil voluptatum unde obcaecati labore mollitia inventore eligendi distinctio quas in nisi.
          </p>
          <button className="explore-btn">Explore Places</button>
        </div>

        <div className="home-images">
          <div className="img-box">
            <img src="https://thumbs.dreamstime.com/b/running-sunset-friends-beach-vacation-break-holiday-together-island-freedom-energy-group-people-ocean-376995489.jpg" alt="Beach" />
            <div className="img-overlay">Beach</div>
          </div>
          <div className="img-box">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/592383936.jpg?k=f47b224ceb145e1bce21a5f94833254a95485c6c0acb54dc1d577ebc8e2bceed&o=&hp=1" alt="Nature" />
            <div className="img-overlay">Nature</div>
          </div>
          <div className="img-box">
            <img src="https://images.trvl-media.com/lodging/100000000/99440000/99430200/99430177/b36d950d.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill" alt="Hotel" />
            <div className="img-overlay">Hotel</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
