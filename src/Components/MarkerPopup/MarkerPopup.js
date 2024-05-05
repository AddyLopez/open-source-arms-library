import React from "react";
import { Popup } from "react-leaflet";
import "./MarkerPopup.css";

function MarkerPopup({
  weaponsArray,
  weaponsIndex,
  manufacturingIndex,
  updatePanel,
}) {
  let weaponNames = weaponsArray[weaponsIndex].names.map((element) => {
    return ` ${element.name}`;
  });
  let company = weaponsArray[weaponsIndex].companies[0].company;
  let title =
    weaponsArray[weaponsIndex].manufacturing[manufacturingIndex].site_name;
  /*let address =
    weaponsArray[weaponsIndex].manufacturing[manufacturingIndex].site_address;*/
  // console.log(title, address);

  const handleClick = (event) => {
    // console.log(event.target);
    //console.log(weaponsIndex, manufacturingIndex);
    const accordionIcon = document.getElementById("accordion-icon");
    updatePanel(weaponsIndex, manufacturingIndex, accordionIcon);
  };

  return (
    <Popup className="MarkerPopup">
      <h3>{title !== null ? title : "Location's name unspecified"}</h3>
      <ul>
        {/*<li>
          {address !== null ?             <span>
              <strong>ADDRESS:</strong>{" "}{address}
            </span>: "Address unspecified"}
  </li> */}
        <li>
          {company !== null ? (
            <span>
              <strong>COMPANY:</strong> {company}
            </span>
          ) : (
            "Company unspecified"
          )}
        </li>
        <li>
          {weaponNames !== null ? (
            <span>
              <strong>WEAPON NAMES:</strong> {weaponNames}
            </span>
          ) : (
            "Weapon names unspecified"
          )}
        </li>
      </ul>
      <button
        type="button"
        id="markerpopup-button"
        className="button"
        onClick={handleClick}
      >
        View Profile
      </button>
    </Popup>
  );
}

export default MarkerPopup;
