import './Form.scss'
import Bullet from '@/components/Bullet/Bullet'
import { useForm } from '@/contexts/formContext'

const bullets = [
	'Product discovery and building what matters',
	'Measuring to ensure updates are a success',
	'And much more!',
]

/**
 * Form
 * @description Layout to display form
 */
function Form() {
	const { email, handleEmail, handleSuccess } = useForm()

	const mappedBullets = bullets.map((string, index) => (
		<Bullet key={index} text={string} />
	))

	function onChange(event: { target: { value: string } }) {
		const value = event.target.value
		handleEmail(value)
	}

	function onSubmit(event: { preventDefault: () => void }) {
		event.preventDefault()
		handleSuccess(true)
	}

	return (
		<form className="form" onSubmit={onSubmit}>
			<article className="text">
				<h1 className="title">{`Stay updated!`}</h1>
				<p className="description">{`Join 60,000+ product managers receiving monthly updates on:`}</p>
				<section className="list bulleted">{mappedBullets}</section>
			</article>
			<section className="action">
				<label className="label">
					{`Email address`}
					<input
						className="input"
						type="email"
						name="email"
						placeholder="email@company.com"
						onChange={onChange}
						value={email}
					/>
				</label>
				<button
					className="submit"
					type="submit"
				>{`Subscribe to monthly newsletter`}</button>
			</section>
		</form>
	)
}
export default Form
