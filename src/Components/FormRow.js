const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{labelText || name}</label>
      <input
        id={name}
        type={type}
        name={name}
        className="form-control"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
