const Filter = ({ handleStatusChange, handleSort }) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <p>Status:</p>
        <select onChange={(e) => handleStatusChange(e.target.value)}>
          <option value="All">Todas</option>
          <option value="completed">Completas</option>
          <option value="incomplete">Incompletas</option>
        </select>
      </div>
      <div className="sort-options">
        <p>Ordem alfabética:</p>
        <button onClick={() => handleSort("asc")}>Asc</button>
        <button onClick={() => handleSort("desc")}>Desc</button>
      </div>
    </div>
  );
};

export default Filter;
