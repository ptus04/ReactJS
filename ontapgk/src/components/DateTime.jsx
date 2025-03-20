export default function DateTime({ dateTime }) {
  return (
    <>
      <h3>{dateTime.toLocaleDateString()}</h3>
      <h4>{dateTime.toLocaleTimeString()}</h4>
    </>
  );
}
