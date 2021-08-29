import { useField } from 'formik'
import ErrorTip from './ErrorTip'

function MyInput ({icon, ...props}) {
  const [field, meta] = useField(props);
  return (
    <div 
      className={[
        'input-prepend',
        props.pos==='last'?'':'restyle',
        (props.pos==='first'&&props.pos==='last')?'':'no-radius'
      ].join(' ')}
    >
    <input {...field} {...props} />
    <i className={['iconfont','ic-'+icon].join(' ')}></i>
    {meta.touched && meta.error ? <ErrorTip tip={meta.error}></ErrorTip> : null}
  </div>
  )
  
}

export default MyInput