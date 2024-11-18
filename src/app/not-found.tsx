import Navbar from '../components/Navbar';
import Embed from '../components/Embed';
import Button from '../components/elements/Button/Button';  // Import the Button component

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Embed and Navbar remain intact at the top */}
      <div>
        <Embed />
        <Navbar />
      </div>

      {/* Main content centered in the middle */}
      <div className="flex flex-1 justify-center items-center text-center">
        <div>
          <h1 className="text-3xl text-orange-500">Not Found! Go find another page!</h1>
          <p className="text-lg mt-4 text-orange-500">
            Sorry, the page you're looking for doesn't exist, maybe try to find another one? :)
          </p>

          {/* Using the Button component */}
          <Button href="/" text="Go Back to Home" />
        </div>
      </div>
    </div>
  );
}

