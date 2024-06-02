// style
import './App.css'

// components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer'

function App() {

  return (
    <div className='App'>
      <Navbar />
        <main>
          <h1>Content</h1>
        </main>
      <Footer />
    </div>
  )
}

export default App