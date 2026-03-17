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

interface ValidatorMessages {
	nameRequired: string;
	nameMaxLength: string;
	emailRequired: string;
	emailInvalid: string;
	emailMaxLength: string;
	messageRequired: string;
	messageMaxLength: string;
}

export function validateContactForm(
	data: ContactFormData,
	messages: ValidatorMessages,
): ContactFormErrors {
	const errors: ContactFormErrors = {};
	const { name, email, message } = data;

	if (!name.trim()) {
		errors.name = messages.nameRequired;
	} else if (name.length > 50) {
		errors.name = messages.nameMaxLength;
	}

	if (!email.trim()) {
		errors.email = messages.emailRequired;
	} else if (!EMAIL_REGEX.test(email)) {
		errors.email = messages.emailInvalid;
	} else if (email.length > 255) {
		errors.email = messages.emailMaxLength;
	}

	if (!message.trim()) {
		errors.message = messages.messageRequired;
	} else if (message.length > 500) {
		errors.message = messages.messageMaxLength;
	}

	return errors;
}
