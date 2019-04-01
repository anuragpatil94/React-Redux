import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./component.commentDetail";
import ApprovalCard from "./component.approvalCard";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          data={{
            author: "Alex",
            timeAgo: "Today at 4:45PM",
            commentText: "Thats Amazing Post!",
            avatar: faker.image.avatar()
          }}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          data={{
            author: "Sam",
            timeAgo: "Today at 2:45PM",
            commentText: "You Rock!",
            avatar: faker.image.avatar()
          }}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          data={{
            author: "Jane",
            timeAgo: "Yesterday at 4:45PM",
            commentText: "Agggg!",
            avatar: faker.image.avatar()
          }}
        />
      </ApprovalCard>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are You Sure?
        </div>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
