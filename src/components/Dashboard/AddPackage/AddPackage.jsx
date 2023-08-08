import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { addPackage } from "../../../utils/ApiRequest";
import "./AddPackage.css";
import Spinner from "/img/spinner.svg";

const AddPackage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [pkgImage, setPkgImage] = useState(" ");

  const handleImageUpload = (e) => {
    setPkgImage("");
    const ImageData = new FormData();
    ImageData.set("key", "bcd47bcef58f7ea93f2d1d2a6441b95d");
    ImageData.set("image", e.target.files[0]);

    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: ImageData,
    })
      .then((res) => res.json())
      .then((data) => setPkgImage(data.data.display_url))
      .catch((err) => console.log(err.message));
  };

  const handleAddPackage = (data) => {
    if (!pkgImage) return;
    const tourPackage = { ...data };
    tourPackage.image = pkgImage;

    addPackage(tourPackage).then((data) => {
      if (data) {
        toast.success("Package Added Successfully!");
        reset();
      }
    });
  };
  return (
    <div className="addPackage">
      <div className="addPackage__content">
        <form
          onSubmit={handleSubmit(handleAddPackage)}
          className="addPackage__form"
        >
          <div className="form__group">
            <div className="package__group">
              <label htmlFor="name">Package Name</label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "*Package Name is required" })}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div className="package__group">
              <label htmlFor="location">Travel Location</label>
              <input
                id="location"
                type="text"
                {...register("location", {
                  required: "*Travel Location is required",
                })}
              />
              {errors.location && <span>{errors.location.message}</span>}
            </div>
            <div className="package__group">
              <label htmlFor="startDate">Start Date</label>
              <input
                id="startDate"
                type="date"
                {...register("startDate", {
                  required: "*Start Date is required",
                })}
              />
              {errors.startDate && <span>{errors.startDate.message}</span>}
            </div>
            <div className="package__group">
              <label htmlFor="difficulty">Difficulty</label>
              <select id="difficulty" {...register("difficulty")}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="difficult">Difficult</option>
              </select>
            </div>
            <div className="package__group">
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="file"
                accept=".png, .jpg, .jpeg"
                {...register("image", { required: "*Image is required" })}
                onChange={handleImageUpload}
              />
              {errors.image && <span>{errors.image.message}</span>}
            </div>
          </div>
          <div className="form__group">
            <div className="package__group--box">
              <div className="package__group">
                <label htmlFor="price">Price</label>
                <input
                  id="price"
                  type="number"
                  {...register("price", { required: "*Price is required" })}
                />
                {errors.price && <span>{errors.price.message}</span>}
              </div>
              <div className="package__group">
                <label htmlFor="duration">Duration</label>
                <input
                  id="duration"
                  type="number"
                  {...register("duration", {
                    required: "*Duration is required",
                  })}
                />
                {errors.duration && <span>{errors.duration.message}</span>}
              </div>
            </div>
            <div className="package__group--box">
              <div className="package__group">
                <label htmlFor="stops">Stops</label>
                <input
                  id="stops"
                  type="number"
                  {...register("stops", { required: "*Stops is required" })}
                />
                {errors.stops && <span>{errors.stops.message}</span>}
              </div>
              <div className="package__group">
                <label htmlFor="maxGroupSize">Max Group Size</label>
                <input
                  id="maxGroupSize"
                  type="number"
                  {...register("maxGroupSize", {
                    required: "*Group Size is required",
                  })}
                />
                {errors.maxGroupSize && (
                  <span>{errors.maxGroupSize.message}</span>
                )}
              </div>
            </div>
            <div className="package__group">
              <label htmlFor="summary">Summary</label>
              <textarea
                id="summary"
                {...register("summary", { required: "*Summary is required" })}
              ></textarea>
              {errors.summary && <span>{errors.summary.message}</span>}
            </div>
          </div>
          <div className="form__group btn--box">
            {!pkgImage && (
              <img className="btn__spinner" src={Spinner} alt="Uploading" />
            )}{" "}
            <button
              type="submit"
              className={`btn__primary package__btn ${
                !pkgImage ? "disabled" : ""
              }`}
            >
              Add Package
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;
