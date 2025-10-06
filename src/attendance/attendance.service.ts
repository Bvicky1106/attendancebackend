// src/attendance/attendance.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendance } from './entities/attendance.entity';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(Attendance)
    private readonly attendanceRepo: Repository<Attendance>,
  ) {}

  async createAttendance(data: Partial<Attendance>) {
    const record = this.attendanceRepo.create(data);
    return this.attendanceRepo.save(record);
  }

  async getAllAttendance() {
    return this.attendanceRepo.find();
  }
}
