import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, CheckCircle, Clock, User, Mail, Phone, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TrialEndExperience2Props {
  trialData: {
    eventsAnalyzed: number;
    identitiesScanned: number;
    aiInsights: number;
    postureScore: number;
  };
}

export function TrialEndExperience2({ trialData }: TrialEndExperience2Props) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "John Smith",
    email: "john.smith@acmecorp.com",
    phone: "+1 (555) 123-4567",
    company: "Acme Corporation",
    jobTitle: "IT Security Manager",
    teamSize: "201-1000",
    interests: "Identity governance, Risk management, Compliance",
    questions: ""
  });
  const [isScheduling, setIsScheduling] = useState(false);
  const { toast } = useToast();

  // Generate available dates (next 14 days, excluding weekends)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let currentDate = new Date(today);
    currentDate.setDate(currentDate.getDate() + 1); // Start from tomorrow
    
    while (dates.length < 10) {
      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude weekends
        dates.push({
          value: currentDate.toISOString().split('T')[0],
          label: currentDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric' 
          })
        });
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const availableTimes = [
    { value: "09:00", label: "9:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "15:00", label: "3:00 PM" },
    { value: "16:00", label: "4:00 PM" }
  ];

  const teamSizes = [
    { value: "1-10", label: "1-10 employees" },
    { value: "11-50", label: "11-50 employees" },
    { value: "51-200", label: "51-200 employees" },
    { value: "201-1000", label: "201-1000 employees" },
    { value: "1000+", label: "1000+ employees" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleScheduleMeeting = async () => {
    if (!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.company) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields and select a date/time.",
        variant: "destructive"
      });
      return;
    }

    setIsScheduling(true);
    
    // Simulate scheduling process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Meeting scheduled successfully!",
      description: `Your sales consultation is scheduled for ${selectedDate} at ${selectedTime}. You'll receive a calendar invite shortly.`,
    });
    
    setIsScheduling(false);
  };

  return (
    <div className="space-y-6">
      {/* Schedule Meeting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Schedule Sales Consultation
          </CardTitle>
          <CardDescription>
            Book a 30-minute call with our ISPM specialists to discuss your needs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Date and Time Selection */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="date">Select Date *</Label>
              <Select value={selectedDate} onValueChange={setSelectedDate}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a date" />
                </SelectTrigger>
                <SelectContent>
                  {getAvailableDates().map((date) => (
                    <SelectItem key={date.value} value={date.value}>
                      {date.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="time">Select Time *</Label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a time" />
                </SelectTrigger>
                <SelectContent>
                  {availableTimes.map((time) => (
                    <SelectItem key={time.value} value={time.value}>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {time.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-blue-800">
                <strong>We have your details on file.</strong> Please confirm if we should continue to use these details for scheduling your consultation.
              </p>
            </div>
            <h4 className="font-medium flex items-center gap-2">
              <User className="h-4 w-4" />
              Contact Information
            </h4>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@company.com"
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                  placeholder="Your role"
                />
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="space-y-4">
            <h4 className="font-medium flex items-center gap-2">
              <Building className="h-4 w-4" />
              Company Information
            </h4>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="Your company name"
                />
              </div>
              <div>
                <Label htmlFor="teamSize">Company Size</Label>
                <Select value={formData.teamSize} onValueChange={(value) => handleInputChange('teamSize', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    {teamSizes.map((size) => (
                      <SelectItem key={size.value} value={size.value}>
                        {size.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="interests">Areas of Interest</Label>
              <Input
                id="interests"
                value={formData.interests}
                onChange={(e) => handleInputChange('interests', e.target.value)}
                placeholder="e.g., Identity governance, Risk management, Compliance"
              />
            </div>
            <div>
              <Label htmlFor="questions">Questions or Requirements</Label>
              <Textarea
                id="questions"
                value={formData.questions}
                onChange={(e) => handleInputChange('questions', e.target.value)}
                placeholder="Any specific questions or requirements you'd like to discuss?"
                className="min-h-[80px]"
              />
            </div>
          </div>

          {/* Schedule Button */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <div className="font-medium">Ready to schedule your consultation?</div>
              <div className="text-sm text-muted-foreground">
                Our team will prepare a personalized demo based on your trial results
              </div>
            </div>
            <Button 
              onClick={handleScheduleMeeting}
              disabled={isScheduling}
              size="lg"
              className="min-w-[150px]"
            >
              <Calendar className="h-4 w-4 mr-2" />
              {isScheduling ? "Scheduling..." : "Schedule Meeting"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}