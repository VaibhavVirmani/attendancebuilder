import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Calendar, 
  BookOpen, 
  TrendingUp, 
  Clock,
  CheckCircle,
  AlertCircle,
  MessageSquare
} from "lucide-react";

const ParentPortal = () => {
  const attendanceData = [
    { date: "2024-01-15", status: "present", subject: "Mathematics" },
    { date: "2024-01-15", status: "present", subject: "Science" },
    { date: "2024-01-15", status: "present", subject: "English" },
    { date: "2024-01-14", status: "late", subject: "History" },
    { date: "2024-01-14", status: "present", subject: "Mathematics" },
    { date: "2024-01-13", status: "absent", subject: "Physical Education" },
  ];

  const recentActivities = [
    { activity: "Quiz - Mathematics Chapter 4", score: "18/20", date: "Today", status: "completed" },
    { activity: "Science Project Submission", score: "Pending", date: "Tomorrow", status: "pending" },
    { activity: "English Essay Writing", score: "15/20", date: "Yesterday", status: "completed" },
    { activity: "History Assignment", score: "19/20", date: "2 days ago", status: "completed" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "present":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "late":
        return <Clock className="w-4 h-4 text-warning" />;
      case "absent":
        return <AlertCircle className="w-4 h-4 text-destructive" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "present":
        return "bg-success text-success-foreground";
      case "late":
        return "bg-warning text-warning-foreground";
      case "absent":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-parent to-parent/80 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Parent Portal</h1>
              <p className="text-parent-foreground/80 mt-1">
                Welcome, Mr. Singh • Monitoring: Aarav Singh (Class 8-A) • Punjab Public School
              </p>
            </div>
            <Button
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Contact Teacher
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Student Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="This Month Attendance"
            value="92%"
            icon={<Calendar className="w-5 h-5" />}
            trend={{ value: 3, isPositive: true }}
            description="vs last month"
          />
          <DashboardCard
            title="Academic Performance"
            value="87%"
            icon={<TrendingUp className="w-5 h-5" />}
            trend={{ value: 5, isPositive: true }}
            description="class average: 82%"
          />
          <DashboardCard
            title="Assignments Completed"
            value="15/16"
            icon={<BookOpen className="w-5 h-5" />}
            description="1 pending"
          />
          <DashboardCard
            title="Overall Grade"
            value="A-"
            icon={<User className="w-5 h-5" />}
            description="excellent performance"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Attendance */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-parent">
                  <Calendar className="w-5 h-5" />
                  Recent Attendance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {attendanceData.map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(record.status)}
                        <div>
                          <p className="font-medium">{record.subject}</p>
                          <p className="text-sm text-muted-foreground">{record.date}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(record.status)}>
                        {record.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities & Notifications */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-parent">
                  <BookOpen className="w-5 h-5" />
                  Recent Activities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg border-l-4 ${
                      activity.status === "completed" ? "bg-success/10 border-success" :
                      "bg-warning/10 border-warning"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.activity}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
                      </div>
                      <Badge 
                        className={
                          activity.status === "completed" 
                            ? "bg-success text-success-foreground" 
                            : "bg-warning text-warning-foreground"
                        }
                      >
                        {activity.score}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MessageSquare className="w-5 h-5" />
                  Communication
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-primary/10 border-l-4 border-primary rounded-lg">
                  <p className="text-sm font-medium">Parent-Teacher Meeting</p>
                  <p className="text-xs text-muted-foreground">Scheduled for Jan 20, 2024 at 2:00 PM</p>
                </div>
                <div className="p-3 bg-success/10 border-l-4 border-success rounded-lg">
                  <p className="text-sm font-medium">Progress Report Available</p>
                  <p className="text-xs text-muted-foreground">Monthly report ready for download</p>
                </div>
                <Button className="w-full" variant="outline">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Message to Teacher
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Weekly Schedule */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-parent">
              <Calendar className="w-5 h-5" />
              This Week's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-5 gap-4">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, index) => (
                <div key={day} className="space-y-2">
                  <h3 className="font-medium text-center pb-2 border-b">{day}</h3>
                  <div className="space-y-1 text-sm">
                    <div className="p-2 bg-primary/10 rounded text-center">Mathematics</div>
                    <div className="p-2 bg-secondary/10 rounded text-center">Science</div>
                    <div className="p-2 bg-success/10 rounded text-center">English</div>
                    <div className="p-2 bg-warning/10 rounded text-center">History</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ParentPortal;