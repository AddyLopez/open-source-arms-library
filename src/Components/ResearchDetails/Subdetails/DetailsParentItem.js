import React from "react";

function DetailsParentItem({ weaponsArray, weaponsIndex }) {
  const detailsParentItem = (
    <>
      <span className="researchdetails-tag">Parent Item&#40;s&#41;:</span>
      <ul>
        {weaponsArray[weaponsIndex].parent_item.map(
          (parentItemElement, index) => {
            return (
              <li key={index}>
                {parentItemElement.item !== null
                  ? parentItemElement.item
                  : "Parent item unspecified"}{" "}
                {parentItemElement.source !== null ? (
                  <span>
                    &#40;
                    <a
                      href={parentItemElement.source}
                      target="_blank"
                      rel="noreferrer"
                    >
                      source
                    </a>
                    &#41;
                  </span>
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
