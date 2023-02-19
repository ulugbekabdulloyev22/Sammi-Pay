import { style } from "./util/style";
import { Home, Navbar } from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar */}
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.container}`}>
          <Navbar />
        </div>
      </div>

      {/* Home */}
      <div className={`bg-primary ${style.flexStart}`}>
        <div className={`${style.container}`}>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
