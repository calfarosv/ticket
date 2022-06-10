import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const initSwagger = (app: INestApplication) => {
    const swaggerConfig = new DocumentBuilder()
        .setTitle('TICKET')
        .addBearerAuth()
        .setDescription('Ticket - junio 2022',
        )
        .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('/docs', app, document);
};