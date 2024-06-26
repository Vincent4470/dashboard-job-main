import React, { FC } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_APPLICANT_COLOMS, JOB_APPLICANT_DATA} from '@/constants';
import ButtonActionTabel from '../ButtonActionTable';

interface ApplicantsProps {
  
}

const Applicants: FC<ApplicantsProps> = ({  }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {JOB_APPLICANT_COLOMS.map((item: string, i: number) => (
            <TableHead key={item + i}>{item}</TableHead>
          ))}
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {JOB_APPLICANT_DATA.map((item: any, i: number) => (
          <TableRow key={item.name + i}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.appliedDate}</TableCell>
            <TableCell>
              <ButtonActionTabel url="" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Applicants;