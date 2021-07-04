import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/MenuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { directorySections } from "../../Redux/directory/directorySelector";
const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...others }) => (
        <MenuItem key={id} {...others} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: directorySections,
});
export default connect(mapStateToProps)(Directory);
