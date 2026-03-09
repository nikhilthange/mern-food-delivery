import React from 'react'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
      </div>
    </div>
  )
}

export default App