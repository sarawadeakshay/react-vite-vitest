import Header from './components/Header';
import SideNav from './components/SideNav';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <SideNav />
        <MainContainer />
      </div>
    </>
  )
}

export default App;
