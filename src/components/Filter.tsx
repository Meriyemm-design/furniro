import React from 'react'
import '@styles/filter.scss'
import filter from "@assets/Shop/filter_icon.webp";
import grid from "@assets/Shop/grid_icon.webp";
import list from "@assets/Shop/view_list.webp";

const Filter = () => {
    return (
        <>
            <section className="filter-bar">
                <div className="left-side">
                    <div className="filter-item">
                        <img src={filter} alt="filter" />
                        <span>Filter</span>
                    </div>

                    <div className="grid-icon">
                        <img src={grid} alt="grid" style={{ width: "26px" }} />
                    </div>

                    <div className="list-icon">
                        <img src={list} alt="list" />
                    </div>

                    <div className="divider"></div>

                    <p>Showing 1–16 of 32 results</p>
                </div>

                <div className="right-side">
                    <div className="show-box">
                        <span>Show</span>
                        <input type="text" placeholder="16" />
                    </div>

                    <div className="sort-box">
                        <span>Short by</span>
                        <input type="text" placeholder="Default" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Filter