export default function Header() {
  const logo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9pJBnM2oyC3ZijxL1X0nK0UTPUVhNJd70g&s";

  return (
    <header className="flex items-center justify-between border-b-[1px] border-b-[#efefef] p-2">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <img className="aspect-auto h-8" src={logo} alt="" />
          <h1 className="text-2xl text-[#f54985]">Chefify</h1>
        </div>
        <div className="flex items-center gap-2 rounded-sm bg-[hsl(0,0%,90%)] p-2">
          <button>&#128270;</button>
          <input className="outline-none" type="text" placeholder="cakescascsa" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ul className="flex gap-4">
          <li>
            <a href="#">What to cook</a>
          </li>
          <li>
            <a href="#">Recipes</a>
          </li>
          <li>
            <a href="#">Ingredients</a>
          </li>
          <li>
            <a href="#">Occasions</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex cursor-pointer items-center justify-center gap-1 rounded-lg bg-[hsl(338,100%,95%)] px-4 py-2 text-[hsl(336,67%,50%)]">
          <img className="aspect-square w-4" src="cart.png" alt="" />
          <span>Your Recipe Box</span>
        </button>
        <img
          className="aspect-auto w-12 rounded-full bg-[hsl(338,100%,90%)] p-[2.5%]"
          src="https://api.dicebear.com/7.x/pixel-art/svg"
          alt=""
        />
      </div>
    </header>
  );
}
