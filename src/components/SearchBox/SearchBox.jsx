import s from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={s.search}>
      <p className={s.label}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
      />
    </div>
  );
};

export default SearchBox;
