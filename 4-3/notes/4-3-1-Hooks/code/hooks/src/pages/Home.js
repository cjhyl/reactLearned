import { 
  useHistory, 
  useLocation, 
  useRouteMatch, 
  useParams
} from 'react-router-dom'

function Home (props) {
  console.log('useHistory',useHistory())
  console.log('useLocation',useLocation())
  console.log('useRouteMatch',useRouteMatch())
  console.log('useParams',useParams())
  console.log('home',props)
  return (
    <div>Home</div>
  )
}

export default Home;
