import { style } from "./util/style";
import {
  Billing,
  Business,
  Client,
  Contract,
  CTA,
  Home,
  Navbar,
  Statistics,
  Tastimonials,
} from "./components";

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

      {/* Statistics */}
      <div className={`bg-primary ${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.container}`}>
          <Statistics />
          {/* Contract */}
          <Contract />

          {/* Billing */}
          <Billing />

          {/* Business */}
          <Business />

          {/* Tastimonials */}
          <Tastimonials />

          {/* Client */}
          <Client />

          {/* CTA */}
          <CTA />

          {/* Footer */}
        </div>
      </div>
    </div>
  );
}

export default App;
