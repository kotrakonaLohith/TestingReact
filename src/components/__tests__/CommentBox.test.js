import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});
test("has a text area and button", () => {
  expect(wrapped.find("textarea").length).to.equal(1);
  expect(wrapped.find("button").length).to.equal(1);
});

test("has a text area that user can type in", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "new comment" },
  });
  wrapped.update();
  expect(wrapped.find('textarea').prop("value", "new comment");
});
