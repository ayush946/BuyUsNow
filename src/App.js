import './App.css';
import UpcomingEvents from './upcomingEvents';
import RecommendedShows from './recommendedShows';
import Body from './body';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Bar from './bar';


function App() {
  
  return (
    <div className="App">
      <Bar/>
      <div className='bar-2' style={{display: 'flex', flexDirection: 'row' , marginLeft:'9%', marginRight:'9%', marginBottom:'2%',width:"80%"}}>
        <div style={{flexGrow:'1'}}><FontAwesomeIcon icon={faLocationDot}/> Mumbai, India</div>
        <div className='bar-2-elements' style={{display: 'flex', flexDirection:'row', flexGrow:'2', justifyContent:'space-around'}}>
          <div>Live Shows</div>
          <div>Streams</div>
          <div>Movies</div>
          <div>Plays</div>
          <div>Events</div>
          <div>Sports</div>
          <div>Activities</div>
        </div>
      </div>
      
      <div className='parent-container'>
        <div className='body-container'> <Body/> </div>
        <div className='cards-container'>
            <div className='child' style={{display:'flex', flexDirection:'column' , justifyContent:'center', margin:'5% 15%'}}>

              <div style={{width: '100%', overflow:'auto'}}>
                <h3 style={{textAlign:'left', color:"white"}}>Recommended Shows <FontAwesomeIcon icon={faArrowRightLong} /></h3>
                <RecommendedShows/>
              </div>

              <div style={{width: '100%'}}>
                <h3 style={{textAlign:'left'}}>Upcoming events <FontAwesomeIcon icon={faArrowRightLong} /></h3>
                <UpcomingEvents/>
              </div>

            </div>
          

        </div>
      </div>

      
    </div>
  );
}

export default App;
