import logo from './logo.svg';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from "./data"
import "./index.css"
function App() {
  const details = data.map(x => 
  
    <Card image = {x.coverImg} title = {x.title} price = {x.price} rating = {x.stats.rating} review = {x.stats.reviewCount}/>
)

  return (
    <>
    <Navbar />
    <section className="cards-list">
    {details}
    </section>
    </>
    
  );
}

export default App;
