import React from "react";

function DetailsWeaponsName({ weaponsArray, weaponsIndex }) {
  const detailsWeaponsName = (
    <>
      <span className="researchdetails-tag">Weapon's Name&#40;s&#41;:</span>
      <ul>
        {weaponsArray[weaponsIndex].names.map((nameItem, index) => {
          return (
            <li key={index}>
              {nameItem.name !== null ? nameItem.name : "Name unspecified"}{" "}
              {nameItem.source !== null ? (
                <span>
                  &#40;
                  <a
                    href={nameItem.source}
                    target="_blank"
                    rel="noreferrer"
                    key={index}
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
        })}
      </ul>
    </>
  );

  return <>{detailsWeaponsName}</>;
}

export default DetailsWeaponsName;
