import {
  faChevronDown,
  faChevronUp,
  faList,
  faPlus,
  faQuoteLeft,
  faTasks,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

const adminPages = [
  {
    name: "Profile",
    path: "profile",
    icon: faUser,
  },
  {
    name: "Bookings List",
    path: "bookings",
    icon: faList,
  },
  {
    name: "Add Package",
    path: "addPackage",
    icon: faPlus,
  },
  {
    name: "Manage Packages",
    path: "managePackage",
    icon: faTasks,
  },
  {
    name: "Testimonial",
    path: "testimonial",
    icon: faQuoteLeft,
  },
  {
    name: "Make Admin",
    path: "makeAdmin",
    icon: faUserTie,
  },
];

const customerPages = [
  {
    name: "Profile",
    path: "profile",
    icon: faUser,
  },
  {
    name: "My Bookings",
    path: "myBookings",
    icon: faList,
  },
  {
    name: "Testimonial",
    path: "testimonial",
    icon: faQuoteLeft,
  },
];

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser();
  const location = useLocation();

  useEffect(() => {
    setSidebar(false);
  }, [location.pathname]);

  return (
    <section className="dashboard">
      <div className="dashboard__header">
        <Link className="logo" to="/">
          Travel BD
        </Link>
        <Link to={"profile"} className="img__box">
          <img src={user.photo} alt={user.name} title={user.name} />
        </Link>
      </div>
      <div className="dashboard__inner">
        <div className="sidebar">
          <button
            onClick={() => setSidebar(!sidebar)}
            className="sidebar__toggle"
          >
            {!sidebar ? "Open menu" : "Close menu"}{" "}
            <FontAwesomeIcon icon={!sidebar ? faChevronDown : faChevronUp} />
          </button>
          <nav className={`sidebar__nav ${sidebar ? "visible" : ""}`}>
            {(!user.isAdmin ? customerPages : adminPages).map((page) => (
              <NavLink to={page.path} key={page.path}>
                <span>
                  <FontAwesomeIcon icon={page.icon} />
                </span>{" "}
                {page.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="dashboard__content">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
