const dev = {
	API_ENDPOINT_URL: 'https://api.rysyl.com/v1',
	API_ENDPOINT_URL_2: 'https://api.rysyl.com/v2',
	API_AUTH_URL: 'https://auth.rysyl.com/oauth2',
	API_IMAGE_URL: '',
};

const prod = {
	API_ENDPOINT_URL: 'https://api.rysyl.com/v1',
	API_ENDPOINT_URL_2: 'https://api.rysyl.com/v2',
	API_IMAGE_URL: '',
	API_AUTH_URL: 'https://auth.rysyl.com/oauth2',
};

const test = {
	API_ENDPOINT_URL: 'https://api.test.com'
};

const getEnv = () => {
	switch (import.meta.env.MODE) {
		case 'development':
			return dev
		case 'production':
			console.log = () => {}
			console.error = ()=>{}
			return prod
		case 'test':
			return test
		default:
			break;
	}
}

export const env = getEnv()
