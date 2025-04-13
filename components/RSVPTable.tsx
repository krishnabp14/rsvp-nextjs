"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export type RSVPTableRow = {
  name: string;
  email: string;
  attendees: number;
  isAttending: string;
  created_at: string;
};

type RSVPTableProps = {
  data: RSVPTableRow[];
};

export const RSVPTable = ({ data }: RSVPTableProps) => {
  console.log("----data----");
  console.log(data);
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead className="w-[100px]">Email</TableHead>
          <TableHead>Attendees</TableHead>
          <TableHead>IsAttending</TableHead>
          <TableHead className="text-right">Submitted At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((currentItem, _index) => {
          return (
            <TableRow key={_index}>
              <TableCell className="font-medium">{currentItem.name}</TableCell>
              <TableCell className="font-medium">{currentItem.email}</TableCell>
              <TableCell>{currentItem.attendees}</TableCell>
              <TableCell>{currentItem.isAttending}</TableCell>
              <TableCell className="text-right">
                {currentItem.created_at}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
