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
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText, CreditCard, Download, CheckCircle, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export function ISPMQuoteForm() {
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
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteData, setQuoteData] = useState<{
    packageName: string;
    basePrice: number;
    term: string;
    totalPrice: number;
    companyName: string;
  } | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const licensePackages = [
    {
      id: "essential",
      name: "ISPM Essential",
      description: "Core identity security posture management",
      features: [
        "Identity risk assessment",
        "Basic posture monitoring",
        "Standard reporting",
        "Email support"
      ],
      price: "$75,000/year",
      recommended: false
    },
    {
      id: "pro",
      name: "ISPM Pro",
      description: "Advanced security capabilities with AI insights",
      features: [
        "All Essential features",
        "AI-driven insights",
        "Advanced analytics",
        "Priority support",
        "Custom integrations"
      ],
      price: "$150,000/year",
      recommended: true
    },
    {
      id: "premium",
      name: "ISPM Premium",
      description: "Enterprise-grade security with full automation",
      features: [
        "All Pro features",
        "Full automation",
        "Enterprise integrations",
        "24/7 support",
        "Dedicated success manager"
      ],
      price: "$300,000/year",
      recommended: false
    }
  ];

  const subscriptionTerms = [
    { value: "12", label: "12 months" },
    { value: "24", label: "24 months" },
    { value: "36", label: "36 months" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmitQuote = async () => {
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
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    // Generate quote data
    const selectedPackage = licensePackages.find(pkg => pkg.id === formData.licensePackage);
    const basePrice = selectedPackage?.id === 'essential' ? 75000 : 
                     selectedPackage?.id === 'pro' ? 150000 : 300000;
    const termMultiplier = parseInt(formData.subscriptionTerm) / 12;
    const totalPrice = basePrice * termMultiplier;
    
    setQuoteData({
      packageName: selectedPackage?.name || 'ISPM Package',
      basePrice,
      term: formData.subscriptionTerm,
      totalPrice,
      companyName: formData.companyName
    });
    
    setIsSubmitting(false);
    setShowQuoteModal(true);
  };

  const handleDownloadQuote = () => {
    if (!quoteData) return;
    
    const quoteContent = `
SAVIYNT QUOTE - ISPM

Company: ${quoteData.companyName}
Package: ${quoteData.packageName}
Term: ${quoteData.term} months
Total Price: $${quoteData.totalPrice.toLocaleString()}

Quote valid for 30 days.
Final pricing subject to contract negotiation.
    `;
    
    const blob = new Blob([quoteContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `saviynt-ispm-quote-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Quote downloaded",
      description: "Your ISPM quote has been downloaded successfully."
    });
  };

  const handleAcceptQuote = () => {
    if (!quoteData) return;
    
    setShowQuoteModal(false);
    navigate(`/po-upload?package=${encodeURIComponent(quoteData.packageName)}`);
  };

  return (
    <div className="space-y-6">
      {/* License Package Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select ISPM Package</CardTitle>
          <CardDescription>
            Choose the ISPM package that best fits your security needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {licensePackages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`relative border rounded-lg p-4 cursor-pointer transition-all flex flex-col h-full ${
                  formData.licensePackage === pkg.id
                    ? 'border-primary bg-primary/5'
                    : 'hover:border-primary/50'
                } ${pkg.recommended ? 'ring-2 ring-success/20' : ''}`}
                onClick={() => handleInputChange('licensePackage', pkg.id)}
              >
                {pkg.recommended && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-success text-success-foreground">
                    Recommended
                  </Badge>
                )}
                <div className="flex flex-col h-full">
                  <div className="mb-3">
                    <div className="font-medium text-base mb-2">{pkg.name}</div>
                    <div className="text-sm text-muted-foreground mb-3">{pkg.description}</div>
                    <div className="text-lg font-bold text-primary">{pkg.price}</div>
                  </div>
                  <div className="flex-1 space-y-2">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
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
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreedToTerms: checked === true }))}
            />
            <label htmlFor="terms" className="text-sm cursor-pointer">
              I agree to the terms and conditions and authorize Saviynt to contact me regarding this ISPM quote request.
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
        </CardContent>
      </Card>

      {/* Quote Modal */}
      <Dialog open={showQuoteModal} onOpenChange={setShowQuoteModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Your ISPM Quote</DialogTitle>
            <DialogDescription>
              Review your ISPM quote details below
            </DialogDescription>
          </DialogHeader>
          {quoteData && (
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">{quoteData.packageName}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Base Price (Annual):</span>
                    <span>${quoteData.basePrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Term:</span>
                    <span>{quoteData.term} months</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg border-t pt-2">
                    <span>Total Price:</span>
                    <span>${quoteData.totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Quote valid for 30 days. Final pricing subject to contract negotiation.
              </div>
            </div>
          )}
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={handleDownloadQuote}>
              <Download className="h-4 w-4 mr-2" />
              Download Quote
            </Button>
            <Button onClick={handleAcceptQuote}>
              Accept Quote
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}