// pages/page.tsx (or any other page component)
import Navbar from '../components/Navbar'
import Embed from '../components/Embed'

const Home = () => {
  return (
    <div>
      <Embed />
      {/* Include the Navbar component here */}
      <Navbar />
      {/* Other page content goes here */}
    </div>
  );
}

export default Home;

