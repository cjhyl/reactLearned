import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import * as Yup from 'yup'

function MyInputField ({label, ...props}) {
  const [field, meta] = useField(props);
  return <div>
    <label htmlFor={props.id}>{label}</label>
    <input {...field} {...props} />
    {meta.touched && meta.error ? <div>{meta.error}</div> : null}
  </div>
}

function Checkbox ({label, ...props}) {
  const [field, meta, helper] = useField(props);
  const { value } = meta;
  const { setValue } = helper;
  const handleChange = () => {
    const set = new Set(value);
    if (set.has(props.value)) {
      set.delete(props.value)
    } else {
      set.add(props.value)
    }
    setValue([...set]);
  }
  return <div>
    <label htmlFor={props.id}>
      <input 
        type='checkbox' 
        {...props}
        checked={value.includes(props.value)}
        onChange={handleChange}
      /> 
      {label}
    </label>
  </div>
}

function App() {
  const initialValues = {
    username: '',
    content:'我是内容',
    subject:'java',
    password: '',
    hobbies:['足球','篮球']
  };
  const handleSubmit = (values) => {
    console.log('values', values)
  }
  const schema = Yup.object({
    username: Yup.string()
      .max(15,'用户名的长度不能大于15')
      .required('请输入用户名'),
    password: Yup.string()
      .min(6,'密码的长度不能小于6')
      .required('请输入密码')
  })
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <Field name='username'/>
        <ErrorMessage name='username' />
        <MyInputField 
          label='密码'
          type='password'
          name='password'
          placeholder="请输入密码"
        />
        <Field as='textarea' name='content'/>
        <Field as='select' name='subject'>
          <option value='前端'>前端</option>
          <option value='java'>java</option>
        </Field>
        <Checkbox value='足球' label='足球' name='hobbies' />
        <Checkbox value='篮球' label='篮球' name='hobbies' />
        <Checkbox value='橄榄球' label='橄榄球' name='hobbies' />

        <input type="submit" />
      </Form>
    </Formik>
  );
}

export default App;
