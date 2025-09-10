import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload, FileText, CheckCircle, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface POUploadProps {
  onSuccess: () => void;
  packageName: string;
}

export function POUpload({ onSuccess, packageName }: POUploadProps) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (validTypes.includes(file.type)) {
        setUploadedFile(file);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or DOC file.",
          variant: "destructive"
        });
      }
    }
  };

  const handleProceed = async () => {
    if (!uploadedFile) {
      toast({
        title: "No file uploaded",
        description: "Please upload your purchase order first.",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsUploading(false);
    onSuccess();
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Upload Purchase Order</CardTitle>
            <CardDescription>
              Please upload your signed purchase order for {packageName}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert>
              <FileText className="h-4 w-4" />
              <AlertDescription>
                Upload your signed purchase order (PDF or DOC format) to complete the activation process.
              </AlertDescription>
            </Alert>

            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center relative">
              {!uploadedFile ? (
                <div>
                  <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <div className="space-y-2">
                    <p className="text-lg font-medium">Upload Purchase Order</p>
                    <p className="text-sm text-muted-foreground">
                      Drag and drop your file here, or click to browse
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Supports PDF and DOC files up to 10MB
                    </p>
                  </div>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-between bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-primary" />
                    <div className="text-left">
                      <p className="font-medium">{uploadedFile.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={removeFile}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>

            {uploadedFile && (
              <div className="flex items-center gap-2 text-sm text-success">
                <CheckCircle className="h-4 w-4" />
                File uploaded successfully
              </div>
            )}

            <div className="flex gap-4">
              <Button variant="outline" className="flex-1">
                Cancel
              </Button>
              <Button 
                onClick={handleProceed}
                disabled={!uploadedFile || isUploading}
                className="flex-1"
              >
                {isUploading ? "Processing..." : "Proceed"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}