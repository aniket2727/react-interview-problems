// import React from "react";
// //import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

// const DataTable = () => {
//     const rows = [
//         { id: 1, name: "John Doe", age: 25, city: "New York" },
//         { id: 2, name: "Jane Smith", age: 30, city: "Los Angeles" },
//         { id: 3, name: "Sam Wilson", age: 28, city: "Chicago" }
//     ];

//     const tableRows = [];
//     for (let i = 0; i < rows.length; i++) {
//         tableRows.push(
//             <TableRow key={rows[i].id}>
//                 <TableCell>{rows[i].id}</TableCell>
//                 <TableCell>{rows[i].name}</TableCell>
//                 <TableCell>{rows[i].age}</TableCell>
//                 <TableCell>{rows[i].city}</TableCell>
//             </TableRow>
//         );
//     }

//     return (
//         <TableContainer component={Paper}>
//             <Table>
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>ID</TableCell>
//                         <TableCell>Name</TableCell>
//                         <TableCell>Age</TableCell>
//                         <TableCell>City</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>{tableRows}</TableBody>
//             </Table>
//         </TableContainer>
//     );
// };

// export default DataTable;
