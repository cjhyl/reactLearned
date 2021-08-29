import Header from './Header';
import Navagation from './Navagation';

export default function Layout ({children}) {
  return <>
    <Header />
    <Navagation />
    {children}
  </>
}