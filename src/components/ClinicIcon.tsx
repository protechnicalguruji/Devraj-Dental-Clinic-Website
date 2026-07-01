import React from "react";
import {
  Stethoscope,
  Sparkles,
  ShieldAlert,
  HeartPulse,
  Scissors,
  Crown,
  Smile,
  Sun,
  Baby,
  CalendarDays,
  UserRoundCheck,
  Cpu,
  BookOpen,
  Activity,
  Award,
  Zap,
  Heart,
  IndianRupee,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  Star,
  MessageSquare,
  Check,
  Menu,
  X,
  ChevronRight,
  Calendar
} from "lucide-react";

interface ClinicIconProps {
  name: string;
  className?: string;
}

export const ClinicIcon: React.FC<ClinicIconProps> = ({ name, className = "w-6 h-6" }) => {
  switch (name) {
    case "Stethoscope":
      return <Stethoscope className={className} />;
    case "Sparkles":
      return <Sparkles className={className} />;
    case "ShieldAlert":
      return <ShieldAlert className={className} />;
    case "HeartPulse":
      return <HeartPulse className={className} />;
    case "Scissors":
      return <Scissors className={className} />;
    case "Crown":
      return <Crown className={className} />;
    case "Smile":
      return <Smile className={className} />;
    case "Sun":
      return <Sun className={className} />;
    case "Baby":
      return <Baby className={className} />;
    case "CalendarDays":
      return <CalendarDays className={className} />;
    case "UserRoundCheck":
      return <UserRoundCheck className={className} />;
    case "Cpu":
      return <Cpu className={className} />;
    case "BookOpen":
      return <BookOpen className={className} />;
    case "Activity":
      return <Activity className={className} />;
    case "Award":
      return <Award className={className} />;
    case "Zap":
      return <Zap className={className} />;
    case "Heart":
      return <Heart className={className} />;
    case "IndianRupee":
      return <IndianRupee className={className} />;
    case "Phone":
      return <Phone className={className} />;
    case "Mail":
      return <Mail className={className} />;
    case "MapPin":
      return <MapPin className={className} />;
    case "Clock":
      return <Clock className={className} />;
    case "ArrowRight":
      return <ArrowRight className={className} />;
    case "ExternalLink":
      return <ExternalLink className={className} />;
    case "Star":
      return <Star className={className} />;
    case "MessageSquare":
      return <MessageSquare className={className} />;
    case "Check":
      return <Check className={className} />;
    case "Menu":
      return <Menu className={className} />;
    case "X":
      return <X className={className} />;
    case "ChevronRight":
      return <ChevronRight className={className} />;
    case "Calendar":
      return <Calendar className={className} />;
    default:
      return <Stethoscope className={className} />;
  }
};
