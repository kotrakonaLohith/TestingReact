import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});
test("Shows a comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

test("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
