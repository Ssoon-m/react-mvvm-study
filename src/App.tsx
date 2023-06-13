import { Suspense } from "react";
import TodoView from "./views/TodoView";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>loading...</div>}>
        <TodoView />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
