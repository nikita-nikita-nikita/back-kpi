import {Catch, HttpException, HttpStatus} from "@nestjs/common";

@Catch()
export class ValidationException extends HttpException {
    messages

    constructor(response) {
        super(response, HttpStatus.BAD_REQUEST)
        this.messages = response
    }
}