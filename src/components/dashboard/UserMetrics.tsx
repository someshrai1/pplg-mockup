import { UserLimitUtilization } from "./UserLimitUtilization";
import { UsersList } from "./UsersList";

interface UserMetricsProps {
  detailed?: boolean;
}

export function UserMetrics({ detailed = false }: UserMetricsProps) {
  return (
    <div className="space-y-6">
      <UserLimitUtilization />
      {detailed && <UsersList />}
    </div>
  );
}