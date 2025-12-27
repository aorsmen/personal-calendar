export class ApiError extends Error {
  statusCode: number;
  body: any;

  constructor(statusCode: number, message: string, body?: any) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.body = body;
  }
}
