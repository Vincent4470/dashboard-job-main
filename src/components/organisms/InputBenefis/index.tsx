import React, { FC, useState } from "react";
import DialogAddBenefit from "./DialogAddBenefits";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { PartyPopper, X } from "lucide-react";
import { set } from "zod";

interface InputBenefitsProps {
  form: any;
}

const InputBenefits: FC<InputBenefitsProps> = ({ form }) => {
  const [benefits, setBenefits] = useState<any[]>([]);

  const deleteBenefit = (item: any) => {
    const deleteBenefit = benefits.filter(
      (benefits: any) => item !== benefits
    );
    setBenefits([...deleteBenefit]);
    form.setValue("benefits", deleteBenefit);
  };

  const updateBenefits = (item: any) => {
    const newBenefits: any[] = [...benefits, item];
    setBenefits(newBenefits);
    form.setValue("benefits", newBenefits);
  };

  return (
    <div className="block">
      <DialogAddBenefit updateBenefits={updateBenefits} />
      <div className="grid-cols-3 gap-5 mt-5">
        {benefits.map((item: any, i: number) => (
          <div
            className="border border-gray-200 rounded-sm p-3 relative"
            key={i}
          >
            <PartyPopper className="w-7 h-7 mb-5 text-primary" />

            <div
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => deleteBenefit(item)}
            >
              <X className="w-6 h-6" />
            </div>

            <div className="text-xl font-semibold mb-3">{item.benefit}</div>
            <div className="text-gray-500 text-sm">{item.desc}</div>
          </div>
        ))}
      </div>

      <FormField
        control={form.control}
        name="benefits"
        render={({ field }) => (
          <FormItem>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export default InputBenefits;
