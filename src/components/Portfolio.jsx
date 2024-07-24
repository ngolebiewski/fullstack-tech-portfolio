const Portfolio = () => {
  return (
    <div id="portfolio" className="bottom-line">
      <div className="bump-it-over">
        <h1>Portfolio</h1>

        <section className="navigation">

          <article className="portfolio-item shadow-bottom">
            <a href="https://tower-of-zurpalen.onrender.com/" target="_blank">
              <div className="hero-image">
                <img src="https://github.com/ngolebiewski/fullstack-tech-portfolio/raw/main/public/images/tower-of-zarpulen_titlescene.jpg" alt="Epic Video game castle with gothic text the tower of zurpalen" />
              </div>
            </a>
            <section className="portfolio-info">
              <h1 className="portfolio-title">The Tower of Zurpalen</h1>

              <div className="hacker-font"><p className="blacklink"><a href="https://github.com/Team-7-7/newTOZ" target="_blank">Code on GitHub</a></p></div>
              <div className="hacker-font bottom-line"><p className="blacklink"><a href="https://tower-of-zurpalen.onrender.com/" target="_blank">Deployed on Render (Play! It takes a minute to load.)</a></p></div>

              <p>Role: Full-stack Developer, Game Designer, Pixel Artist, Animator </p>
              <p>Date: 1-2/2024</p>
              <p>Team project to build an 8-bit-like game using a 2D game framework and connecting to a database.</p>
              <ul>
                <li>Learned Phaser3 (JS 2-D game engine), used Node, Express, React, Redux, PostgreSQL, Prisma, CSS, and JS.</li>
                <li>Implemented Redux to manage state, wrote Redux thunks to handle API calls within the Phaser framework.</li>
                <li>Wrote the REST API endpoints, and middleware to authenticate JSON Web Tokens</li>
                <li>Thought up the "Zurpalen" plot twist and coded the reveal animation</li>
              </ul>
            </section>
          </article>

          <article className="portfolio-item shadow-bottom">
            <a href="https://met-super-guesser-beta.netlify.app/" target="_blank">
              <div className="hero-image">
                <img src="https://github.com/ngolebiewski/fullstack-tech-portfolio/raw/main/public/images/met-super-guesser-pissaro.jpg" alt="Epic Video game castle with gothic text the tower of zurpalen" />
              </div>
            </a>
            <section className="portfolio-info">
              <h1 className="portfolio-title">Met Super Guesser</h1>

              <div className="hacker-font"><p className="blacklink"><a href="https://github.com/ngolebiewski/Met-Super-Guesser" target="_blank">Code on GitHub</a></p></div>
              <div className="hacker-font bottom-line"><p className="blacklink"><a href="https://met-super-guesser-beta.netlify.app/" target="_blank">Deployed on Netlify (Play!)</a></p></div>

              <p>Role: Software Engineer</p>
              <p>Date: 11/2023</p>
              <p>A multiple choice guessing game that utilizes the The Metropolitan Museum of Art API to pull random artworks from the Drawings and Prints, European Paintings, and Photography departments. Which artist made that artwork?</p>
              <ul>
                <li>Fetched data from the Met’s public API using Javascript Async/Await and randomly selected artworks.</li>
                <li>Used Javascript to randomly sort the randomly selected artworks choices using the Fisher Yates Algorithm.</li>
              </ul>
            </section>
          </article>


          <article className="portfolio-item shadow-bottom">
            <a href="https://socket-sound-sharer.onrender.com/" target="_blank">
              <div className="hero-image">
                <img src="https://github.com/ngolebiewski/fullstack-tech-portfolio/raw/main/public/images/soundscaper-web.gif" alt="animation of 3d polygonal object from a screenshot" />
              </div>
            </a>
            <section className="portfolio-info">
              <h1 className="portfolio-title">Sonic Soundscaper</h1>

              <div className="hacker-font"><p className="blacklink"><a href="https://github.com/ngolebiewski/socket-sound-sharer" target="_blank">Code on GitHub</a></p></div>
              <div className="hacker-font bottom-line"><p className="blacklink"><a href="https://socket-sound-sharer.onrender.com/" target="_blank">Deployed on Render</a></p></div>

              <p>Role: Software Engineer, Creative Coder</p>
              <p>Date: 7/2024</p>
              <p>A collaborative soundscape and art generation app. When you play a sound, it activates that sound for all users online at that moment in time. Make some noise (Turn silent-mode off!). Pro-tip: Try this in two browser windows for full drawing effects.</p>
              <ul>
                <li>Live interactions via socket.io and its implementation of websockets.</li>
                <li>Draw polygonal art via p5.js a.k.a Processing.</li>
                <li>Put in Howler.js for the sound library.</li>
              </ul>
            </section>
          </article>

          <article className="portfolio-item shadow-bottom">
            <a href="https://nycknights.com/" target="_blank">
              <div className="hero-image">
                <img src="https://github.com/ngolebiewski/fullstack-tech-portfolio/raw/main/public/images/NYC-Knights-screenshot.jpg" alt="School chess club website screenshot" />
              </div>
            </a>
            <section className="portfolio-info">
              <h1 className="portfolio-title">NYC Knights Website</h1>

              <div className="hacker-font"><p className="blacklink"><a href="https://github.com/ngolebiewski/nyc-knights" target="_blank">Code on GitHub</a></p></div>
              <div className="hacker-font bottom-line"><p className="blacklink"><a href="https://nycknights.com" target="_blank">Deployed on Wordpress.com</a></p></div>

              <p>Role: Web Developer</p>
              <p>Date: 6/2024</p>
              <p>Redesigned and redeveloped the WordPress website for the PS 41 "The Greenwich Village School" chess club and team.
                Created a new child theme and design to replace the outdated PHP 7.4 theme, ensuring compatibility with PHP 8.x
                while maintaining the existing content.
              </p>
              <ul>
                <li>Set up a test server to develop the new theme without disrupting the live site.</li>
                <li>Authored a detailed README for the child theme on GitHub, facilitating future development and maintenance.</li>
              </ul>
            </section>
          </article>


        </section>
      </div >
    </div >
  )
}

export default Portfolio;