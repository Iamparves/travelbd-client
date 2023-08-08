import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import toast from "react-hot-toast";
import { removeAdmin } from "../../../utils/ApiRequest";

const AdminCard = ({ loadAllAdmin, admin, sl }) => {
  const { _id, email } = admin;

  const handleAdminRemove = () => {
    removeAdmin(_id).then((data) => {
      if (!data) return;

      loadAllAdmin();
      toast.error("Admin Removed!");
    });
  };

  return (
    <tr>
      <td>{sl}</td>
      <td>{email}</td>
      <td>
        <button onClick={handleAdminRemove} className="delete__btn">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default AdminCard;
