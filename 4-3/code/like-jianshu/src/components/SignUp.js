import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react';
import axios from 'axios';

import MyInput from './MyInput'
import ErrorTip from './ErrorTip'

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [tipshow, setTipshow] = useState(false);
  const [tipstr, setTipstr] = useState('');
  const initialValues = {
    username:'',
    email: '',
    password: ''
  };
  const handleSubmit = (values) => {
    if (loading) {
      return;
    }
    console.log('values', values)
    setLoading(true);
    axios.post('https://conduit.productionready.io/api/users',{
      user:{
        ...values
      }
    }).then(res => {
      console.log('注册成功',res)
      setLoading(false);
      showTip('注册成功');
    }).catch(err => {
      console.log('注册失败',err);
      setLoading(false);
      showTip('注册失败');
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
    username: Yup.string()
      .required('请输入昵称'),
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
      <Form className="new_user">
        <MyInput 
          icon='user'
          type='text'
          name='username'
          placeholder="你的昵称"
          pos='first'
        />
        <MyInput 
          icon='email'
          type='text'
          name='email'
          placeholder="你的邮箱"
        />
        <MyInput 
          icon='password'
          type='password'
          name='password'
          placeholder="密码"
          pos='last'
        />
        <button className="sign-up-button" type="submit">
        <span id="sign-in-loading2" style={{display:loading?'inline-block':'none'}}></span>
          <span style={{display:loading?'inline-block':'inline'}}>注册</span>
        </button>
        {tipshow ? <ErrorTip tip={tipstr} pos="middle"></ErrorTip> : null}
      </Form>
    </Formik>
  );
}

export default SignUp;
