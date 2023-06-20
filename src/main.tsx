import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.scss'
import { FormContext } from './contexts/formContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<FormContext>
			<App />
		</FormContext>
	</React.StrictMode>
)
