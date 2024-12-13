import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn afterSignUpUrl="/app"/>
    </div>
  );
};

export default SignInPage;
