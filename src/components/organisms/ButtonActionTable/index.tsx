"use client"

import { Button } from '@/components/ui/button';
import { MoreVerticalIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react'

interface ButtonActionTabelProps {
    url: string;
}

const ButtonActionTabel: FC<ButtonActionTabelProps> = ({url}) => {
    const router = useRouter();
  return (
      <Button onClick={() => router.push(url)} size={"icon"} variant={"outline"}>
          <MoreVerticalIcon className='w-4 h-4'/>
    </Button>
  )
}

export default ButtonActionTabel;