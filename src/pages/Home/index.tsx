import { HomeContainer, AppLink } from "./styled.components";
import { HOME_APPS } from "../../config/apps";

const Home = () => {
  return (
    <HomeContainer>
      {HOME_APPS.map((app) => (
        <AppLink key={app.url} app={app} />
      ))}
    </HomeContainer>
  );
};

export default Home;
