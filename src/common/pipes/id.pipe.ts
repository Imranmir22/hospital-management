import { ArgumentMetadata, PipeTransform } from "@nestjs/common";

class IdPipe implements PipeTransform { 
    transform(value: any, metadata: ArgumentMetadata){
        
    }
} 
// A pipe can:
// Validate data (e.g., ensure an email is valid)
// Transform data (e.g., convert "123" to 123)
// Reject invalid input by throwing an exception