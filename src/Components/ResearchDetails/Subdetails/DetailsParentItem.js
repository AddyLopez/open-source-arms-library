import React from "react";

function DetailsParentItem({ weaponsArray, weaponsIndex }) {
  const detailsParentItem = (
    <>
      <span className="researchdetails-tag">
        Parent Item&#40;<span className="researchdetails-small">s</span>
        &#41;:
      </span>
      <ul>
        {weaponsArray[weaponsIndex].parent_item.map(
          (parentItemElement, index) => {
            return (
              <li key={index}>
                {parentItemElement.item !== null
                  ? parentItemElement.item
                  : "Parent item unspecified"}{" "}
                {parentItemElement.source !== null ? (
                  <a
                    href={parentItemElement.source}
                    target="_blank"
                    rel="noreferrer"
                  >
                    &#40;source&#41;
                  </a>
                ) : (
                  ""
                )}
              </li>
            );
          }
        )}
      </ul>
    </>
  );

  return <>{detailsParentItem}</>;
}

export default DetailsParentItem;
