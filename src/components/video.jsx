/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from "react";
import MUIDataTable from "mui-datatables";

const Video = ({ data }) => {
  const columns = useMemo(() => [
    {
      name: "name",
      label: "Music name",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return <strong>{value}</strong>;
        },
        customHeadLabelRender: (columnMeta) => {
          return (
            <strong style={{ color: "#d94939" }}>{columnMeta.label}</strong>
          );
        },
      },
    },
    {
      name: "source",
      label: "Scrapped from",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return <strong>{value}</strong>;
        },
        customHeadLabelRender: (columnMeta) => {
          return (
            <strong style={{ color: "#d94939" }}>{columnMeta.label}</strong>
          );
        },
      },
    },
    {
      name: "createdAt",
      label: "Created On",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return <strong>{value}</strong>;
        },
        customHeadLabelRender: (columnMeta) => {
          return (
            <strong style={{ color: "#d94939" }}>{columnMeta.label}</strong>
          );
        },
      },
    },
    {
      name: "user",
      label: "Account",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return <strong>{value}</strong>;
        },
        customHeadLabelRender: (columnMeta) => {
          return (
            <strong style={{ color: "#d94939" }}>{columnMeta.label}</strong>
          );
        },
      },
    },
  ]);
  const options = {
    filterType: "checkbox",
    print: false,
    download: false,
  };
  const d = [
    {
      name: "No guns to town",
      source: "youtube",
      createdAt: "two hours ago",
      user: "andrew mwebbi",
    },
  ];
  return (
    <MUIDataTable
      title={<h5 style={{ color: "#d94939" }}> VIDEO SCRAPPER DATA</h5>}
      data={d}
      columns={columns}
      options={options}
    />
  );
};

export default Video;
