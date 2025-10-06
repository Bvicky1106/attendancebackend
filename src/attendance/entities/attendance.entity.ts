import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @Column()
  workedDuration: number;

  @Column()
  breakCount: number;

  @Column()
  totalBreakDuration: number;
}
