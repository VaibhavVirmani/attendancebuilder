import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const roleButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-card hover:shadow-elevated transform hover:scale-105",
  {
    variants: {
      role: {
        teacher: "bg-teacher text-teacher-foreground hover:bg-teacher/90",
        admin: "bg-admin text-admin-foreground hover:bg-admin/90",
        parent: "bg-parent text-parent-foreground hover:bg-parent/90",
        student: "bg-student text-student-foreground hover:bg-student/90",
      },
      size: {
        default: "h-12 px-6 py-3",
        lg: "h-16 px-8 py-4 text-base",
        xl: "h-20 px-12 py-6 text-lg",
      },
    },
    defaultVariants: {
      role: "teacher",
      size: "default",
    },
  }
);

export interface RoleButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'role'>,
    VariantProps<typeof roleButtonVariants> {}

const RoleButton = ({ className, role, size, ...props }: RoleButtonProps) => {
  return (
    <Button
      className={cn(roleButtonVariants({ role, size, className }))}
      {...props}
    />
  );
};

export { RoleButton, roleButtonVariants };