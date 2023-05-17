
import './App.css';
import Banner from './components/Banner'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Row from './components/Row'
import requests  from './request';
function App() {
  return (
<div>
<Navbar/>
<Banner/>
<Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
<Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow/>
<Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow/>
<Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow/>
<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow/>
<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow/>
<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow/>
<Footer/>
</div>
  );
}

export default App;




