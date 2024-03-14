import { SignIn } from "@clerk/clerk-react"
 
export default function SignInPage() {
  return <SignIn appearance={{
    variables: {
      colorPrimary: "rgb(247 201 115)",
      colorTextOnPrimaryBackground:"black",
      colorText: "black"
    }
  }}/>;
}