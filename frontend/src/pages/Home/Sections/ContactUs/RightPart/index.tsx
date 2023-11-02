import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
export default function RightPart() {
  const [initialDisabled, setInitialDisabled] = useState(true);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name should contain at least 2 characters")
      .required("Required field"),
    email: Yup.string()
      .email("Enter valid email address")
      .required("Required field"),
    message: Yup.string().required("Required field"),
  });

  function onSubmit() {
    ("");
  }
  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const red = 'rgb(225, 0,0)'
  const black = 'rgb(0,0,0)';
  useEffect(() => {
    if (formik.touched.name || formik.touched.message || formik.touched.email) {
      setInitialDisabled(false);
    }
    if (formik.errors.name || formik.errors.message || formik.errors.email) {
      setButtonIsDisabled(true);
    }
    if (!formik.errors.email && !formik.errors.message && !formik.errors.name) {
      setButtonIsDisabled(false);
    }
  }, [formik]);



  return (
    <form
      className="w-[80%] md:w-full md:flex-1 lg:w-[45%] xl:flex-1 flex flex-col gap-[3.5rem] mt-[5rem] items-start md:items-end"
      onSubmit={formik.handleSubmit}
    >
      <div className="w-full">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border-b-[1px] outline-none text-4xl text-black pb-[.8rem]"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{borderColor: formik.touched.name && formik.errors.name ? red :black}}
        />
      </div>
      <div className="w-full">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border-b-[1px] border-black outline-none text-4xl text-black pb-[.8rem]"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{borderColor: formik.touched.email && formik.errors.email ? red :black}}
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          name="message"
          placeholder="Message"
          className="w-full border-b-[1px] border-black outline-none text-4xl text-black pb-[.8rem]"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{borderColor: formik.touched.message && formik.errors.message ? red :black}}
        />
      </div>
      <div className="w-fit mt-[1rem]">
        <button
          className=" rounded-[3rem] py-[1.5rem] px-[5rem] text-2xl md:text-3xl font-normal bg-black text-white hover:bg-white border-black border-[1px] hover:text-black duration-200 cursor-pointer disabled:text-black disabled:cursor-not-allowed disabled:bg-gray-400  disabled:border-gray-500 disabled:opacity-80"
          style={{ fontFamily: "DM Sans" }}
          disabled={initialDisabled || buttonIsDisabled}
        >
          Send
        </button>
      </div>
    </form>
  );
}
