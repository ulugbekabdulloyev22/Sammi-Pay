import { quotes } from "../assets";

function FeedbackCard({ feedback, idx }) {
  return (
    <div
      className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-8 my-5 cursor-pointer feedback-card `}
    >
      <img
        src={quotes}
        alt="quotes"
        className="w-[42px] h-[27px] object-contain mb-3"
      />

      <p className="font-montserrat font-normal text-[18px] leading-[32px] text-white">
        {feedback.content}
      </p>

      <div className={`flex flex-row my-4`}>
        <div
          className={`w-[50px] h-[50px] flex justify-center items-center rounded-full bg-slate-400`}
        >
          <img
            src={feedback.avatar}
            alt="avatar"
            className="rounded-full object-contain"
          />
        </div>
        <div className={`flex flex-col ml-4`}>
          <h4 className="font-montserrat font-semibold text-[20px] leading-[32px] text-white">
            {feedback.name}
          </h4>
          <p className="font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite">
            {feedback.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
