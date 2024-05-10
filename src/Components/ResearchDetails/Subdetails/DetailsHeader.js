import React from "react";

function DetailsHeader({ weaponsArray, weaponsIndex, manufacturingIndex }) {
  const manufacturingSite =
    weaponsArray[weaponsIndex].manufacturing[manufacturingIndex];

  const detailsHeader = (
    <>
      <span className="researchdetails-tag">Manufacturing Site:</span>{" "}
      <span className="researchdetails-thin">
        {manufacturingSite.site_name !== null
          ? manufacturingSite.site_name
          : "Location's name unspecified"}
      </span>
    </>
  );

  return <>{detailsHeader}</>;
}

export default DetailsHeader;
