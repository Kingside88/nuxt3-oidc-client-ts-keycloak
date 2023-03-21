// /composables/useServices.ts
import AuthService from '@/services/auth-service'
import { useAuth } from "@/stores/auth";
import ApplicationService from "@/services/application-service";

export const useServices = () => {
    const authStore = useAuth();

  return {
    $auth: new AuthService(),
    $application: new ApplicationService(
        authStore.access_token
      )    
  }
}