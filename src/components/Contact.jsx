// const Contact = () => {
//   return (
//     <div id="contact" className="bottom-line">
//       <div className="bump-it-over">
//         <h1>Contact</h1>
//         <p className="hacker-font blacklink"><a href="mailto:x@nickgolebiewski.com">x@nickgolebiewski.com</a> </p>
//         <br />
//         <a href="https://keywordify.onrender.com/" target="_blank"><img src="https://keywordify.onrender.com/static/16bit-dot.png" alt="Keywordify dot" /></a>
//         <a href="https://tower-of-zurpalen.onrender.com" target="_blank"><img src="https://tower-of-zurpalen.onrender.com/assets/titlePage/warrior.png" alt="warrior from tower of zurpalen" width="auto" height="32px"/></a>
//         <a href="https://socket-sound-sharer.onrender.com" target="_blank"><img src="https://socket-sound-sharer.onrender.com/green-triangle-thing.png" alt="green triangle from sonic sound sharer" width="auto" height="32px"/></a>
//         <a href="https://dnd-spell-checker.netlify.app" target="_blank"><img src="https://dnd-spell-checker.netlify.app/dragon3a.ico" alt="Dungeons and Dragons Spell Checker icon" width="auto" height="32px"/></a>
        

//       </div>
//     </div>
//   )
// }

// export default Contact;

import React, { useState, useEffect } from 'react';

const ImageWithLoading = ({ src, alt, placeholder, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  return (
    <div style={{ display: 'inline-block', margin: '0 10px', width, height }}>
      {isLoaded ? (
        <img src={src} alt={alt} width={width} height={height} />
      ) : (
        <img src={placeholder} alt="Loading..." width={width} height={height} />
      )}
    </div>
  );
};

const Contact = () => {
  const pathToPlaceholder = "https://dnd-spell-checker.netlify.app/dragon3a.ico"; // Update this with your placeholder image path

  return (
    <div id="contact" className="bottom-line">
      <div className="bump-it-over">
        <h1>Contact</h1>
        <p className="hacker-font blacklink">
          <a href="mailto:x@nickgolebiewski.com">x@nickgolebiewski.com</a>
        </p>
        <br />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
          <a href="https://keywordify.onrender.com/" target="_blank" rel="noopener noreferrer">
            <ImageWithLoading
              src="https://keywordify.onrender.com/static/16bit-dot.png"
              alt="Keywordify dot"
              placeholder={pathToPlaceholder}
              height="32px"
            />
          </a>
          <a href="https://tower-of-zurpalen.onrender.com" target="_blank" rel="noopener noreferrer">
            <ImageWithLoading
              src="https://tower-of-zurpalen.onrender.com/assets/titlePage/warrior.png"
              alt="warrior from tower of zurpalen"
              placeholder={pathToPlaceholder}
              height="32px"
            />
          </a>
          <a href="https://socket-sound-sharer.onrender.com" target="_blank" rel="noopener noreferrer">
            <ImageWithLoading
              src="https://socket-sound-sharer.onrender.com/green-triangle-thing.png"
              alt="green triangle from sonic sound sharer"
              placeholder={pathToPlaceholder}
              height="32px"
            />
          </a>
          <a href="https://dnd-spell-checker.netlify.app" target="_blank" rel="noopener noreferrer">
            <ImageWithLoading
              src="https://dnd-spell-checker.netlify.app/dragon3a.ico"
              alt="Dungeons and Dragons Spell Checker icon"
              placeholder={pathToPlaceholder}
              height="32px"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
