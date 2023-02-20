import { clients } from "../util/constants";
import { style } from "../util/style";
import { ClientCard } from "./";

function Client() {
  return (
    <div id="clients" className={`${style.flexCenter} my-4`}>
      <div className={`${style.flexCenter} flex-wrap w-full`}>
        {clients &&
          clients.map((client) => <ClientCard key={client.id} {...client} />)}
      </div>
    </div>
  );
}

export default Client;
