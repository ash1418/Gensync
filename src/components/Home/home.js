import {Link} from 'react-router-dom';
import style from "./home.module.css";

function Home() {
  return (
    <>
      <div className='main'>
        <h1>Welcome to Gensync!!</h1>
        {/* <a href="/about">About</a>  anchor tag is avoided while linking as it will reload the page but its 
        a single page application so no reloading needed but whenm reloads using a tag all the states will reintialised to very starting states which is not req */}
        <ul>
        <li><Link to="/alumni">Alumni</Link></li><br></br>  
        <li><Link to="/announcements">Announcements</Link></li>  <br></br>
        <li><Link to="/events">Events</Link></li> <br></br>
        <li><Link to="/notices">Notices</Link></li><br></br>
        </ul>
      </div>
    </>
  );
}

export default Home;
