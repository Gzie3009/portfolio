'use client'
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name:string,
  email:string,
  subject:string,
  message:string
};
type Props = {};

export default function Contact({}: Props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    window.location.href=`mailto:dev.work.gzie@gmail.com?subject=${data.subject}&body=Hi , My Name is ${data.name} ${data.message} (${data.email})`
  };

  return (
    <div className="min-h-sreen flex relative flex-col text-center md:text-left max-w-4xl px-10 justify-evenly mx-auto items-center py-24">
      <h3 className="uppercase tracking-[20px] text-[#0DB760] font-semibold text-xl md:text-2xl text-center w-full pb-10">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 ">
        <h4 className="text-3xl md:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#FF0000]/50">Lets Talk</span>
        </h4>
        <div className="space-y-5 ">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#0DB760]" />
            <p className="text-2xl">+91 7086817628</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#0DB760]" />
            <p className="text-2xl">dev.work.gzie@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#0DB760]" />
            <p className="text-2xl">123 developer Lane </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2">
            <div className="flex space-x-2">
                <input {...register('name')} placeholder="Name" className="contactInput  w-1/2" type="text" id="" /> <input {...register('email')} placeholder="Email" className="contactInput w-1/2" type="email" id="" />
            </div>
            <input {...register('subject')} placeholder="Subject" className="contactInput w-full" type="text" id="" />
            <textarea {...register('message')} placeholder="Message" className="contactInput"></textarea>
            <button type="submit" className="bg-[#0DB760] focus:bg-[#3c9c6a] text-white py-5 px-10 rounded-sm hover:opacity-70 tracking-widest font-bold text-lg">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
