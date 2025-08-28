import { useEffect, useState } from "react";


type SortFilter = {
  select: string;
  textSearch: string;
};

type Props = {
 setSortFilter: React.Dispatch<React.SetStateAction<SortFilter>>;
};

export const TodoFilter: React.FC<Props> = ({ setSortFilter }) => {

  const [textSearch, setTextSearch] = useState('');
  const [select, setSelect] = useState('');



  useEffect(() => {

    setSortFilter({ select, textSearch });

  },[select,textSearch])


  return (

  <form className="field has-addons">
    <p className="control">
      <span className="select">
          <select data-cy="statusSelect"
            value={select}
            onChange={(e) => {
              setSelect(e.target.value);
            }}

          >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </span>
    </p>





    <p className="control is-expanded has-icons-left has-icons-right">
      <input
        data-cy="searchInput"
        type="text"
        className="input"
          placeholder="Search..."
          value={textSearch}
          onChange={(e)  => {
            setTextSearch(e.target.value)
          }}
      />
      <span className="icon is-left">
        <i className="fas fa-magnifying-glass" />
      </span>



        {textSearch && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button data-cy="clearSearchButton" type="button" className="delete"
              onClick={() => {
                setTextSearch('');
        }}    />
      </span>


        )
        }


    </p>
    </form>
  )
};
