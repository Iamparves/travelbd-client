import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useUser } from "../../../contexts/UserContext";
import {
  addTestimonial,
  deleteTestimonial,
  gettestimonialsByEmail,
} from "../../../utils/ApiRequest";
import "./Testimonial.css";

const Testimonial = () => {
  const { user } = useUser();
  const { email, photo } = user;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [testimonials, setTestimonials] = useState([]);

  const loadTestimonials = () => {
    gettestimonialsByEmail(email).then((data) => setTestimonials(data));
  };

  useEffect(() => {
    loadTestimonials();
  }, [email]);

  const handleTestimonialSubmit = (data) => {
    const testimonial = { ...data, email, image: photo };
    addTestimonial(testimonial).then((data) => {
      if (!data) return;

      loadTestimonials();
      toast.success("Testimonial Submitted!");
      reset();
    });
  };

  const handleTestimonialDelete = (id) => {
    deleteTestimonial(id).then((data) => {
      if (!data) return;

      loadTestimonials();
      toast.error("Testimonial Deleted!");
      reset();
    });
  };

  return (
    <div className="testimonial">
      <div className="testimonial__contents">
        <form
          onSubmit={handleSubmit(handleTestimonialSubmit)}
          className="testimonial__form"
        >
          <div className="package__group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "*Name is required" })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div className="package__group">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              id="description"
              {...register("description", {
                required: "*Description is required",
              })}
            ></textarea>
            {errors.description && <span>{errors.description.message}</span>}
          </div>
          <button type="submit" className="btn__primary package__btn">
            Submit
          </button>
        </form>
      </div>
      {testimonials?.length > 0 && (
        <div className="testimonial__cards">
          <h2 className="title">My Testimonials</h2>
          {testimonials?.map((testimonial) => (
            <div className="testimonialCard" key={testimonial._id}>
              <h2 className="name">{testimonial.name}</h2>
              <p className="description">{testimonial.description}</p>
              <button
                onClick={() => {
                  handleTestimonialDelete(testimonial._id);
                }}
                className="btn__primary package__btn"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonial;
