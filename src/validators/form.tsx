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
	} else if (name.length > 50) {
		errors.name = "O nome deve conter no máximo 50 caracteres";
	}

	if (!email.trim()) {
		errors.email = "Lembre-se de preencher o e-mail";
	} else if (!EMAIL_REGEX.test(email)) {
		errors.email = "Certifique-se de fornecer um e-mail válido";
	} else if (email.length > 255) {
		errors.email = "O e-mail deve conter no máximo 255 caracteres";
	}

	if (!message.trim()) {
		errors.message = "Lembre-se de preencher a mensagem";
	} else if (message.length > 500) {
		errors.message = "A mensagem deve conter no máximo 500 caracteres";
	}

	return errors;
}
