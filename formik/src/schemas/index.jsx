import * as yup from "yup";
const passswordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email girmek zorunludur"),
  age: yup
    .number()
    .positive("lütfen pozitif bir yaş griniz")
    .integer("lütfen yaşınızı  tam sayı olarak giriniz")
    .required("yaş girmek zorunludur"),
  password: yup
    .string()
    .min(5, "lütfen minimum 5 karakter giriniz")
    .matches(passswordRules, {
      message: "Lütfen en az bir büyük harf bir küçük harf ve bir sayı giriniz",
    })
    .required("Şifre girmek zorunludur"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Tekrar şifre girmek zorunludur"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Kullanıcı adı minimum 2 karakter uzunluğunda olmalıdır")
    .required("Kullanıcı adı zorunludur"),
  university: yup
    .string()
    .oneOf(["bogazici", "gsu", "odtü", "itü"], "Lütfen üniversitenizi seçiniz")
    .required("Lütfen üniversitenizi seçiniz"),
  isAccepted: yup.boolean().oneOf([true], "Kullanım koşullarını kabul ediniz"),
});
