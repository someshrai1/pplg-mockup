import { UsageLicensedDashboard } from "@/components/dashboard/UsageLicensedDashboard";
import { useSearchParams } from "react-router-dom";

const UsageLicensedPage = () => {
  const [searchParams] = useSearchParams();
  const packageName = searchParams.get('package') || 'Usage Package';

  return <UsageLicensedDashboard packageName={packageName} />;
};

export default UsageLicensedPage;