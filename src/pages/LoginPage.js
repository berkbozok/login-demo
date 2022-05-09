import { LogoAndTitle, LoginForm, SocialButtons } from '../components';

export default function LoginPage() {
  return (
    <div>
      <div className="container">
        <div className="container" id="container">
          <div className="form-container sign-in-container">
            <LogoAndTitle />
            <LoginForm />
            <SocialButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
