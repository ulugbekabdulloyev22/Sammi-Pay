import { style } from "./util/style";
import { Navbar } from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${style.paddingX}`}>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
