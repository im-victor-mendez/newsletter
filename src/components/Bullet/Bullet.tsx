import './Bullet.scss'
import { ReactComponent as SuccessIcon } from '@/assets/images/icon-success.svg'

interface Props {
	text: string
}

/**
 * Bullet
 * @description Component to display text as bulleted list
 * @param text Text to display
 */
function Bullet({ text }: Props) {
	return (
		<div className="bullet">
			<SuccessIcon className="icon" />
			<p className="text">{text}</p>
		</div>
	)
}
export default Bullet
