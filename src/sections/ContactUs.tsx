'use client'
import { sendEmail } from '@/app/contact/actions/sendmail';
import { useEffect, useRef, useState } from 'react';
import { useFormState } from 'react-dom';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Head from "next/head";
type Props = {
  translations: {
    title: string;
    description: string;
    first:string;
    last:string;
    company:string;
    phone:string;
    num:string;
    email:string;
    message:string;
    privacy:string;
    policy:string;
    button:string;
    alertTitle:string;
    alertMessage:string;
  };
};

export const Contact = ({ translations }: Props) => {
  const initialState = { success: null, error: null }
  const [state, formAction] = useFormState(sendEmail as any, initialState)
  const formRef = useRef<HTMLFormElement>(null)
  const [formKey, setFormKey] = useState(0)
  const [showDialog, setShowDialog] = useState(false)
  const [dialogContent, setDialogContent] = useState({ title: "", description: "" })
 useEffect(() => {
  if (state?.success) {
    setDialogContent({
      title: translations.alertTitle,
      description: translations.alertMessage,
    });
    setFormKey(prev => prev + 1);
    setShowDialog(true);
  } else if (state?.error) {
    setDialogContent({
      title: "Fehler",
      description: state.error,
    });
    setShowDialog(true);
  }
}, [state]);

  return (
    <>
    <Head>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Kontakt",
      "url": "https://safety-doors.com/contact",
      "description": "Kontaktieren Sie Safety2 für Fragen rund um EHS-Software, Compliance und Arbeitssicherheit."
    })
  }}
/>

    </Head>
    <div className="isolate bg-[#eaeefe] px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">{translations.title}</h2>
        <p className="mt-2 text-lg/8 text-gray-600">{translations.description}</p>
      </div>
      <form key={formKey} ref={formRef} action={formAction} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
              {translations.first}
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border border-[gray]/90 bg-[white]/80 px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-2 outline-black placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
              {translations.last}
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border border-[gray]/90 bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
              {translations.company}
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md border border-[gray]/90 bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
              {translations.email}
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full border border-[gray]/90 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
              {translations.phone}
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="+XX XXXX XXXXXX"
                  className="block min-w-0 border border-[gray]/90 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="numEmp" className="block text-sm/6 font-semibold text-gray-900">
              {translations.num}
            </label>
            <div className="mt-2.5">
              <input
                id="numEmp"
                name="numEmp"
                type="number"
                className="block w-full rounded-md border border-[gray]/90 bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
              {translations.message}
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block border border-[gray]/90 w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                defaultValue={''}
              />
            </div>
          </div>

          <div className="flex gap-x-4 sm:col-span-2">
          </div>
        </div>
        <label htmlFor="agree-to-policies" className="text-sm/6 text-gray-600">
          {translations.privacy}{' '}
          <a href="/privacy" className="font-semibold whitespace-nowrap text-indigo-600">
            {translations.policy}
          </a>
          .
        </label>
        <div className="mt-10">
          <button
            type="submit"
            className="btn-primary block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[black]-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {translations.button}
          </button>
        </div>
      </form>
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
      <AlertDialogContent>
      <AlertDialogHeader>
      <AlertDialogTitle>{dialogContent.title}</AlertDialogTitle>
      <AlertDialogDescription>
        {dialogContent.description}
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogAction onClick={() => setShowDialog(false)}>
        OK
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    </div>
</>  )
}