import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RoleButton } from "@/components/ui/role-button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, BookOpen, BarChart3, Shield, Wifi } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role: string) => {
    navigate(`/${role}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <GraduationCap className="w-8 h-8" />
                <Badge className="bg-white/20 text-white border-white/30">
                  Punjab Education Initiative
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                EduTrack Punjab
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Digital attendance and curriculum tracking system for Punjab schools
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4" />
                  Secure & Reliable
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Wifi className="w-4 h-4" />
                  Offline Support
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <BarChart3 className="w-4 h-4" />
                  Real-time Analytics
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Role Selection */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Select Your Role</h2>
          <p className="text-lg text-muted-foreground">
            Choose your role to access the appropriate dashboard
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="group hover:shadow-elevated transition-all duration-300 cursor-pointer border-2 hover:border-teacher/30"
                onClick={() => handleRoleSelect('teacher')}>
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 bg-teacher/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teacher/20 transition-colors">
                <BookOpen className="w-8 h-8 text-teacher" />
              </div>
              <CardTitle className="text-teacher">Teacher</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Mark attendance, track curriculum progress, and manage classroom activities
              </p>
              <RoleButton 
                role="teacher" 
                size="lg" 
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRoleSelect('teacher');
                }}
              >
                Enter Dashboard
              </RoleButton>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elevated transition-all duration-300 cursor-pointer border-2 hover:border-admin/30"
                onClick={() => handleRoleSelect('admin')}>
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 bg-admin/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-admin/20 transition-colors">
                <BarChart3 className="w-8 h-8 text-admin" />
              </div>
              <CardTitle className="text-admin">Administrator</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                View analytics, generate reports, and monitor school-wide performance
              </p>
              <RoleButton 
                role="admin" 
                size="lg" 
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRoleSelect('admin');
                }}
              >
                View Analytics
              </RoleButton>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elevated transition-all duration-300 cursor-pointer border-2 hover:border-parent/30"
                onClick={() => handleRoleSelect('parent')}>
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 bg-parent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-parent/20 transition-colors">
                <Users className="w-8 h-8 text-parent" />
              </div>
              <CardTitle className="text-parent">Parent</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Monitor your child's attendance, progress, and school activities
              </p>
              <RoleButton 
                role="parent" 
                size="lg" 
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRoleSelect('parent');
                }}
              >
                View Progress
              </RoleButton>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elevated transition-all duration-300 cursor-pointer border-2 hover:border-student/30"
                onClick={() => handleRoleSelect('student')}>
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 bg-student/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-student/20 transition-colors">
                <GraduationCap className="w-8 h-8 text-student" />
              </div>
              <CardTitle className="text-student">Student</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Access assignments, check attendance, and view academic progress
              </p>
              <RoleButton 
                role="student" 
                size="lg" 
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRoleSelect('student');
                }}
              >
                Access Portal
              </RoleButton>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-muted/30 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-muted-foreground">
              Designed specifically for Punjab schools with offline capability
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Track attendance patterns and curriculum progress with instant insights
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Offline Support</h3>
              <p className="text-sm text-muted-foreground">
                Continue working without internet, sync when connection returns
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-semibold mb-2">Secure & Compliant</h3>
              <p className="text-sm text-muted-foreground">
                Government-grade security with Punjab education standards compliance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;