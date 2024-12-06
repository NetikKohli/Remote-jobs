import BookmarkIcon from "../assets/BookmarkIcon";
import Location from "../assets/Location";

function Card({ title, salary, company_logo, company_name, address }) {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-md hover:bg-[#FFF6E6] transition duration-300 ease-in-out m-2 sm:m-4 max-sm:p-1 max-sm:m-1">
      <div className="font-semibold text-lg sm:text-xl mb-2 text-gray-800">
        {title}
      </div>

      <div className="flex flex-wrap gap-2 text-sm items-center mb-4">
        <div className="text-red-500 bg-gray-200 px-2 py-1 font-semibold rounded">
          Remote
        </div>
        <div className="text-gray-600">Salary: {salary}</div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center">
            <img
              className="sm:w-10 max-sm:h-5 max-sm:w-5 sm:h-10 mr-3 rounded-md object-contain border border-gray-200"
              src={company_logo}
              alt="Logo"
            />
            <div className="text-[8px] sm:text-[10px] lg:text-base">
              <div className="font-semibold text-gray-800">
                {company_name}
              </div>
              <div className="text-gray-500 flex items-center gap-1 "><Location/> {address}</div>
            </div>
        </div>

        <BookmarkIcon className="text-gray-500 hover:text-gray-800 cursor-pointer max-sm:w-2" />
      </div>
    </div>
  );
}

export default Card;
