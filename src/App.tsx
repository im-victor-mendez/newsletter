import './App.scss'
import { useForm } from './contexts/formContext'
import Form from './layouts/Form/Form'
import Thanks from './layouts/Thanks/Thanks'

function App() {
	const { success } = useForm()
	return <>{!success ? <Card /> : <Thanks />}</>
}

function Card() {
	return (
		<article className="card">
			<section className="image"></section>
			<Form />
		</article>
	)
}

export default App
