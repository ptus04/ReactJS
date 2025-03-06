import styles from "../css/Header.module.css";

export default function Header() {
  const logo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9pJBnM2oyC3ZijxL1X0nK0UTPUVhNJd70g&s";

  return (
    <header>
      <div>
        <div>
          <img src={logo} alt="" style={{ aspectRatio: 1, height: 32 }} />
          <h1>Chefify</h1>
        </div>
        <div className={styles.searchBar}>
          <button className={styles.btnSearch}><span>&#128270;</span></button>
          <input className="txt-search" type="text" placeholder="cakescascsa" />
        </div>
      </div>

      <div>
        <ul>
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

      <div>
        <button className={styles.btnCart}>
          <img src="cart.png" alt="" style={{ aspectRatio: 1, width: 16 }} />
          Your Recipe Box
        </button>
        <img className={styles.avatar} src="https://api.dicebear.com/7.x/pixel-art/svg" alt="" />
      </div>
    </header>
  );
}
