export default function InputWithLabel({ label, value, onChange }) {
  return (
    <div>
      <label style={{ display: "inline-block", marginRight: 8, width: 175 }}>
        {label}
      </label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}
