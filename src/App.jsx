import React from 'react'
import './App.css'
import Greeting from './components/greeting'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Card from './components/Card'
import Button from './components/Button'
import Banner from './components/Banner'
import Testimonial from './components/Testimonial'

function App() {

  const handleClick = () => {
    alert('Button clicked!')
  }
  return (
    <div className="App">
      <NavBar />
      <Greeting />
      <Banner 
        message="Welcome to Our Amazing Service!"
        ctaText="Get Started Today" 
        backgroundColor="#4a90e2"
      />


      <Card
        image="https://picsum.photos/200/300"
        title="Sample Card"
        description="This is a sample card component."
      />
      <Card
        image="https://picsum.photos/id/237/200/300"
        title="Another Card"
        description="This is another sample card component."
      />

      <Button onClick={handleClick}>
        Click Me
      </Button>


      <Testimonial 
        quote="This React lab helped me understand components really well!"
        name="John Doe"
        position="Software Engineer"
      />

      <Footer />
    </div>
  )
}

export default App