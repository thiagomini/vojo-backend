export class QueryError extends Error {
  readonly path: string

  constructor(message: string, path) {
    super(message);
    this.path = path
  }
}