import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Css_Rti_Entity } from './ticket/entities/css_rti_entity';
import { TicketModule } from './ticket/ticket.module';
import { UsersModule } from './users/users.module';
import { Pla_Emp_Entity } from './apoyo/entities/pla_emp_entity';
import { Pla_Uni_Entity } from './apoyo/entities/pla_uni_entity';
import { ApoyoModule } from './apoyo/apoyo.module';
import { Css_Uni_Entity } from './apoyo/entities/css_uni_entity';
import { Sis_Sis_Entity } from './apoyo/entities/sis_sis_entity';
import { Sis_Msi_Entity } from './apoyo/entities/sis_msi_entity';
import { Css_Ret_Entity } from './ticket/entities/css_ret_entity';
import { Css_Sol_Entity } from './apoyo/entities/css_sol_entity';
import { Css_Sdt_Entity } from './apoyo/entities/css_sdt_entity';
import { Css_Cnt_Entity } from './apoyo/entities/css_cnt_entity';

 import { ConfigModule } from '@nestjs/config';
 import { MailerModule } from '@nestjs-modules/mailer';
 import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [AuthModule, UsersModule, TicketModule, ApoyoModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'oracle',
      connectString: process.env.ORA_CONECTION,
      port: parseInt(process.env.ORA_PORT),
      username: process.env.ORA_USERNAME,
      password: process.env.ORA_PASSWORD,
      database: process.env.ORA_DATABASE,
      logging: true,
      schema: '',
      entities: [    
        Css_Rti_Entity, 
        Css_Ret_Entity,
        Pla_Emp_Entity, 
        Pla_Uni_Entity, 
        Css_Uni_Entity, 
        Sis_Sis_Entity, 
        Sis_Msi_Entity,
        Css_Cnt_Entity,
        Css_Sdt_Entity,
        Css_Sol_Entity],
    }),
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: process.env.HOST_MAIL,
          port: parseInt(process.env.PORT_MAIL),
          secure: Boolean(JSON.parse(process.env.SECURE_MAIL)),
        },
        defaults: {
          from: '"nest-modules" <modules@nestjs.com>',
        },
        /*
        files: [
          {
            filename:     'image.jpg',          
            contentType:  'image/jpeg',
            cid:          'myimagecid'
          }
        ],
  */

        template: {
          dir: process.cwd() + '/templates/', // __dirname + '/templates', //dir: process.cwd() + 'src/templates',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },

      }),
    }),    
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule { }
