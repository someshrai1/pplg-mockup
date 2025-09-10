import { UsagePOUpload } from "@/components/dashboard/UsagePOUpload";
import { useNavigate, useSearchParams } from "react-router-dom";

const UsagePOUploadPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const packageName = searchParams.get('package') || 'Usage Package';

  const handleSuccess = () => {
    navigate(`/usage-activation-success?package=${encodeURIComponent(packageName)}`);
  };

  return <UsagePOUpload onSuccess={handleSuccess} packageName={packageName} />;
};

export default UsagePOUploadPage;