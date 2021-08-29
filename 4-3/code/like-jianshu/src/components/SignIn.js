import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react';
import axios from 'axios';

import MyInput from './MyInput'
import ErrorTip from './ErrorTip'

function Checkbox ({label, ...props}) {
  const [, meta, helper] = useField(props);
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
  return <div className="remember-btn">
    <input 
      type='checkbox' 
      {...props}
      checked={value.includes(props.value)}
      onChange={handleChange}
    /> 
    <span><label htmlFor={props.id}>{label}</label></span>
    
  </div>
}

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [tipshow, setTipshow] = useState(false);
  const [tipstr, setTipstr] = useState('');
  const initialValues = {
    email: '',
    password: '',
    remember:[]
  };
  const handleSubmit = (values) => {
    if (loading) {
      return;
    }
    console.log('values', values)
    setLoading(true);
    axios.post('https://conduit.productionready.io/api/users/login',{
      user:{
        email:values.email,
        password:values.password
      }
    }).then(res => {
      console.log('登录成功',res);
      setLoading(false);
      showTip('登录成功');
    }).catch(err => {
      console.log('登录失败',err)
      setLoading(false);
      showTip('登录失败');
    })
  }
  function showTip (str) {
    setTipshow(true);
    setTipstr(str);
    setTimeout(() => {
      setTipshow(false);
      setTipstr('');
    },2000)
  }
  const emailReg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
  const schema = Yup.object({
    email: Yup.string()
      .matches(emailReg,'请输入正确格式的邮箱')
      .required('请输入邮箱'),
    password: Yup.string()
      .min(8,'密码的长度不能小于8')
      .required('请输入密码')
  })
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <MyInput 
          icon='email'
          type='text'
          name='email'
          placeholder="你的邮箱"
          pos='first'
        />
        <MyInput 
          icon='password'
          type='password'
          name='password'
          placeholder="密码"
          pos='last'
        />
        <Checkbox value="me" label='记住我' name='remember' id="remember" />
        <div className="forget-btn">
          <a className="" data-toggle="dropdown" href="#!">登录遇到问题?</a>
        </div>
        <button className="sign-in-button loading" type="submit">
          <span id="sign-in-loading" style={{display:loading?'inline-block':'none'}}></span>
          <span style={{display:loading?'inline-block':'inline'}}>登录</span>
        </button>
        {tipshow ? <ErrorTip tip={tipstr} pos="middle"></ErrorTip> : null}
      </Form>
    </Formik>
  );
}

export default SignIn;
