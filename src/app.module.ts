/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TlistModule } from './tlist/tlist.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';
import { Tlist } from './tlist/entities/tlist.entity';
import { AuthModule } from './auth/auth.module';
import { NotiModule } from './noti/noti.module';
import { AuthUser } from './auth/entities/auth.entity';
import { Noti } from './noti/entities/noti.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect : process.env.DB_DIALECT as Dialect,
      host : process.env.DB_HOST,
      port : Number(process.env.DB_PORT),
      username : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE,
      //model --> table
      models : [Tlist,AuthUser,Noti],
      autoLoadModels : true,
      sync : {alter : true},
    }),
    NotiModule,
    TlistModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
