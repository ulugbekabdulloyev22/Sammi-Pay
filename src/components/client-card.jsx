import { style } from "../util/style";

function ClientCard({ logo }) {
  return (
    <div
      className={`flex-1 ${style.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
    >
      <img
        src={logo}
        alt="logo"
        className="sm:w-[192px] w-[100px] object-contain"
      />
    </div>
  );
}

export default ClientCard;
