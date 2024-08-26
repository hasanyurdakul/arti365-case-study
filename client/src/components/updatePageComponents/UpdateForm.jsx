import React, { useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { Formik } from "formik";
import { Button, TextField } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage";

const updateEmployeeFormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "İsim alanı en az 3 karakter olmalı")
    .max(50, "İsim alanı en fazla 50 karakter olabilir")
    .required("İsim alanı zorunludur."),
  age: Yup.number()
    .min(18, "Yaş alanı en az 18 olmalı")
    .max(100, "Yaş alanı en fazla 100 olabilir")
    .required("Yaş alanı zorunludur."),
  department: Yup.string()
    .min(3, "Departman alanı en az 3 karakter olmalı")
    .max(50, "Departman alanı en fazla 50 karakter olabilir")
    .required("Departman alanı zorunludur."),
});

export default function UpdateForm() {
  const apiBaseURL = process.env.REACT_APP_API_BASE_URL;
  let { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = React.useState(null);

  const getEmployeeData = (id) => {
    axios
      .get(`${apiBaseURL}/Employees/${id}`)
      .then((res) => {
        setEmployee(res.data.data);
      })
      .catch(() => {
        toast.error("Bir hata oluştu.");
      });
  };

  useEffect(() => {
    getEmployeeData(id);
  }, []);

  const handleCreateEmployee = (values) => {
    axios
      .put(`${apiBaseURL}/Employees/${id}`, values)
      .then((res) => {
        if (res.data.success === true) {
          toast.success("Personel başarıyla güncellendi.");
          navigate("/");
        }
      })
      .catch(() => {
        toast.error("Bir hata oluştu.");
      });
  };

  return (
    <div className=" flex flex-col md:mx-96 mx-4  items-center rounded-xl border border-black justify-center p-4  ">
      <div className="flex flex-col w-full">
        <header className="px-5 py-4 ">
          <h2 className="font-semibold text-black ">Personel Güncelle</h2>
        </header>
        {employee != null ? (
          <div className="flex flex-col grow justify-center">
            <div className="flex flex-col flex-wrap  items-center px-5 py-4 pb-2">
              <Formik
                validationSchema={updateEmployeeFormValidationSchema}
                initialValues={{
                  name: employee?.name,
                  age: employee?.age,
                  department: employee?.department,
                }}
                onSubmit={(values) => handleCreateEmployee(values)}
              >
                {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  errors,
                  touched,
                }) => (
                  <div className="flex flex-col gap-2 w-full">
                    <TextField
                      variant="outlined"
                      placeholder="İsim"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      helperText={touched.name && errors.name}
                      error={touched.name && Boolean(errors.name)}
                      className="w-full   rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    />
                    <TextField
                      variant="outlined"
                      placeholder="Yaş"
                      name="age"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.age}
                      helperText={touched.age && errors.age}
                      error={touched.age && Boolean(errors.age)}
                      className="w-full   rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    />
                    <TextField
                      variant="outlined"
                      placeholder="Departman"
                      name="department"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.department}
                      helperText={touched.department && errors.department}
                      error={touched.department && Boolean(errors.department)}
                      className="w-full   rounded-lg font-medium bg-transparent border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    />

                    <Button
                      variant="outlined"
                      onClick={handleSubmit}
                      className="mt-5 text-base tracking-wide font-semibold bg-primary hover:bg-primaryHover  w-full py-4 rounded-lg  transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <span className="ml-3">Güncelle</span>
                    </Button>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        ) : (
          <div className="flex flex-col grow justify-center">
            <div className="flex flex-col flex-wrap  items-center px-5 py-4 pb-2">
              Güncellemek istediğiniz personel bulunamadı.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
