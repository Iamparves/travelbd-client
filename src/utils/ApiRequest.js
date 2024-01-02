const base = "https://travelbd.onrender.com";

export const getAdmins = async () => {
  try {
    const res = await fetch(`${base}/admins`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getPackages = async () => {
  try {
    const res = await fetch(`${base}/packages`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deletePackage = async (_id) => {
  try {
    const res = await fetch(`${base}/deletePackage/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getBookings = async () => {
  try {
    const res = await fetch(`${base}/bookings`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateBooking = async (orderStatus, _id) => {
  try {
    const res = await fetch(`${base}/updateBooking/${_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: orderStatus }),
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getPackageById = async (id) => {
  try {
    const res = await fetch(`${base}/getPackage/${id}`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getFirstSixPackage = async () => {
  try {
    const res = await fetch(`${base}/firstSixPackage`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getTestimonials = async () => {
  try {
    const res = await fetch(`${base}/testimonials`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const addAdmin = async (formData) => {
  try {
    const res = await fetch(`${base}/addAdmin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const addPackage = async (tourPackage) => {
  try {
    const res = await fetch(`${base}/addPackage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tourPackage),
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const addBooking = async (bookingInfo) => {
  try {
    const res = await fetch(`${base}/addBooking`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingInfo),
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getUserRole = async (email) => {
  try {
    const res = await fetch(`${base}/getAdmin?email=${email}`);
    const admin = await res.json();

    return admin?.length > 0;
  } catch (err) {
    console.log(err);
  }
};

export const getBookingsByEmail = async (email) => {
  try {
    const res = await fetch(`${base}/bookings?email=${email}`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const gettestimonialsByEmail = async (email) => {
  try {
    const res = await fetch(`${base}/testimonials?email=${email}`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const addTestimonial = async (testimonial) => {
  try {
    const res = await fetch(`${base}/addTestimonial`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testimonial),
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteTestimonial = async (id) => {
  try {
    const res = await fetch(`${base}/deleteTestimonial/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const removeAdmin = async (_id) => {
  try {
    const res = await fetch(`${base}/removeAdmin/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};
