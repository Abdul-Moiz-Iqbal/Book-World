import { Avatar } from "flowbite-react";

const ReviewCard = () => {
  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg mt-5 mb-5 p-5">
      <div className="flex">
        <Avatar
          className="w-15"
          img="http://dkprintworld.com/wp-content/uploads/2019/07/Andre-Couture.jpg"
          rounded
        />
        <div className="ml-3">
          <div className="font-bold">John Joe</div>
          <div className="text-slate-500 text-sm font-semibold">
            Aug 20, 2022
          </div>
        </div>
      </div>
      <div className="mt-2 text-sm text-slate-700">
        One of the best business books I've read, clearly written, with a strong
        message throughout. the ideas portrayed are backed up by the author's
        significant experience in real-world implementation of his analysis,
        making the book a must-read for anyone interested in disruptive
        businesses.
      </div>
      <div>Thumps Up/Thumps down</div>
    </div>
  );
};

export default ReviewCard;
