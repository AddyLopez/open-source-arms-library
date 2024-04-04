import React from "react";
import DetailsHeader from "./Subdetails/DetailsHeader";
import DetailsAddress from "./Subdetails/DetailsAddress";
import DetailsWeaponsName from "./Subdetails/DetailsWeaponsName";
import DetailsCompanies from "./Subdetails/DetailsCompanies";
import DetailsParentItem from "./Subdetails/DetailsParentItem";
import DetailsSupplyChain from "./Subdetails/DetailsSupplyChain";

import { weaponsArray } from "../../Data/arms-data";
import "./ResearchDetails.css";

function ResearchDetails({ weaponsIndex, manufacturingIndex }) {
  /*console.log(
    `weaponsIndex: ${weaponsIndex}, manufacturingIndex: ${manufacturingIndex}`
  );
 console.log(weaponsArray[weaponsIndex]);*/

  return (
    <>
      <h3>
        <DetailsHeader
          weaponsArray={weaponsArray}
          weaponsIndex={weaponsIndex}
          manufacturingIndex={manufacturingIndex}
        />
      </h3>
      <ul>
        <li>
          <DetailsAddress
            weaponsArray={weaponsArray}
            weaponsIndex={weaponsIndex}
            manufacturingIndex={manufacturingIndex}
          />
        </li>
        <li>
          <DetailsWeaponsName
            weaponsArray={weaponsArray}
            weaponsIndex={weaponsIndex}
          />
        </li>
        <li>
          <DetailsCompanies
            weaponsArray={weaponsArray}
            weaponsIndex={weaponsIndex}
          />
        </li>
        <li>
          <DetailsParentItem
            weaponsArray={weaponsArray}
            weaponsIndex={weaponsIndex}
          />
        </li>
        <li>
          <DetailsSupplyChain
            weaponsArray={weaponsArray}
            weaponsIndex={weaponsIndex}
            manufacturingIndex={manufacturingIndex}
          />
        </li>
      </ul>
    </>
  );
}

export default ResearchDetails;
