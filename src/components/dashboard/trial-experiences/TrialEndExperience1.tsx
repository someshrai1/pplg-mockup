import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Download, FileText, Shield, Trash2, AlertTriangle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TrialEndExperience1Props {
  trialData: {
    eventsAnalyzed: number;
    identitiesScanned: number;
    aiInsights: number;
    postureScore: number;
  };
}

export function TrialEndExperience1({ trialData }: TrialEndExperience1Props) {
  const [selectedBackupItems, setSelectedBackupItems] = useState<string[]>([]);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const backupItems = [
    {
      id: "reports",
      name: "ISPM Reports & Analytics",
      description: "All generated reports, risk assessments, and analytics data",
      size: "2.3 MB",
      icon: FileText
    },
    {
      id: "insights",
      name: "AI-Driven Insights",
      description: "Machine learning insights and recommendations",
      size: "1.8 MB", 
      icon: Shield
    },
    {
      id: "posture", 
      name: "Identity Posture Archives",
      description: "Complete identity security posture snapshots",
      size: "4.1 MB",
      icon: Shield
    },
    {
      id: "events",
      name: "Event Analysis Data",
      description: "All analyzed security events and patterns",
      size: "8.7 MB",
      icon: FileText
    }
  ];

  const handleBackupSelection = (itemId: string) => {
    setSelectedBackupItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleBackupDownload = async () => {
    if (selectedBackupItems.length === 0) {
      toast({
        title: "No items selected",
        description: "Please select at least one item to backup.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate backup process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Backup completed",
      description: `${selectedBackupItems.length} items have been backed up and are ready for download.`,
    });
    
    setIsProcessing(false);
  };

  const handleDataDeletion = async () => {
    if (!confirmDelete) {
      toast({
        title: "Confirmation required",
        description: "Please confirm that you understand the data deletion process.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate deletion process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    toast({
      title: "Data deletion completed",
      description: "All ISPM trial data has been securely removed from Saviynt.",
    });
    
    setIsProcessing(false);
    setShowDeleteDialog(false);
  };

  return (
    <div className="space-y-6">
      {/* Backup Data Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Backup Your Data
          </CardTitle>
          <CardDescription>
            Select the data you want to export before deletion
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {backupItems.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id}
                  className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer"
                  onClick={() => handleBackupSelection(item.id)}
                >
                  <Checkbox 
                    checked={selectedBackupItems.includes(item.id)}
                    onChange={() => handleBackupSelection(item.id)}
                  />
                  <Icon className="h-5 w-5 text-primary mt-0.5" />
                  <div className="flex-1">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                    <Badge variant="outline" className="mt-1">
                      {item.size}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="flex gap-2 mt-6">
            <Button 
              onClick={() => setSelectedBackupItems(backupItems.map(item => item.id))}
              variant="outline"
            >
              Select All
            </Button>
            <Button 
              onClick={() => setSelectedBackupItems([])}
              variant="outline"
            >
              Clear Selection
            </Button>
            <Button 
              onClick={handleBackupDownload}
              disabled={isProcessing}
              className="ml-auto"
            >
              <Download className="h-4 w-4 mr-2" />
              {isProcessing ? "Processing..." : "Download Backup"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Data Deletion Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trash2 className="h-5 w-5 text-destructive" />
            Data Deletion
          </CardTitle>
          <CardDescription>
            Permanently remove all ISPM trial data from Saviynt
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              This action cannot be undone. All ISPM trial data will be permanently deleted and cannot be recovered.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="text-sm text-muted-foreground">
              The following data will be permanently deleted:
            </div>
            <ul className="text-sm space-y-1 ml-4">
              <li>• All ISPM dashboards and configurations</li>
              <li>• Identity risk assessments and scores</li>
              <li>• AI-generated insights and recommendations</li>
              <li>• Security event analysis data</li>
              <li>• Trial usage logs and audit trails</li>
            </ul>

            <div className="flex items-center space-x-2 p-4 bg-muted/50 rounded-lg">
              <Checkbox 
                id="confirm-delete"
                checked={confirmDelete}
                onCheckedChange={(checked) => setConfirmDelete(checked === true)}
              />
              <label 
                htmlFor="confirm-delete" 
                className="text-sm font-medium cursor-pointer"
              >
                I understand that this action is irreversible and all data will be permanently deleted
              </label>
            </div>

            <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
              <DialogTrigger asChild>
                <Button 
                  variant="destructive" 
                  disabled={!confirmDelete}
                  className="w-full"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete All ISPM Data
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirm Data Deletion</DialogTitle>
                  <DialogDescription>
                    Are you absolutely sure you want to delete all ISPM trial data? This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowDeleteDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    variant="destructive" 
                    onClick={handleDataDeletion}
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Deleting..." : "Delete All Data"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}