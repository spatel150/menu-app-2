import { useState, useEffect } from "react";
import { getAuthenticatedUser } from "./common";
import { APP_ROUTES } from "../utils/constants";
import { useNavigate } from "react-router-dom";

export function useUser() {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserDetails() {
      const { authenticated, user } = await getAuthenticatedUser();
      if (!authenticated) {
        navigate(APP_ROUTES.LOG_IN);
        return;
      }
      setUser(user);
      setAuthenticated(authenticated);
    }
    getUserDetails();
  }, [navigate]);

  return { user, authenticated };
}
