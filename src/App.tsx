import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import PageNotFound from "./pages/PageNotFound"
import GlobalStyle from "./styles/GlobalStyle"
import Signup from "./pages/Signup"
import AppLayout from "./components/layouts/AppLayout"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Issues from "./pages/Issues"
import IssueDetail from "./pages/IssueDetail"
import Dashbord from "./pages/Dashbord"
import { Toaster } from "react-hot-toast"
import NewIssue from "./pages/NewIssue"
import Signin from "./pages/Signin"
import AuthLayout from "./components/layouts/AuthLayout"
import RequireAuth from "./components/layouts/RequireAuth"
import { DarkModeProvider } from "./context/DarkModeContext"
import { SideBarProvider } from "./context/SideBarContext"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
})

function App() {
  return (
    <SideBarProvider>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <ReactQueryDevtools initialIsOpen={false} />

          <GlobalStyle />
          <BrowserRouter>
            <Routes>

              <Route element={
                <RequireAuth>
                  <AppLayout />
                </RequireAuth>
              }>
                <Route index element={<Navigate replace to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashbord />} />
                <Route path="/issues" element={<Issues />} />
                <Route path="/issues/:issueId" element={<IssueDetail />} />
                <Route path="/issues/new" element={<NewIssue />} />
              </Route>

              <Route element={<AuthLayout />}>
                <Route path="/auth/signin" element={<Signin />} />
                <Route path="/auth/signup" element={<Signup />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </DarkModeProvider>
    </SideBarProvider>
  )
}

export default App
