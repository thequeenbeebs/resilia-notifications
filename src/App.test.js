import App from './App';
import { shallow } from "enzyme";


it("renders without crashing", () => {
  shallow(<App />);
});

const user = "Blaire"

it("renders user in welcome heading", () => {
  const wrapper = shallow(<App />);
  const header = <h3>Welcome, {user}!</h3>;
  expect(wrapper.contains(header)).toEqual(true);
});


