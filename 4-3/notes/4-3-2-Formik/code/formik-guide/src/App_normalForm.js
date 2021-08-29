import { useFormik } from 'formik'
import * as Yup from 'yup'

function App() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    }, 
    onSubmit: values => {console.log('values', values)},
    // validate: values => {
    //   const errors = {};
    //   if (!values.username) {
    //     errors.username = '请输入用户名';
    //   } else if (values.username.length > 15) {
    //     errors.username = '用户名的长度不能大于15'
    //   }

    //   if (!values.password) {
    //     errors.password = '请输入密码';
    //   } else if (values.password.length < 6) {
    //     errors.password = '密码的长度不能小于6'
    //   }
    //   return errors;
    // }
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15,'用户名的长度不能大于15')
        .required('请输入用户名'),
      password: Yup.string()
      .min(6,'密码的长度不能小于6')
      .required('请输入密码')
    })
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input 
        type="text" 
        name="username"
        { ...formik.getFieldProps('username') }
      />
      {formik.touched.username && formik.errors.username ? <div style={{color:'#f00'}}>{formik.errors.username}</div> : null}
      <input 
        type="password" 
        name="password"
        { ...formik.getFieldProps('password') }
      />
      {formik.touched.password && formik.errors.password ? <div style={{color:'#f00'}}>{formik.errors.password}</div> : null}
      <input type="submit" />
    </form>
  );
}

export default App;
