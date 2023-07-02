import bookLogo from "../assets/bookNation.jpg";

const Header = () => {
  return (
    <div className=" h-[100px] w-[100%] bg-slate-400">
      <section className="flex justify-between pt-7">
        <div className="flex">
          <h1 className="ml-5 text-2xl">
            <span className="text-blue-700">Book</span> Nation
          </h1>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="border-none p-2 rounded-lg outline-none "
        />
        <ul className="flex gap-5 mr-6">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Shop</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Header;
