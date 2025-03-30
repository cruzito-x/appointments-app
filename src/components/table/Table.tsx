import DataTable from "react-data-table-component";
import styled from "styled-components";
import Loading from "../loading/Loading";

const Table = ({ columns, data, length }) => {
  const StyledDataTable = styled(DataTable)`
    .rdt_Table {
      border-collapse: collapse !important;
      border: none !important;
    }
    .rdt_TableRow {
      border-bottom: none !important;
    }
    .rdt_TableCell {
      border: none !important;
    }
    .rdt_TableHead {
      border-bottom: none !important;
    }
    .sc-iHnPhB dDupAJ {
      display: none !important;
    }
  `;

  const tableStyles = {
    rows: {
      style: {
        border: "none",
        transition: "all 0.3s ease-in-out",
      },
      highlightOnHoverStyle: {
        backgroundColor: "#1e3a8a",
        color: "#ffffff",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
      },
    },
    headCells: {
      style: {
        backgroundColor: "#d2d4da",
        color: "#000000",
        fontWeight: "semibold",
        fontSize: "14px",
        border: "none",
      },
    },
    cells: {
      style: {
        justifyContent: "center",
        border: "none",
      },
    },
  };

  return (
    <StyledDataTable
      className="cursor-pointer"
      columns={columns}
      data={data}
      pagination
      paginationPerPage={length}
      paginationComponentOptions={{
        rowsPerPageText: "",
        rangeSeparatorText: "de",
      }}
      paginationRowsPerPageOptions={[]}
      fixedHeader
      striped
      progressComponent={<Loading />}
      customStyles={tableStyles}
      noHeader
      highlightOnHover
    />
  );
};

export default Table;
