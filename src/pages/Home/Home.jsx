// Home.jsx
import './Home.css';

const Home = () => {
  return (
    <div className="Home-video">
      <video autoPlay loop muted className="video">
        <source src="https://videos.pexels.com/video-files/3209214/3209214-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>
      <div className="text-overlay">
        <p>Comienza la creación de tus propias recetas</p>
      </div>
      <div className="">
        <p>Comienza la preparación de tus propias recetas</p>
      </div>
    </div>
    
  );
}

export default Home;
