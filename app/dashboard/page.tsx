import { getIssues } from "@/lib/dal"

const DashboardPage = async() => {
  const issues = await getIssues()
  console.log(issues)
  return 'dashboard';
}

export default DashboardPage