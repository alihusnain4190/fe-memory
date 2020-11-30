import React from "react";

const Paggination = ({ page, startPage, endPage, changePage }) => {
  return (
    <div className="pagination-container">
      <button
        className="paggination__btn"
        disabled={startPage}
        onClick={() => {
          changePage(page - 1);
        }}
      >
        {"<"}
      </button>

      {page.map((singlePage) => (
        <button
          className="paggination__btn"
          key={singlePage}
          onClick={() => {
            changePage(singlePage);
          }}
          id={page === singlePage ? "button-background" : "p-Button-background"}
        >
          {singlePage}
        </button>
      ))}

      <button
        className="paggination__btn"
        
        disabled={endPage}
        onClick={() => {
          changePage(page + 1);
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default Paggination;
