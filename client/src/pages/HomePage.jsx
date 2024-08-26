import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeList from "../components/homePageComponents/EmployeeList";

function HomePage() {
  const apiBaseURL = process.env.REACT_APP_API_BASE_URL;
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios
      .get(`${apiBaseURL}/employees`)
      .then((response) => {
        setEmployees(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [employees]);
  return (
    <div className="mx-auto flex justify-center">
      <EmployeeList employees={employees} />
    </div>
  );
}

export default HomePage;
