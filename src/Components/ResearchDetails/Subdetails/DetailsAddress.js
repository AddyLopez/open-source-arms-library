import React from "react";

function DetailsAddress({ weaponsArray, weaponsIndex, manufacturingIndex }) {
  const manufacturingSite =
    weaponsArray[weaponsIndex].manufacturing[manufacturingIndex];

  const detailsAddress = (
    <>
      <span className="researchdetails-tag">Site's Address:</span>{" "}
      {manufacturingSite.site_address
        ? manufacturingSite.site_address
        : "Address unspecified"}
    </>
  );

  return <>{detailsAddress}</>;
}

export default DetailsAddress;
