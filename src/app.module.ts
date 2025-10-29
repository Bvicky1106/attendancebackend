import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { TeamModule } from './team/team.module';
import { Team } from './team/entities/team.entity';
import { TeamMember } from './team/entities/team-member.entity';
import { AttendanceModule } from './attendance/attendance.module';
import { Attendance } from './attendance/entities/attendance.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    // Load .env globally
    ConfigModule.forRoot({ isGlobal: true }),

    // ✅ TypeORM connection using Supabase DATABASE_URL
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        url: config.get<string>('DATABASE_URL'), // <-- Supabase connection string
        entities: [Team, TeamMember, Attendance, User],
        synchronize: true, // ❗ use only in dev (turn off in production)
        ssl: {
          rejectUnauthorized: false, // required for Supabase/Render connection
        },
      }),
    }),

    // Your app modules
    TeamModule,
    AttendanceModule,
    AuthModule,
  ],
})
export class AppModule {}
