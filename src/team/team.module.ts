// src/team/team.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { Team } from './entities/team.entity';
import { TeamMember } from './entities/team-member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Team, TeamMember])],
  providers: [TeamService],
  controllers: [TeamController],
})
export class TeamModule {}
