import React from "react";

import Modal from "../Modal";

const StreamDelete = () => {
  const modalActions = (
    // React Fragment is a invisible element
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );
  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        action={modalActions}
      />
    </div>
  );
};

export default StreamDelete;
