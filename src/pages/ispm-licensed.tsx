import { ISPMLicensedDashboard } from "@/components/dashboard/ISPMLicensedDashboard";
import { useSearchParams } from "react-router-dom";

const ISPMLicensedPage = () => {
  const [searchParams] = useSearchParams();
  const packageName = searchParams.get('package') || 'ISPM Package';

  return <ISPMLicensedDashboard packageName={packageName} />;
};

export default ISPMLicensedPage;