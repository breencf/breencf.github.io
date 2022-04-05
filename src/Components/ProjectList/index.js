export const ProjectList = () => {
  return (
    <div className="list">
      <div className="project-card">
        <div className="pc-left">
          <img
            className="project-gif"
            src="https://cb-aa-spotify-clone-songs.s3.amazonaws.com/spot-ify.gif"
          />
        </div>
        <div className="pc-right">
          <h3>Spot-ify</h3>
          <h4>
            a creatively named near pixel-perfect clone of Spotify's web player
          </h4>
          <h4>
            javascript, React/Redux, React-Hooks, Python, Flask, SQLAlchemy,
            postgresql, Docker
          </h4>
          <h5>
            Chris Breen, Andrew Cooksey, Casey Cochran, Wilvanson Dutervil
          </h5>
          <h5>Features:</h5>
          <ul>
            <li>
              A global audio player built from scratch using React-Hooks, Redux,
              and the HTML Audio element
            </li>
            <li>
              Fully functional queue logic, with the ability to add and remove
              from the queue, and for albums to play after the user queue
            </li>
            <li>
              User profiles, Album Pages, Artist Pages, and Playlist Pages
            </li>
            <li>Extremely modular components used over, and over, and over</li>
            <li>
              Seeded with a lot of really smooth jazz. Check out Tappan Zee by
              Bob James.....
            </li>
          </ul>
          <div>
            <a target="_blank" href="https://github.com/breencf/spot-ify">
              Github
            </a>
            {" || "}
            <a target="_blank" href="https://spot-ify.herokuapp.com">
              live site
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="project-card">
        <div className="pc-left">
          <img
            className="project-gif"
            src="https://res.cloudinary.com/jadecabbage/image/upload/v1648835039/loirebnb_rnmyw4.gif"
          />
        </div>
        <div className="pc-right">
          <h3>loirebnb</h3>
          <h4>
            a loire wine themed airbnb clone for booking tastings at the
            region's most prestigous wineries
          </h4>
          <h4>
            Javascript, react, redux, express, sequelize, postgresql, Google
            Places API, Google Maps API, Cloudinary Upload API{" "}
          </h4>
          <ul>
            <li>Fully dynamic thanks to redux state management</li>
            <li>
              winery creation user interface enhanced with google places api
              location autocomplete and drag and drop upload to cloudinary
            </li>
            <li>
              a robust database that allows for a lot of user customization of
              winery listings
            </li>
            <li>
              search results are integrated with Google Maps API to give users
              context in terms of location
            </li>
            <li>
              Users can leave winery reviews that update ratings in real time
            </li>
            <li>
              Users can add wineries to their "saved wineries" list, to save
              them for later
            </li>
            <li>Users an ACTUALLY book a tasting with Clos Rougeard?!?!?!?!</li>
          </ul>
          <div>
            <a target="_blank" href="https://github.com/breencf/loire-bnb">
              Github
            </a>
            {" || "}
            <a target="_blank" href="https://loirebnb.herokuapp.com">
              Live site
            </a>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="pc-left">
          <img
            className="project-gif"
            src="https://hammergram.s3.amazonaws.com/hammergram.gif"
          ></img>
        </div>
        <div className="pc-right">
          <h3>Hammergram</h3>
          <h4>
            A pixel perfetmobile-optimized instagram clone for bottle shots of
            your cali #hammers and other unicorn bottles
          </h4>
          <h4>React, Redux, JavaScript, Express, Sequelize, postgresql</h4>
          <ul>
            <li>Optimized for moblile viewing, but also desktop-agnostic </li>
            <li>Double tap/double click to like/unlike posts</li>
            <li>Explore page with randomized posts to discover new users</li>
          </ul>
          <div>
            <a target="_blank" href="https://github.com/breencf/hammergram">
              Github
            </a>
            {" || "}
            <a target="_blank" href="https://hammergram.herokuapp.com">
              heroku
            </a>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="pc-left">
          <img
            className="project-gif"
            src="https://res.cloudinary.com/jadecabbage/image/upload/v1648855972/medium_oegijf.gif"
          />
        </div>
        <div className="pc-right">
          <h3>Medium Medium</h3>
          <h4>
            An eerie psychic themed Medium clone for the supernaturally-inclined
          </h4>
          <h4>JavaScript, Fetch API, Pug, Express, Sequelize, PostgreSQL</h4>
          <h5>Chris Breen, Daniel LaVergne, Nathan Treadway, Jesse Brooks</h5>
          <ul>
            <li>My very first full-stack project!</li>
            <li>a Dynamic like button</li>
            <li>Stories, Comments, Likes and follows</li>
          </ul>
          <div>
            <a
              target="_blank"
              href="https://github.com/daniellav/medium-for-mediums"
            >
              Github
            </a>
            {" || "}
            <a target="_blank" href="https://medium-for-mediums.herokuapp.com">
              live site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
