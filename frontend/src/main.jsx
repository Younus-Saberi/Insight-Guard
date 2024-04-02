import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ImageUploadComponent from '../components/ImageUploadComponent.jsx'
import ImageProcessingComponent from '../components/ImageProcessing.jsx'
import './index.css'

const BACKENDURL = 'http://127.0.0.1:8000'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App backendUrl={BACKENDURL}/>
    <ImageUploadComponent backendUrl={BACKENDURL}/>
    <ImageProcessingComponent backendUrl={BACKENDURL}/>
  </React.StrictMode>,
)
