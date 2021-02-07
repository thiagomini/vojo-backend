import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
  HttpStatus
} from '@nestjs/common'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const request = ctx.getRequest()
    const statusCode = exception.getStatus()
    const messages = new Map()

    messages.set(HttpStatus.UNAUTHORIZED, 'Token inválido');
    messages.set(HttpStatus.FORBIDDEN, 'Você não possui permissão');

    Logger.error(
      `${request.method} ${request.url}`,
      exception.stack,
      'HttpExceptionFilter'
    )

    return response
      .status(statusCode)
      .json({
        error: {
          message: messages.get(statusCode) || exception.message
        }
      })
  }
}
