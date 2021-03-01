class RequestError extends Error {
	constructor(message, type) {
		super(message); // (1)
		this.name = "RequestError";
		this.type = type;
	}
}

const errorTypes = {
	UNAUTHORIZED: "UNAUTHORIZED",
	FORBIDDEN: "FORBIDDEN",
	BAD_REQUEST: "BAD_REQUEST",
	INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
};

const errorCodes = {
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	BAD_REQUEST: 400,
	INTERNAL_SERVER_ERROR: 500,
};

module.exports = {
	errorTypes,
	errorCodes,
	RequestError,
};
