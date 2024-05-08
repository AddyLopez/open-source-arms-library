import React from "react";

function DetailsSupplyChain({ weaponsArray, weaponsIndex }) {
  const detailsSupplyChain = (
    <>
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
                      <>
                        <span>
                          &#40;
                          <a
                            href={sourceItem}
                            target="_blank"
                            key={index}
                            rel="noreferrer"
                          >
                            source{index > 0 ? `-0${index + 1}` : ""}
                          </a>
                          &#41;{" "}
                        </span>
                      </>
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
    </>
  );
  return <>{detailsSupplyChain}</>;
}

export default DetailsSupplyChain;
