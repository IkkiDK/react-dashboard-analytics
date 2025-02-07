//Style / CSS
import './App.css'

//Components 
import FirstComponent from './components/FirstComponents'
import TemplateExpression from './components/TemplateExpressions'
import Events from './components/Events'
import MyComponent from './components/MyComponent'

function App() {
  return (
    <div className='App'>
      <h1>Fundamentos react</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </div>
  )
}

export default App
