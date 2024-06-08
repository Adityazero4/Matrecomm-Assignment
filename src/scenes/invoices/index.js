import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: t("invoices.id") },
    {
      field: "name",
      headerName: t("invoices.name"),
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: t("invoices.phoneNumber"),
      flex: 1,
    },
    {
      field: "email",
      headerName: t("invoices.email"),
      flex: 1,
    },
    {
      field: "cost",
      headerName: t("invoices.cost"),
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}
        mt={1.8}
        >
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: t("invoices.date"),
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title={t("invoices.title")} subtitle={t("invoices.subtitle")} />
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
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
