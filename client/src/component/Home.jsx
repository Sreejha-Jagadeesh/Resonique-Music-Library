// import React from "react";
// import "./Home.css"; // Import updated CSS

// const videoUrls = [
//   "https://www.youtube.com/embed/AY3Yea6hBbI",
//   "https://www.youtube.com/embed/XMrZO7hH6sw",
//   "https://www.youtube.com/embed/5BJDFKs41pI",
//   "https://www.youtube.com/embed/1seR_ckLXz4",
//   "https://www.youtube.com/embed/e_04ZrNroTo",
//   "https://www.youtube.com/embed/N5YSbaUl9Y4",
//   "https://www.youtube.com/embed/020g-0hhCAU",
//   "https://www.youtube.com/embed/QtR3ztWjvag",
//   "https://www.youtube.com/embed/fHI8X4OXluQ",
//   "https://www.youtube.com/embed/2Vv-BfVoq4g",
//   "https://www.youtube.com/embed/hLQl3WQQoQ0",
//   "https://www.youtube.com/embed/AJtDXIazrMo"
// ];

// const Home = () => {
//   return (
//     <div className="home-container">
//       <h2 className="home-title">Enjoy Your Songs</h2>
      
//       <div className="video-grid">
//         {videoUrls.map((url, index) => (
//           <iframe 
//             key={index}
//             src={`${url}?rel=0&modestbranding=1&showinfo=0&controls=1`}
//             title={`Song ${index + 1}`}
//             allow="autoplay; encrypted-media; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import "./Home.css"; // Import updated CSS
import BottomNavbar from "./BottomNavbar"; // Import Bottom Navbar

const videoUrls = [
  "https://www.youtube.com/embed/AY3Yea6hBbI",
  "https://www.youtube.com/embed/XMrZO7hH6sw",
  "https://www.youtube.com/embed/5BJDFKs41pI",
  "https://www.youtube.com/embed/1seR_ckLXz4",
  "https://www.youtube.com/embed/e_04ZrNroTo",
  "https://www.youtube.com/embed/N5YSbaUl9Y4",
  "https://www.youtube.com/embed/020g-0hhCAU",
  "https://www.youtube.com/embed/QtR3ztWjvag",
  "https://www.youtube.com/embed/fHI8X4OXluQ",
  "https://www.youtube.com/embed/2Vv-BfVoq4g",
  "https://www.youtube.com/embed/hLQl3WQQoQ0",
  "https://www.youtube.com/embed/AJtDXIazrMo"
];

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">Enjoy Your Songs</h2>

      {/* Scrollable content */}
      <div className="video-container">
        <div className="video-grid">
          {videoUrls.map((url, index) => (
            <iframe
              key={index}
              src={`${url}?rel=0&modestbranding=1&showinfo=0&controls=1`}
              title={`Song ${index + 1}`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>

      {/* Fixed Bottom Navbar */}
      <BottomNavbar />
    </div>
  );
};

export default Home;
