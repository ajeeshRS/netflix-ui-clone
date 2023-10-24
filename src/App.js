import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import {
  action,
  drama,
  fantasy,
  originals,
  sci_fi,
} from "./Constants/Constants";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost title="Netflix Originals" link={originals} />
      <RowPost title="Action" link={action} />
      <RowPost title="Fantasy" link={fantasy} />
      <RowPost title="Drama" link={drama} />
      <RowPost title="Sci-fi" link={sci_fi} />
    </div>
  );
}

export default App;
