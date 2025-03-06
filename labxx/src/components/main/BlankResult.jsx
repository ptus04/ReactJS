export default function BlankResult() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
      }}
    >
      <h2>Sorry, no results were found for "cakescascsa"</h2>
      <img
        style={{ width: 250 }}
        src="https://cdn-icons-png.freepik.com/512/7465/7465691.png"
        alt=""
      />
      <p>We have all your Independence Day sweets covered</p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          style={{
            background: "rgb(255, 192, 203)",
            borderRadius: 16,
            color: "rgb(243, 44, 77)",
          }}
        >
          Sweet Cake
        </button>
        <button
          style={{
            background: "rgb(223, 163, 223)",
            borderRadius: 16,
            color: "rgb(145, 8, 145)",
          }}
        >
          Black Cake
        </button>
        <button
          style={{
            background: "rgb(255, 192, 203)",
            borderRadius: 16,
            color: "rgb(243, 44, 77)",
          }}
        >
          Pozole Verde
        </button>
        <button
          style={{
            background: "rgb(157, 226, 157)",
            borderRadius: 16,
            color: "rgb(5, 95, 5)",
          }}
        >
          Healthy Food
        </button>
      </div>
    </div>
  );
}
