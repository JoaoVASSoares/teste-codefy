type Props = {
  name: string;
  changeID: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  listTitle: string;
};

const SelectFilter = ({ name, changeID, total, listTitle }: Props) => {
  return (
    <div className="input-group mb-3">
      <select onChange={e => changeID(Number(e.target.value))} className="form-select" id={name}>
        <option value="1">{listTitle}</option>
        {[...Array(total).keys()].map(x => {
          return (
            <option value={x + 1}>
              {name} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectFilter;
