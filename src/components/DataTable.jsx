import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, Typography } from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import headers from "../utils/headers";

export default function DataTable({ results, setResults }) {

  const sortData = (key, order) => {
    const resultData = [...results];
    resultData.sort((a, b) => {
      if (a[key] === b[key]) {
        return 0;
      }
      return order === "ascending" ? (a[key] < b[key] ? -1 : 1) : (a[key] < b[key] ? 1 : -1)
    });
    setResults(resultData)
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell
                key={header.key}
                sx={{ color: "grey" }}
                align={header.key === "pl_name" ? "left" : "right"}
              >
                <Typography sx={{ fontWeight: "bold", mb: 0.5 }}>
                  {header.title}
                </Typography>
                <ArrowUpward
                  onClick={() => sortData(header.key, "ascending")}
                  sx={{
                    mr: 0.8,
                    cursor: "pointer",
                    fontSize: "16px",
                    borderRadius: "50%",
                    border: " 1px solid grey",
                    "&:hover": {
                      color: "#fafafa",
                      borderColor: "#698aff",
                      backgroundColor: "#698aff",
                    },
                  }}
                />
                <ArrowDownward
                  onClick={() => sortData(header.key, "descending")}
                  sx={{
                    cursor: "pointer",
                    fontSize: "16px",
                    borderRadius: "50%",
                    border: " 1px solid grey",
                    "&:hover": {
                      color: "#fafafa",
                      borderColor: "#698aff",
                      backgroundColor: "#698aff",
                    },
                  }}
                />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((result) => (
            <TableRow
              key={result.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link
                  href={`https://exoplanetarchive.ipac.caltech.edu/overview/${result.pl_name}`}
                  target="_blank"
                  underline="hover"
                >
                  {result.pl_name}
                </Link>
              </TableCell>
              <TableCell align="right">{result.hostname}</TableCell>
              <TableCell align="right">{result.discoverymethod}</TableCell>
              <TableCell align="right">{result.disc_year}</TableCell>
              <TableCell align="right">{result.disc_facility}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
