//chakra ui
import { ChakraProvider } from "@chakra-ui/react";
//react router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//custom components
import {Nav} from './components/utilities/Nav';
import {Home} from './pages/Home/Home';
import {About} from './pages/About/About';
import {Services} from './pages/Services/Services';
import {Projects} from './pages/Projects/Projects';
//style
import "./App.css";

//routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Nav></Nav>}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="projects" element={<Projects />} />
    </Route>
  ),
  { basename: import.meta.env.DEV ? "/" : "/Insula/" }
);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
