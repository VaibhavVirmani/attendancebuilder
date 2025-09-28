import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { AttendanceGrid } from "@/components/attendance/AttendanceGrid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, QrCode, Calendar, TrendingUp, Bell } from "lucide-react";

interface Student {
  id: string;
  name: string;
  rollNumber: string;
  status: "present" | "absent" | "late" | "pending";
}

const Dashboard = () => {
  const [students, setStudents] = useState<Student[]>([
    { id: "1", name: "Aarav Singh", rollNumber: "001", status: "pending" },
    { id: "2", name: "Priya Sharma", rollNumber: "002", status: "present" },
    { id: "3", name: "Arjun Patel", rollNumber: "003", status: "pending" },
    { id: "4", name: "Kavya Gupta", rollNumber: "004", status: "late" },
    { id: "5", name: "Rohan Kumar", rollNumber: "005", status: "pending" },
    { id: "6", name: "Ananya Reddy", rollNumber: "006", status: "absent" },
  ]);

  const handleMarkAttendance = (studentId: string, status: Student["status"]) => {
    setStudents(prev => 
      prev.map(student => 
        student.id === studentId ? { ...student, status } : student
      )
    );
  };

  const attendanceStats = {
    present: students.filter(s => s.status === "present").length,
    absent: students.filter(s => s.status === "absent").length,
    late: students.filter(s => s.status === "late").length,
    total: students.length,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
              <p className="text-primary-foreground/80 mt-1">
                Welcome back, Mrs. Kaur • Class 8-A • Punjab Public School
              </p>
            </div>
            <Button
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <QrCode className="w-4 h-4 mr-2" />
              Quick Scan
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Total Students"
            value={attendanceStats.total}
            icon={<Users className="w-5 h-5" />}
            description="Enrolled in Class 8-A"
          />
          <DashboardCard
            title="Present Today"
            value={attendanceStats.present}
            icon={<Calendar className="w-5 h-5" />}
            trend={{ value: 5, isPositive: true }}
            description="vs yesterday"
          />
          <DashboardCard
            title="Curriculum Progress"
            value="87%"
            icon={<BookOpen className="w-5 h-5" />}
            trend={{ value: 12, isPositive: true }}
            description="this month"
          />
          <DashboardCard
            title="Engagement Score"
            value="92%"
            icon={<TrendingUp className="w-5 h-5" />}
            trend={{ value: 3, isPositive: true }}
            description="class average"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Attendance Grid */}
          <div className="lg:col-span-2">
            <AttendanceGrid
              students={students}
              onMarkAttendance={handleMarkAttendance}
            />
          </div>

          {/* Today's Schedule */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-teacher">
                  <Calendar className="w-5 h-5" />
                  Today's Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">Mathematics</p>
                    <p className="text-sm text-muted-foreground">Algebra - Chapter 4</p>
                  </div>
                  <Badge className="bg-success text-success-foreground">9:00 AM</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border-l-4 border-primary">
                  <div>
                    <p className="font-medium">Science</p>
                    <p className="text-sm text-muted-foreground">Physics - Motion</p>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">Current</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                  <div>
                    <p className="font-medium">English</p>
                    <p className="text-sm text-muted-foreground">Poetry Analysis</p>
                  </div>
                  <Badge variant="outline">11:30 AM</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-warning">
                  <Bell className="w-5 h-5" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-warning/10 border-l-4 border-warning rounded-lg">
                  <p className="text-sm font-medium">Parent Meeting</p>
                  <p className="text-xs text-muted-foreground">Tomorrow 2:00 PM - Aarav's parents</p>
                </div>
                <div className="p-3 bg-success/10 border-l-4 border-success rounded-lg">
                  <p className="text-sm font-medium">Curriculum Updated</p>
                  <p className="text-xs text-muted-foreground">Science syllabus revised for Q3</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;