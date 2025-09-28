import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  School, 
  TrendingUp, 
  Download, 
  Calendar,
  BookOpen,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

const AdminDashboard = () => {
  const schoolStats = [
    { name: "Punjab Public School", attendance: 92, students: 450, status: "excellent" },
    { name: "Government High School", attendance: 87, students: 320, status: "good" },
    { name: "Khalsa Academy", attendance: 94, students: 280, status: "excellent" },
    { name: "Modern School", attendance: 83, students: 380, status: "needs-attention" },
  ];

  const recentAlerts = [
    { type: "warning", message: "Low attendance in Class 6-B (Government High School)", time: "2 hours ago" },
    { type: "success", message: "Monthly report generated for Punjab Public School", time: "1 day ago" },
    { type: "info", message: "New curriculum guidelines uploaded", time: "2 days ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-admin to-admin/80 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Administrator Dashboard</h1>
              <p className="text-admin-foreground/80 mt-1">
                District Education Office • Punjab State • 15 Schools Monitored
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Download className="w-4 h-4 mr-2" />
                Export Reports
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Review
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Overview Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Total Students"
            value="1,430"
            icon={<Users className="w-5 h-5" />}
            trend={{ value: 3, isPositive: true }}
            description="across all schools"
          />
          <DashboardCard
            title="Average Attendance"
            value="89%"
            icon={<TrendingUp className="w-5 h-5" />}
            trend={{ value: 2, isPositive: true }}
            description="this month"
          />
          <DashboardCard
            title="Active Schools"
            value="15"
            icon={<School className="w-5 h-5" />}
            description="reporting daily"
          />
          <DashboardCard
            title="Curriculum Progress"
            value="91%"
            icon={<BookOpen className="w-5 h-5" />}
            trend={{ value: 5, isPositive: true }}
            description="state guidelines"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* School Performance */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-admin">
                  <School className="w-5 h-5" />
                  School Performance Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {schoolStats.map((school, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="font-medium">{school.name}</h3>
                          <Badge 
                            className={
                              school.status === "excellent" 
                                ? "bg-success text-success-foreground" 
                                : school.status === "good"
                                ? "bg-primary text-primary-foreground"
                                : "bg-warning text-warning-foreground"
                            }
                          >
                            {school.status === "excellent" ? "Excellent" : 
                             school.status === "good" ? "Good" : "Needs Attention"}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-6 mt-2 text-sm text-muted-foreground">
                          <span>{school.students} students</span>
                          <span>{school.attendance}% attendance</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              school.attendance >= 90 ? "bg-success" : 
                              school.attendance >= 85 ? "bg-primary" : "bg-warning"
                            }`}
                            style={{ width: `${school.attendance}%` }}
                          />
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alerts & Notifications */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-warning">
                  <AlertTriangle className="w-5 h-5" />
                  Recent Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentAlerts.map((alert, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg border-l-4 ${
                      alert.type === "warning" ? "bg-warning/10 border-warning" :
                      alert.type === "success" ? "bg-success/10 border-success" :
                      "bg-primary/10 border-primary"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {alert.type === "warning" ? <AlertTriangle className="w-4 h-4 text-warning mt-0.5" /> :
                       alert.type === "success" ? <CheckCircle className="w-4 h-4 text-success mt-0.5" /> :
                       <Calendar className="w-4 h-4 text-primary mt-0.5" />}
                      <div className="flex-1">
                        <p className="text-sm font-medium">{alert.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <TrendingUp className="w-5 h-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Generate Monthly Report
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Review Teacher Performance
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Update Curriculum Guidelines
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule School Visits
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;