
export interface Student {
  id: number;
  name: string;
  email: string;
  grade: string;
  status: 'Active' | 'Inactive';
  enrollDate: string;
}

export interface Staff {
  id: number;
  name: string;
  email: string;
  department: string;
  role: string;
  status: 'Active' | 'Inactive';
  hireDate: string;
}

export interface Course {
  id: number;
  name: string;
  code: string;
  instructor: string;
  credits: number;
  status: 'Active' | 'Inactive';
  schedule: string;
}

export interface Attendance {
  id: number;
  studentId: number;
  studentName: string;
  courseId: number;
  courseName: string;
  date: string;
  status: 'Present' | 'Absent' | 'Late';
}

export interface Appointment {
  id: number;
  studentName: string;
  staffName: string;
  date: string;
  time: string;
  purpose: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
}

export interface Message {
  id: number;
  sender: string;
  recipient: string;
  subject: string;
  content: string;
  date: string;
  status: 'Read' | 'Unread';
}
