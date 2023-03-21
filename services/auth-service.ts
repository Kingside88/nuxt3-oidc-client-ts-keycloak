// /services/auth-service.ts
import { User, UserManager, WebStorageStateStore } from 'oidc-client-ts'
import { environment } from './environment'

export default class AuthService {
  userManager: UserManager

  constructor() {
    const settings = {
      authority: environment.authorityUrl,
      client_id: environment.clientId,
      client_secret: environment.clientSecret,
      redirect_uri: `${window.location.origin}/auth`,
      silent_redirect_uri: `${window.location.origin}/silent-refresh`,
      post_logout_redirect_uri: `${window.location.origin}`,
      response_type: 'code',
      scope: environment.clientScope,
      userStore: new WebStorageStateStore(),
      loadUserInfo: true,
    }
    this.userManager = new UserManager(settings)
  }

  public signInRedirect() {
    return this.userManager.signinRedirect()
  }

  public signInCallback() {
    return this.userManager.signinCallback()
  }

  public renewToken(): Promise<void> {
    return this.userManager.signinSilentCallback()
  }

  public logout(): Promise<void> {
    return this.userManager.signoutRedirect()
  }

  public getUser(): Promise<User | null> {
    return this.userManager.getUser()
  }
}