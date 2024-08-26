import * as React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function EmployeeList({ employees }) {
  const apiBaseURL = process.env.REACT_APP_API_BASE_URL;

  const navigate = useNavigate();
  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = (id) => {
    axios
      .delete(`${apiBaseURL}/Employees/${id}`)
      .then((res) => {
        if (res.data.success === true)
          toast.success("Çalışan başarıyla silindi.");
        // navigate(0);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Bir hata oluştu.");
      });
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-end ">
        <Button
          size="small"
          variant="contained"
          className="text-lg mb-4 bg-green-600 mr-4 md:mr-0"
          onClick={() => {
            navigate("/create");
          }}
        >
          Personel Ekle
        </Button>
      </div>
      <div className="flex min-w-full max-w-md md:max-w-full">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>İsim</TableCell>
                <TableCell align="right">Yaş</TableCell>
                <TableCell align="right">Departman</TableCell>
                <TableCell align="right">İşlemler</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((employee) => (
                <TableRow
                  key={employee.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {employee.name}
                  </TableCell>
                  <TableCell align="right">{employee.age}</TableCell>
                  <TableCell align="right">{employee.department}</TableCell>
                  <TableCell align="right">
                    <div className="flex flex-col md:flex-row gap-2 justify-end">
                      <Button
                        size="small"
                        variant="contained"
                        className="bg-blue-500"
                        onClick={() => {
                          handleUpdate(employee.id);
                        }}
                      >
                        Güncelle
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        className="bg-red-500"
                        onClick={() => {
                          handleDelete(employee.id);
                        }}
                      >
                        Sil
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
