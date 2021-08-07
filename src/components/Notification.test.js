import Notification from './Notification'
import { mount } from "enzyme";

const notifications = [
  {"id":26,"message":"Microgrant applications are now open.","user_id":11,"created_at":"2021-08-06T04:20:06.110Z","updated_at":"2021-08-06T04:20:06.110Z"},
  {"id":27,"message":"Congratulations! You have recieved tax exempt status.","user_id":11,"created_at":"2021-08-06T04:20:06.157Z","updated_at":"2021-08-06T04:20:06.157Z"},
  {"id":28,"message":"It is time to refile for your tax exempt status.","user_id":11,"created_at":"2021-08-06T04:20:06.165Z","updated_at":"2021-08-06T04:20:06.165Z"},
  {"id":29,"message":"You have a new message.","user_id":11,"created_at":"2021-08-06T04:20:06.174Z","updated_at":"2021-08-06T04:20:06.174Z"}
]

describe("<Notification />", () => {
    it("accepts notification props", () => {
      const wrapper = mount(<Notification notification={notifications[0]} />);
      expect(wrapper.props().notification).toEqual(notifications[0]);
    });
    it("contains correct notification message", () => {
      const wrapper = mount(<Notification notification={notifications[0]} />);
      const value = wrapper.find("p").text();
      expect(value).toEqual(notifications[0].message);
    });
  });