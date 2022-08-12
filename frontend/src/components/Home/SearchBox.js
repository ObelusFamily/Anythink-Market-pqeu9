import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import { APPLY_TITLE_FILTER } from "../../constants/actionTypes";

const mapDispatchToProps = (dispatch) => ({
  onSearchText: (title, pager, payload) =>
    dispatch({ type: APPLY_TITLE_FILTER, title, pager, payload }),
});

const mapStateToProps = (state) => ({
  title: state.itemList.title,
  items: state.itemList,
});

const SearchBox = ({ title, onSearchText }) => {
  const searchTextChange = (ev) => {
    const newTitle = ev.currentTarget.value;

    if (newTitle.length < 3) {
      onSearchText(
        newTitle,
        (page) => agent.Items.all(page),
        agent.Items.all()
      );
    } else {
      onSearchText(
        newTitle,
        (page) => agent.Items.byTitle(newTitle, page),
        agent.Items.byTitle(newTitle)
      );
    }
  };

  return (
    <div className="form-group form-group-lg">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span
            id="get-part"
            className="input-group-text text-white bg-transparent border-0"
          >
            A place to get
          </span>
        </div>
        <input
          id="search-box"
          className="form-control border-right-0 rounded-left bg-white"
          type="text"
          placeholder="What is it that you truly desire?"
          value={title}
          onChange={searchTextChange}
        />
        <div className="input-group-text bg-white border-left-0 rounded-right">
          <i className="bi bi-search"></i>
        </div>
        <div className="input-group-append">
          <span className="input-group-text text-white border-0 bg-transparent">
            {" "}
            the cool stuff.
          </span>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
