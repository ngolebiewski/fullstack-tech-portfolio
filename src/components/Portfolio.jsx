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
                <li>Designed the database schema, and implemented in PostgreSQL via Prisma ORM.</li>
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


          <article className="portfolio-item shadow-bottom">
            <a href="https://keywordify.onrender.com/" target="_blank">
              <div className="hero-image">
                <img src="https://github.com/ngolebiewski/fullstack-tech-portfolio/raw/main/public/images/keywordify-animation.gif" alt="IBM-esque font spelling out Keywordify on this screenshot gif, keywords in resume and not in resume with count, a circle graph representing those words, repeat forever" />
              </div>
            </a>
            <section className="portfolio-info">
              <h1 className="portfolio-title">Keywordify</h1>

              <div className="hacker-font"><p className="blacklink"><a href="https://github.com/ngolebiewski/keywordify" target="_blank">Code on GitHub</a></p></div>
              <div className="hacker-font bottom-line"><p className="blacklink"><a href="https://keywordify.onrender.com/" target="_blank">Deployed on Render</a></p></div>

              <p>Role: Software Engineer</p>
              <p>Date: 8/2024</p>
              <p>I wanted to do a project with Python and learn Flask. Keywordify is an app for a software engineer's job search that compares the tech keywords in a job description and their
                resume. Just save a resume and a job description as .txt files and upload. With the results, green for IN and red for OUT, you can get a sense of how well suited you are and your resume is.
                Also, I wanted to try Plotly, the sunburst graph provides a graphic represenation of keywords in and out of the resume. Perhaps this will help you get through the ATS and onto a hirer's desk.
              </p>
              <ul>
                <li>Tech: Python, Flask and Plotly</li>
                <li>The Python code 'sanitizes' the txt files to prevent injection attacks.</li>
                <li>For privacy, I wrote Python code to delete the email address and phone number from uploaded resumes using a Regular Expression.</li>
              </ul>
            </section>
          </article>

          <article className="portfolio-item shadow-bottom">
            <a href="https://youtu.be/uLlSjLck_xE?si=j3ODsNumPi0T2cP2" target="_blank">
              <div className="hero-image">
                <img src="https://github.com/ngolebiewski/fullstack-tech-portfolio/raw/main/public/images/sol_296.jpg" alt="Screenshot: Black and White image of mast cam from mars rover on left, grid of blue and red sqaures on right." />

                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/uLlSjLck_xE?si=laSEqbipM4cjzO5C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

                {/* <div class="iframe-container">
                  <iframe
                    src="https://www.youtube.com/embed/uLlSjLck_xE?si=laSEqbipM4cjzO5C"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                  </iframe>
                </div> */}

              </div>
            </a>
            <section className="portfolio-info">
              <h1 className="portfolio-title">SkyCam: Flicker</h1>

              {/* <div className="hacker-font"><p className="blacklink"><a href="https://github.com/ngolebiewski/keywordify" target="_blank">Code on GitHub</a></p></div> */}
              <div className="hacker-font bottom-line"><p className="blacklink"><a href="https://youtu.be/uLlSjLck_xE?si=j3ODsNumPi0T2cP2" target="_blank">View on YouTube</a></p></div>

              <p>Role: Creative Technologist</p>
              <p>Date: 11/2024</p>
              <p>I wrote a Python script to get and animate images from NASA's Perseverance Rover's SkyCam.
                The images flicker past (watch the sun bounce back and forth, and change angle over time), reminiscent of Super 8 film from the 1960s -- like our first moving views from the moon.
                At the same time, the code is making a blue/red colored-in grid. Each square is based on whether that image from Mars is above or below the average image brightness of all the Sols' images.
                Mars is painting a picture for us.
                The title references Tony Conrad's 'The Flicker', and the the content references his <a href="https://en.wikipedia.org/wiki/The_Flicker#/media/File:Tony_Conrad_-_The_Flicker_exposure_timing_sheet.png" target="_blank">design</a> for the film.
              </p>
              <ul>
                <li>Tech: Python, PILLOW, OpenCV, Numpy, Open source data from NASA</li>
              </ul>
            </section>
          </article>


          <article className="portfolio-item shadow-bottom">
            <a href="https://turtle-encoder.onrender.com/" target="_blank" rel="noopener noreferrer">
              <div className="hero-image">
                <img
                  src="https://raw.githubusercontent.com/ngolebiewski/next-art-portfolio/refs/heads/main/public/images/tech-projects/turtle_encoder.jpg"
                  alt="Conceptual art project encoding secret messages with student-painted turtles."
                />
              </div>
            </a>
            <section className="portfolio-info">
              <h1 className="portfolio-title">Turtle Encoder</h1>
              <div className="hacker-font">
                <p className="blacklink">
                  <a href="https://github.com/ngolebiewski/turtle_code_python" target="_blank" rel="noopener noreferrer">
                    Code on GitHub
                  </a>
                </p>
              </div>
              <div className="hacker-font bottom-line">
                <p className="blacklink">
                  <a href="https://turtle-encoder.onrender.com/" target="_blank" rel="noopener noreferrer">
                    Deployed on Render
                  </a>
                </p>
              </div>
              <p>Role: Artist, Project Lead, Software Engineer</p>
              <p>Date: 2025-03-17</p>
              <p>
                Led a 5th-grade class in a conceptual art project that encoded secret messages within an array of student-painted turtle images. The project explored representing information, converting letters to binary code, with turtles and their orientations representing 0s and 1s. Developed both a React/JavaScript web demo and a Python CLI script.
                  
                <br /><br />
                Read more about the Turtle Encoder in the article I wrote on <a href="https://medium.com/@x_48243/turtle-power-or-an-introduction-to-creating-secret-messages-through-art-and-code-2e6803af0ad2">Medium</a>
              </p>
              <ul>
                <li>React</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>Pillow</li>
                <li>Photoshop</li>
              </ul>
            </section>
          </article>




        </section>
      </div >
    </div >
  )
}

export default Portfolio;