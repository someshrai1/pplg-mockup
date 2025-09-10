import { POUpload } from "@/components/dashboard/POUpload";
import { useNavigate, useSearchParams } from "react-router-dom";

const POUploadPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const packageName = searchParams.get('package') || 'ISPM Package';

  const handleSuccess = () => {
    navigate(`/activation-success?package=${encodeURIComponent(packageName)}`);
  };

  return <POUpload onSuccess={handleSuccess} packageName={packageName} />;
};

export default POUploadPage;