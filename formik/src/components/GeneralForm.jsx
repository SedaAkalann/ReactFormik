import React from "react";
import { useFormik } from "formik";
import "../style/General.css";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  // console.log(values);
  // console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};
function GeneralForm() {
  const { values, errors, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  // console.log(values.age);

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv ">
        <label>Email</label>
        <input
          className={errors.email ? "input-error " : ""}
          onChange={handleChange}
          type="email"
          value={values.email}
          placeholder="Mail adresinizi giriniz"
          id="email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="inputDiv">
        <label>Yaş</label>
        <input
          className={errors.age ? "input-error " : ""}
          onChange={handleChange}
          type="number"
          value={values.age}
          placeholder="Yaşınızı giriniz"
          id="age"
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="inputDiv">
        <label>Şifre</label>

        <input
          className={errors.password ? "input-error " : ""}
          onChange={handleChange}
          type="password"
          value={values.password}
          placeholder="Şifrenizi giriniz"
          id="password"
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="inputDiv">
        <label>Şifre Tekrar</label>
        <input
          className={errors.confirmPassword ? "input-error " : ""}
          onChange={handleChange}
          type="password"
          value={values.confirmPassword}
          placeholder="Şifrenizi tekrar giriniz"
          id="confirmPassword"
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>
      <button disabled={isSubmitting} className="Btn" type="submit">
        Kaydet
      </button>
      <Link to="/portal" className="link">
        Portala git
      </Link>
    </form>
  );
}

export default GeneralForm;
