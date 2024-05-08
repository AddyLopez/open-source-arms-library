import React from "react";

function DetailsCompanies({ weaponsArray, weaponsIndex }) {
  const detailsCompanies = (
    <>
      <span className="researchdetails-tag">Companies:</span>
      <ul>
        {weaponsArray[weaponsIndex].companies.map((companiesItem, index) => {
          return (
            <li key={index}>
              {companiesItem.company !== null
                ? companiesItem.company
                : "Companies unspecified."}{" "}
              {companiesItem.source.map((sourceItem, index) => {
                if (sourceItem !== null) {
                  return (
                    <>
                      <span>
                        &#40;
                        <a
                          href={sourceItem}
                          target="_blank"
                          rel="noreferrer"
                          key={index}
                        >
                          source{index > 0 ? `-0${index + 1}` : ""}
                        </a>
                        &#41;
                      </span>
                    </>
                  );
                } else {
                  return "";
                }
              })}
            </li>
          );
        })}
      </ul>
    </>
  );
  return <>{detailsCompanies}</>;
}

export default DetailsCompanies;
