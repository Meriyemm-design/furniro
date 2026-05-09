import React from "react";
import "@styles/filter.scss";

interface FilterProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onItemsPerPageChange: (items: number) => void;
  onSortChange: (sortOption: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onItemsPerPageChange,
  onSortChange,
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="filter-section">
      <div className="filter-container main-padding">
        <div className="filter-wrapper">
          {/* Results Count */}
          <div className="results-info">
            <span>
              Showing {startItem}-{endItem} of {totalItems} results
            </span>
          </div>

          {/* Controls */}
          <div className="filter-controls">
            {/* Show Items Per Page */}
            <div className="filter-group">
              <label htmlFor="show-items">Show</label>
              <select
                id="show-items"
                defaultValue={itemsPerPage}
                onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
              >
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="24">24</option>
                <option value="32">32</option>
              </select>
            </div>

            {/* Sort Options */}
            <div className="filter-group">
              <label htmlFor="sort-by">Sort by</label>
              <select
                id="sort-by"
                defaultValue="default"
                onChange={(e) => onSortChange(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
