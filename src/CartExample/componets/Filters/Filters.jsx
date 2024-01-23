import { useId } from "react";
import "./Filters.css";
import { useFilters } from "../../hooks/useFilters";

const Filters = () => {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };
  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };
  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio</label>
        <input
          type="range"
          id={minPriceFilterId}
          min={0}
          max={1000}
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>$ {filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categorias:</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todos</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;
