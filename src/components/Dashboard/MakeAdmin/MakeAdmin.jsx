import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { addAdmin, getAdmins } from "../../../utils/ApiRequest";
import AdminCard from "../AdminCard/AdminCard";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [admins, setAdmins] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    loadAllAdmin();
  }, []);

  const loadAllAdmin = () => {
    getAdmins().then((data) => setAdmins(data));
  };

  const handleAddAdmin = (formData) => {
    addAdmin(formData).then((data) => {
      if (!data) return;

      loadAllAdmin();
      toast.success("New Admin Added!");
      reset();
    });
  };

  return (
    <div className="makeAdmin">
      <div className="makeAdmin__content">
        <form
          onSubmit={handleSubmit(handleAddAdmin)}
          className="makeAdmin__form"
        >
          <div className="package__group">
            <label htmlFor="email">Email Address</label>
            <div className="admin__group--box">
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "*Email Address is required",
                })}
              />
              <button type="submit" className="btn__primary package__btn">
                Make Admin
              </button>
            </div>
            {errors.email && <span>{errors.email.message}</span>}
          </div>
        </form>
        <div className="makeAdmin__wrapper scrollbar">
          <table className="dashboard__table">
            <thead>
              <tr>
                <th>Sl.</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin, ind) => (
                <AdminCard
                  admin={admin}
                  sl={ind + 1}
                  loadAllAdmin={loadAllAdmin}
                  key={admin._id}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
