import axios from 'axios'
import { useEffect, useState } from 'react';

// function useGetPost () {
//   const [post, setPost] = useState({})
//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts/1')
//       .then(response => setPost(response.data))
//   }, [])
//   return [post, setPost]
// }

// function App () {
//   const [post, setPost] = useGetPost()
//   return (
//     <div>
//       <div>{post.title}</div>
//       <div>{post.body}</div>
//     </div>
//   )
// }

function useUpdateInput (initVal) {
  const [value, setValue] = useState(initVal)
  return {
    value,
    onChange: event => setValue(event.target.value)
  }
}

function App () {
  const usernameInput = useUpdateInput('')
  const passwordInput = useUpdateInput('')
  const submitForm = event => {
    event.preventDefault();
    console.log(usernameInput.value);
    console.log(passwordInput.value);
  }
  return (
    <form onSubmit={submitForm}>
      {/* <input value={} onChange={() => {}} type="text" name="username" /> */}
      <input type="text" name="username" {...usernameInput} />
      <input type="password" name="password" {...passwordInput} />
      <input type="submit" />
    </form>
  )
}

export default App;
