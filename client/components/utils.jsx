import React from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";

const HiddenForm = ({ submit, cancel }) => (
  <form className="container" onSubmit={submit}>
    <label>
      Title: <br />
      <input type="text" id="title" name="title" />
    </label>
    <label>
      Content:
      <br />
      <textarea id="content" name="content"></textarea>
    </label>
    <div>
      <button type="submit">Send</button>
      <button className="red" onClick={cancel}>
        cancel
      </button>
    </div>
  </form>
);

const mapDispatchToProps = (dispatch) => ({
  submit: (e) => {
    e.preventDefault();
    const title = e.target["title"].value;
    const content = `<p>${e.target["content"].value}</p>`;
    dispatch(actions.handleSubmit([title, content]));
  },
  cancel: () => {
    dispatch(actions.switchVisibility());
  },
});

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HiddenForm);
