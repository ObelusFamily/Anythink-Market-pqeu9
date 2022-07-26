import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import { APPLY_TITLE_FILTER } from "../../constants/actionTypes";

const mapDispatchToProps = (dispatch) => ({
  onSearchText: (title, pager, payload) =>
    dispatch({ type: APPLY_TITLE_FILTER, title, pager, payload }),
});

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.title = "";
  }

  searchTextChange = (ev) => {
    const title = ev.currentTarget.value;

    this.setState({ title });

    console.log(title.length);

    if (title.length === 0) {
      this.props.onSearchText(
        "",
        (page) => agent.Items.all(title, page),
        agent.Items.all(title)
      );
    }

    if (title.length > 2) {
      this.props.onSearchText(
        title,
        (page) => agent.Items.byTitle(title, page),
        agent.Items.byTitle(title)
      );
    }
  };

  render() {
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
            value={this.searchText}
            onChange={this.searchTextChange}
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
  }
}

export default connect(null, mapDispatchToProps)(SearchBox);
