import React from "react";
import { useField } from "formik";
import "../style/General.css";

const CustomCheckBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <div className="chcbx">
        <input
          {...field}
          {...props}
          className={meta.error ? "input-error" : "seda"}
        />
        <span className="seda1">Kullanım koşullarını kabul ediyorum</span>
      </div>

      {meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
};

export default CustomCheckBox;
