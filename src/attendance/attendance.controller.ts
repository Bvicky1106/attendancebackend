// src/attendance/attendance.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { Attendance } from './entities/attendance.entity';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post()
  create(@Body() attendanceData: Partial<Attendance>) {
    return this.attendanceService.createAttendance(attendanceData);
  }

  @Get()
  getAll() {
    return this.attendanceService.getAllAttendance();
  }
}
