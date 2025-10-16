import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import Dashboard from "./pages/dashboard/page";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="min-h-screen">
        <section className="font-semibold ">
          <Dashboard />
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;
