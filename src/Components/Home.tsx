import Navbar from "./Navbar";
import Search from "./Search";
import '../CSS/home.css'
const Home: React.FC = () => {
  return (
    <div className='mainContainer'>
      <Navbar/>
      <div style={{ position: 'sticky', top: '0', backgroundColor: 'white', zIndex:'1'}}>
        <Search/>
      </div>
      <div className="seasonsImage">
        <img src="https://imageio.forbes.com/specials-images/imageserve/61f83f71b8bb01f68445ff90/0x0.jpg?format=jpg&width=1200" alt="seasons"/>
      </div>
      <section className="locations">
        <a className="location-first" href="/offers">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/W_Hotel_in_Union_Square_New_York_City.JPG" alt="Location1"/>
          <div><h1>aaa</h1></div>
        </a>
        <a href="https://upload.wikimedia.org/wikipedia/commons/f/f1/W_Hotel_in_Union_Square_New_York_City.JPG">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/W_Hotel_in_Union_Square_New_York_City.JPG" alt="Location1"/>
        </a>
        <a className="location-last" href="https://upload.wikimedia.org/wikipedia/commons/f/f1/W_Hotel_in_Union_Square_New_York_City.JPG">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/W_Hotel_in_Union_Square_New_York_City.JPG" alt="Location1"/>
        </a>
      </section>
    </div>
  );
}
export default Home;
