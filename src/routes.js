import ChatPage from "./Pages/ChatPage/ChatPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { LOGIN_ROUTE, CHAT_ROUTE } from "./utils/constants";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage
  }
]

export const privetRoutes = [
  {
    path: CHAT_ROUTE,
    Component: ChatPage
  }
]
