import React from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

const Contacts = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: t("contacts.id"), flex: 0.5 },
    { field: "registrarId", headerName: t("contacts.registrarId") },
    {
      field: "name",
      headerName: t("contacts.name"),
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: t("contacts.age"),
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: t("contacts.phoneNumber"),
      flex: 1,
    },
    {
      field: "email",
      headerName: t("contacts.email"),
      flex: 1,
    },
    {
      field: "address",
      headerName: t("contacts.address"),
      flex: 1,
    },
    {
      field: "city",
      headerName: t("contacts.city"),
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: t("contacts.zipCode"),
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title={t("contacts.title")}
        subtitle={t("contacts.subtitle")}
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
