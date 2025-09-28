import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Student {
  id: string;
  name: string;
  rollNumber: string;
  status: "present" | "absent" | "late" | "pending";
}

interface AttendanceGridProps {
  students: Student[];
  onMarkAttendance: (studentId: string, status: Student["status"]) => void;
  className?: string;
}

export const AttendanceGrid = ({ students, onMarkAttendance, className }: AttendanceGridProps) => {
  const getStatusColor = (status: Student["status"]) => {
    switch (status) {
      case "present":
        return "bg-success text-success-foreground";
      case "absent":
        return "bg-destructive text-destructive-foreground";
      case "late":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: Student["status"]) => {
    switch (status) {
      case "present":
        return <Check className="w-4 h-4" />;
      case "absent":
        return <X className="w-4 h-4" />;
      case "late":
        return <Clock className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <Card className={cn("shadow-card", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-teacher">
          Class 8-A Attendance
          <Badge variant="outline" className="ml-auto">
            {students.filter(s => s.status !== "pending").length} / {students.length} Marked
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {students.map((student) => (
            <div
              key={student.id}
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-muted-foreground">
                  #{student.rollNumber}
                </div>
                <div className="font-medium">{student.name}</div>
                <Badge className={cn("ml-2", getStatusColor(student.status))}>
                  <span className="flex items-center gap-1">
                    {getStatusIcon(student.status)}
                    {student.status}
                  </span>
                </Badge>
              </div>
              <div className="flex gap-1">
                <Button
                  size="sm"
                  variant="outline"
                  className="text-success hover:bg-success hover:text-success-foreground"
                  onClick={() => onMarkAttendance(student.id, "present")}
                >
                  <Check className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-warning hover:bg-warning hover:text-warning-foreground"
                  onClick={() => onMarkAttendance(student.id, "late")}
                >
                  <Clock className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => onMarkAttendance(student.id, "absent")}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};