
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminLayout } from "./components/layout/AdminLayout";
import { Dashboard } from "./components/pages/Dashboard";
import { Students } from "./components/pages/Students";
import { Staff } from "./components/pages/Staff";
import { Courses } from "./components/pages/Courses";
import { Attendance } from "./components/pages/Attendance";
import { Appointments } from "./components/pages/Appointments";
import { Messages } from "./components/pages/Messages";
import { Reports } from "./components/pages/Reports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLayout><Dashboard /></AdminLayout>} />
          <Route path="/students" element={<AdminLayout><Students /></AdminLayout>} />
          <Route path="/staff" element={<AdminLayout><Staff /></AdminLayout>} />
          <Route path="/courses" element={<AdminLayout><Courses /></AdminLayout>} />
          <Route path="/attendance" element={<AdminLayout><Attendance /></AdminLayout>} />
          <Route path="/appointments" element={<AdminLayout><Appointments /></AdminLayout>} />
          <Route path="/messages" element={<AdminLayout><Messages /></AdminLayout>} />
          <Route path="/reports" element={<AdminLayout><Reports /></AdminLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
