import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { deletePackage } from "../../../utils/ApiRequest";

const ManagePackageCard = ({ loadAllPackages, sl, tourPackage }) => {
  const { _id, name, price, location } = tourPackage;

  const handlePackageDelete = () => {
    deletePackage(_id).then((data) => {
      if (!data) return;

      loadAllPackages();
      toast.error("Package Deleted!");
    });
  };

  return (
    <tr>
      <td>{sl}</td>
      <td>{name}</td>
      <td>${price}</td>
      <td>{location}</td>
      <td>
        <button onClick={handlePackageDelete} className="delete__btn">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default ManagePackageCard;
