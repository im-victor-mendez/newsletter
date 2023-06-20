import { ReactNode, createContext, useContext, useState } from 'react'

type DefaultValue = {
	email: string
	handleEmail: (value: string) => void
	success: undefined | boolean
	handleSuccess: (value: undefined | boolean) => void
}
const defaultValue = {} as DefaultValue
const formContext = createContext(defaultValue)

export function useForm() {
	const context = useContext(formContext)
	return context
}

interface Props {
	children: ReactNode
}

export function FormContext({ children }: Props) {
	const [email, setEmail] = useState('')
	const [success, setSuccess] = useState<undefined | boolean>(undefined)

	const value = { email, handleEmail, success, handleSuccess }

	function handleEmail(value: string) {
		setEmail(value)
	}

	function handleSuccess(value: undefined | boolean) {
		setSuccess(value)
	}

	return <formContext.Provider value={value}>{children}</formContext.Provider>
}
