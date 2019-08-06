import ContentWithSidebar from "../content-with-sidebar";

describe("The content with sidebar component", () => {

  it("renders its children", () => {
    const sidebar = () => <div className="sidebar">Sidebar</div>;
    const content = () => <div className="content">Content</div>;

    const wrapper = mount(
      <ContentWithSidebar sidebar={sidebar} content={content}/>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});