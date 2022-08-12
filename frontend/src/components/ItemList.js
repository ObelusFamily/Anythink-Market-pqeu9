import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  title: state.itemList.title,
  tab: state.router.tab
});

const ItemList = ({ items, tab, title, pager, itemsCount, currentPage }) => {
  if (!items) {
    return <div className="py-4">Loading...</div>;
  }

  if (items.length === 0 && tab === "all") {
    return (
      <div
        id="empty"
        className="py-4 no-items"
        style={{ backgroundColor: "rgba(175, 147, 242, 0.5)" }}
      >
        <div className="row">
          <i
            className="mx-auto bi bi-emoji-angry-fill bi-2x"
            style={{ fontSize: "2rem", opacity: "1" }}
          ></i>
        </div>
        <div className="row">
          <h3 className="mx-auto">No items found for "{`${title}`}"</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-2">
      <div className="row">
        {items.map((item) => {
          return (
            <div className="col-sm-4 pb-2" key={item.slug}>
              <ItemPreview item={item} />
            </div>
          );
        })}
      </div>

      <ListPagination
        pager={pager}
        itemsCount={itemsCount}
        currentPage={currentPage}
      />
    </div>
  );
};

export default connect(mapStateToProps, null)(ItemList);
