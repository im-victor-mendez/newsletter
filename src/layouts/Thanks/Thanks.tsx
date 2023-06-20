import './Thanks.scss'
import { ReactComponent as SuccessIcon } from '@/assets/images/icon-success.svg'
import { useForm } from '@/contexts/formContext'

function Thanks() {
	const { email, handleEmail, handleSuccess } = useForm()

	function dismiss() {
		handleEmail('')
		handleSuccess(undefined)
	}

	return (
		<article className="thanks">
			<section className="top">
				<SuccessIcon className="icon" />
				<h1 className="title">{`Thanks for subscribing!`}</h1>
				<p className="text">
					A confirmation email has been sent to{' '}
					<span className="bold">{email}</span>. Please open it and click the
					button inside to confirm your subscription
				</p>
			</section>
			<button onClick={dismiss} className="button">{`Dismiss message`}</button>
		</article>
	)
}
export default Thanks
