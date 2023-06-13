import TodoView from "./views/TodoView";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoView />
    </QueryClientProvider>
  );
}

export default App;
