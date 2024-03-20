
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Why = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">WHY CHOOSE MARSH Tech</h1>
      <div className="mb-8">
        <hr className="border-t border-[#0077b6]  mx-auto" />
      </div>
      <div className="flex   justify-around mb-6 ">
        <div className="  mb-4 md:mb-0">
          <div className="flex items-center mb-2">
            <IoMdCheckmarkCircleOutline className="text-[#0077b6] mr-2" />
            <p>Technological competitive advantage</p>
          </div>
          <div className="flex items-center">
            <IoMdCheckmarkCircleOutline className="text-[#0077b6] mr-2" />
            <p>Reduced time-to-market</p>
          </div>
        </div>
        <div className=" ">
          <div className="flex items-center mb-2">
            <IoMdCheckmarkCircleOutline className="text-[#0077b6] mr-2" />
            <p>End-user satisfaction rate increase</p>
          </div>
          <div className="flex items-center">
            <IoMdCheckmarkCircleOutline className="text-[#0077b6] mr-2" />
            <p>Efficiency and productivity boost</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
