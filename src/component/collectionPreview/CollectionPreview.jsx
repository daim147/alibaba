import React from "react";
import "./CollectionPreview.styles.scss";
import { CollectionItem } from "../collectionItem/CollectionItem";
const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <div className="title">{title}</div>
      <div className="preview">
        {items.slice(0, 4).map(({ id, ...other }) => (
          <CollectionItem key={id} {...other} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
