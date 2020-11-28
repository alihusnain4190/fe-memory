import React from "react";

const Paggination = ({ page, startPage, endPage, changePage }) => {
  return (
    <div>
      <button
        disabled={startPage}
        onClick={() => {
          changePage(page - 1);
        }}
      >
        {"<"}
      </button>

      {page.map((singlePage) => (
        <button
          key={singlePage}
          className="p-button"
          onClick={() => {
            changePage(singlePage);
          }}
          id={page === singlePage ? "button-background" : "p-Button-background"}
        >
          {singlePage}
        </button>
      ))}

      <button
        className="p-button"
        disabled={endPage}
        onClick={() => {
          changePage(page + 1);
        }}
      ></button>
    </div>
  );
};

export default Paggination;
