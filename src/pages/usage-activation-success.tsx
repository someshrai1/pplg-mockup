import { ActivationSuccess } from "@/components/dashboard/ActivationSuccess";
import { useNavigate, useSearchParams } from "react-router-dom";

const UsageActivationSuccessPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const packageName = searchParams.get('package') || 'Usage Package';

  const handleContinue = () => {
    navigate(`/usage-licensed?package=${encodeURIComponent(packageName)}`);
  };

  return <ActivationSuccess onContinue={handleContinue} packageName={packageName} />;
};

export default UsageActivationSuccessPage;