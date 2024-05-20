const Portfolio = () => {
  return (
    <div id="portfolio" className="bottom-line">
      <div className="bump-it-over">
        <h1>Portfolio</h1>

        <section className="navigation">

          <article className="portfolio-item shadow-bottom">
            <a href="https://tower-of-zurpalen.onrender.com/" target="_blank">
              <div className="hero-image">
                <img src="/images/tower-of-zarpulen_titlescene.png" alt="Epic Video game castle with gothic text the tower of zurpalen" />
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

        </section>



      </div >
    </div >
  )
}

export default Portfolio;