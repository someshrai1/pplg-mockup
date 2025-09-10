import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { FileText, CreditCard, Download, Calculator, CheckCircle, Building, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TrialEndExperience3Props {
  trialData: {
    eventsAnalyzed: number;
    identitiesScanned: number;
    aiInsights: number;
    postureScore: number;
  };
}

export function TrialEndExperience3({ trialData }: TrialEndExperience3Props) {
  const [formData, setFormData] = useState({
    companyName: "Acme Corporation",
    contactEmail: "john.smith@acmecorp.com",
    contactPhone: "+1 (555) 123-4567",
    billingAddress: "123 Business Ave",
    city: "San Francisco",
    state: "CA",
    zipCode: "94105",
    country: "us",
    subscriptionTerm: "",
    licensePackage: "",
    customRequirements: "",
    agreedToTerms: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const licensePackages = [
    {
      id: "essential",
      name: "ISPM Essential",
      description: "Essential identity security posture monitoring",
      features: ["Up to 500 identities", "Basic AI insights", "Standard reporting"],
      price: "$8,500 /month",
      recommended: false
    },
    {
      id: "pro",
      name: "ISPM Pro",
      description: "Advanced posture management and analytics",
      features: ["Everything in Essential plus:", "Up to 2,000 identities", "Advanced AI analytics", "Custom dashboards", "API access"],
      price: "$18,000 /month",
      recommended: true
    },
    {
      id: "premium",
      name: "ISPM Premium",
      description: "Complete enterprise identity security platform",
      features: ["Everything in Pro plus:", "Unlimited identities", "Full AI suite", "24/7 support"],
      price: "$25,000 /month",
      recommended: false
    }
  ];

  const subscriptionTerms = [
    { value: "12", label: "12 months (5% discount)" },
    { value: "24", label: "24 months (10% discount)" },
    { value: "36", label: "36 months (15% discount)" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmitQuote = async () => {
    // Basic validation
    if (!formData.companyName || !formData.contactEmail || !formData.licensePackage || !formData.subscriptionTerm) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.agreedToTerms) {
      toast({
        title: "Terms agreement required",
        description: "Please agree to the terms and conditions.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate quote submission
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    toast({
      title: "Quote requested successfully!",
      description: "Your quote request has been submitted. You'll receive a detailed proposal within 24 hours.",
    });
    
    setIsSubmitting(false);
  };

  // Calculate recommended package based on trial usage
  const getRecommendedPackage = () => {
    if (trialData.identitiesScanned > 1500) return "premium";
    if (trialData.identitiesScanned > 500) return "pro";
    return "essential";
  };

  const recommendedPackage = getRecommendedPackage();

  return (
    <div className="space-y-6">
      {/* License Package Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select License Package</CardTitle>
          <CardDescription>
            Choose the ISPM package that best fits your needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {licensePackages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`relative border rounded-lg p-4 cursor-pointer transition-all ${
                  formData.licensePackage === pkg.id
                    ? 'border-primary bg-primary/5'
                    : 'hover:border-primary/50'
                } ${pkg.id === recommendedPackage ? 'ring-2 ring-success/20' : ''}`}
                onClick={() => handleInputChange('licensePackage', pkg.id)}
              >
                {pkg.id === recommendedPackage && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-success text-success-foreground">
                    Recommended
                  </Badge>
                )}
                <div className="space-y-3">
                  <div>
                    <div className="font-medium">{pkg.name}</div>
                    <div className="text-sm text-muted-foreground">{pkg.description}</div>
                  </div>
                  <div className="text-lg font-bold text-primary">{pkg.price}</div>
                  <div className="space-y-1">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-success" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Company Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5" />
            Company Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-blue-800">
              <strong>We have your details on file.</strong> Please confirm if we should continue to use these details for your quote request.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="companyName">Company Name *</Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                placeholder="Your company name"
              />
            </div>
            <div>
              <Label htmlFor="contactEmail">Contact Email *</Label>
              <Input
                id="contactEmail"
                type="email"
                value={formData.contactEmail}
                onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                placeholder="contact@company.com"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="contactPhone">Contact Phone</Label>
            <Input
              id="contactPhone"
              type="tel"
              value={formData.contactPhone}
              onChange={(e) => handleInputChange('contactPhone', e.target.value)}
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </CardContent>
      </Card>

      {/* Billing Address */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Billing Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="billingAddress">Address</Label>
            <Input
              id="billingAddress"
              value={formData.billingAddress}
              onChange={(e) => handleInputChange('billingAddress', e.target.value)}
              placeholder="Street address"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="md:col-span-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                placeholder="City"
              />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                value={formData.state}
                onChange={(e) => handleInputChange('state', e.target.value)}
                placeholder="State"
              />
            </div>
            <div>
              <Label htmlFor="zipCode">ZIP Code</Label>
              <Input
                id="zipCode"
                value={formData.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                placeholder="ZIP"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="de">Germany</SelectItem>
                <SelectItem value="fr">France</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Subscription Terms */}
      <Card>
        <CardHeader>
          <CardTitle>Subscription Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="subscriptionTerm">Subscription Term *</Label>
            <Select value={formData.subscriptionTerm} onValueChange={(value) => handleInputChange('subscriptionTerm', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select subscription term" />
              </SelectTrigger>
              <SelectContent>
                {subscriptionTerms.map((term) => (
                  <SelectItem key={term.value} value={term.value}>
                    {term.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="customRequirements">Custom Requirements</Label>
            <Textarea
              id="customRequirements"
              value={formData.customRequirements}
              onChange={(e) => handleInputChange('customRequirements', e.target.value)}
              placeholder="Any specific requirements, integrations, or custom features needed?"
              className="min-h-[100px]"
            />
          </div>
        </CardContent>
      </Card>

      {/* Terms and Submit */}
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="terms"
              checked={formData.agreedToTerms}
              onCheckedChange={(checked) => handleInputChange('agreedToTerms', checked.toString())}
            />
            <label htmlFor="terms" className="text-sm cursor-pointer">
              I agree to the terms and conditions and authorize Saviynt to contact me regarding this quote request. 
              I understand that pricing is subject to final contract negotiation.
            </label>
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Ready to request your quote?</div>
              <div className="text-sm text-muted-foreground">
                You'll receive a detailed proposal within 24 hours
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Summary
              </Button>
              <Button 
                onClick={handleSubmitQuote}
                disabled={isSubmitting}
                size="lg"
                className="min-w-[150px]"
              >
                <FileText className="h-4 w-4 mr-2" />
                {isSubmitting ? "Submitting..." : "Request Quote"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}