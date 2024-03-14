import { UserProfile } from "@clerk/clerk-react"
 
export default function UserProfilePage() {
  return <UserProfile appearance={{
    variables: {
      colorPrimary: "#edac12",
      colorTextOnPrimaryBackground:"black",
      colorText: "black"
    }
  }}/>;
}