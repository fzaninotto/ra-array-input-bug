import {
  Admin,
  Resource,
  ListGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import CreateWithBug from './CreateWithBug';

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="test"
      list={ListGuesser}
      create={CreateWithBug}
    />
  </Admin>
);
