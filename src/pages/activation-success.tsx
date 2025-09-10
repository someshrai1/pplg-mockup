import { ActivationSuccess } from "@/components/dashboard/ActivationSuccess";
import { useNavigate, useSearchParams } from "react-router-dom";

const ActivationSuccessPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const packageName = searchParams.get('package') || 'ISPM Package';

  const handleContinue = () => {
    navigate(`/ispm-licensed?package=${encodeURIComponent(packageName)}`);
  };

  return <ActivationSuccess onContinue={handleContinue} packageName={packageName} />;
};

export default ActivationSuccessPage;