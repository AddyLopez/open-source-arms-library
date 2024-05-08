import React from "react";

function DetailsWeaponsName({ weaponsArray, weaponsIndex }) {
  const detailsWeaponsName = (
    <>
      <span className="researchdetails-tag">
        Weapon's Name&#40;<span className="researchdetails-small">s</span>
        &#41;:
      </span>
      <ul>
        {weaponsArray[weaponsIndex].names.map((nameItem, index) => {
          return (
            <li key={index}>
              {nameItem.name !== null ? nameItem.name : "Name unspecified"}{" "}
              {nameItem.source !== null ? (
                <a
                  href={nameItem.source}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  &#40;source&#41;
                </a>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </>
  );

  return <>{detailsWeaponsName}</>;
}

export default DetailsWeaponsName;
