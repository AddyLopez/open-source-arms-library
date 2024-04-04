import React from "react";
import { weaponsArray } from "../../Data/arms-data";
import "./ResearchDetails.css";

function ResearchDetails({ weaponsIndex, manufacturingIndex }) {
  console.log(
    `weaponsIndex: ${weaponsIndex}, manufacturingIndex: ${manufacturingIndex}`
  );
  console.log(weaponsArray[weaponsIndex]);
  const manufacturingSite =
    weaponsArray[weaponsIndex].manufacturing[manufacturingIndex];

  const detailsHeader = (
    <h3>
      Manufacturing Site:{" "}
      <span className="researchdetails-thin">
        {manufacturingSite.site_name !== null
          ? manufacturingSite.site_name
          : "Location's name unspecified"}
      </span>
    </h3>
  );

  const detailsAddress = (
    <li>
      <span className="researchdetails-tag">Site's Address:</span>{" "}
      {manufacturingSite.site_address
        ? manufacturingSite.site_address
        : "Address unspecified"}
    </li>
  );

  const detailsWeaponsName = (
    <li>
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
                  &#40;SOURCE&#41;
                </a>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </li>
  );

  const detailsCompanies = (
    <li>
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
                    <a
                      href={sourceItem}
                      target="_blank"
                      rel="noreferrer"
                      key={index}
                    >
                      &#40;SOURCE{index > 0 ? `-0${index + 1}` : ""}&#41;
                    </a>
                  );
                } else {
                  return "";
                }
              })}
            </li>
          );
        })}
      </ul>
    </li>
  );

  const detailsParentItem = (
    <li>
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
                    &#40;SOURCE&#41;
                  </a>
                ) : (
                  ""
                )}
              </li>
            );
          }
        )}
      </ul>
    </li>
  );

  const detailsSupplyChain = (
    <li>
      <span className="researchdetails-tag">Supply Chain:</span>
      <ul>
        {weaponsArray[weaponsIndex].supply_chain.map(
          (supplyChainItem, index) => {
            return (
              <li key={index}>
                {supplyChainItem.item !== null
                  ? supplyChainItem.item
                  : "Item unspecified"}{" "}
                {supplyChainItem.source.map((sourceItem, index) => {
                  if (sourceItem !== null) {
                    return (
                      <a
                        href={sourceItem}
                        target="_blank"
                        key={index}
                        rel="noreferrer"
                      >
                        &#40;SOURCE{index > 0 ? `-0${index + 1}` : ""}&#41;{" "}
                      </a>
                    );
                  } else {
                    return "";
                  }
                })}
              </li>
            );
          }
        )}
      </ul>
    </li>
  );

  return (
    <>
      {detailsHeader}
      <ul>
        {detailsAddress}
        {detailsWeaponsName}
        {detailsCompanies}
        {detailsParentItem}
        {detailsSupplyChain}
      </ul>
    </>
  );
}

export default ResearchDetails;
