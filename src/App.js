import { Layout } from "antd";
import { RouterProvider } from "react-router-dom";
import Copyright from "./components/Copyright";
import router from "./routes";

const { Content, Footer, Header } = Layout;

function App() {
  return (
    <Layout>
      <Header></Header>
      <Content>
        <RouterProvider router={router} />
      </Content>
      <Footer>
        <Copyright />
      </Footer>
    </Layout>
  );
}

export default App;
