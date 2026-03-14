export interface ContactFormData {
	name: string;
	email: string;
	message: string;
}

export interface ContactFormErrors {
	name?: string;
	email?: string;
	message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
	const errors: ContactFormErrors = {};

	const { name, email, message } = data;

	if (!name.trim()) {
		errors.name = "Lembre-se de preencher o nome";
	}

	if (!email.trim()) {
		errors.email = "Lembre-se de preencher o e-mail";
	} else if (!EMAIL_REGEX.test(email)) {
		errors.email = "Certifique-se de fornecer um e-mail válido";
	}

	if (!message.trim()) {
		errors.message = "Lembre-se de preencher a mensagem";
	}

	return errors;
}
